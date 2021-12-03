import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { FormContext } from "react-hook-form";
import useForm from "@dgn-src-ui/hooks/useForm";
import {
  Validation,
  ValidationContextProvider,
} from "@dgn-src-ui/config/validation";
import styles from "./Form.module.scss";
import useConfig from "@dgn-src-ui/hooks/useConfig";
import alias from "@dgn-src-ui/config/validation/schemas/Aliases";

const useYupValidationResolver = (validationSchema) =>
  React.useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        // console.log(errors);
        return {
          values: {},
          errors: errors?.inner?.reduce(
            (allErrors, { path, message, params, type }) => {
              // Presence of message.mod will change the key to be:
              // ${FIELD_NAME}_${MOD}.
              const key = message.mod
                ? `${path}_${message.mod}`
                    .replace(/([A-Z])/g, "_$1")
                    .toUpperCase()
                : message.key;
              return {
                ...allErrors,
                [path]: {
                  message: { key },
                  params,
                  path,
                  type: type ?? "validation",
                },
              };
            },
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const Form = ({
  children,
  id,
  name,
  className,
  errors,
  defaultValues,
  contextConfig,
  onSubmit,
  onBeforeSubmit,
  onFormLoaded,
  ...other
}) => {
  const config = useConfig();

  // Retrieve the validation schema for the form, based on the
  // passed in form name (if one exists)
  const validationSchema = Validation.schema(name);

  const validationResolver = useYupValidationResolver(validationSchema);

  // Create context for the form, so we can access form data
  // here and throughout nested components.
  //
  // Override context config defaultValues key with the
  // defaultValues prop sent in directly
  const { handleSubmit, setError, setErrorWrapper, ...methods } = useForm({
    ...contextConfig,
    validationResolver: validationResolver,
    defaultValues: alias(name, defaultValues),
  });

  // If there are errors and the form is still reading
  // as resolved, resolve it.
  if (methods.hasErrors && !methods.isResolved) {
    methods.formResolver(true);
  }

  // Set any errors that came in on load
  React.useEffect(() => {
    Object.keys(errors).forEach((error) => {
      setError(error, "server", errors[error]);
    });
  }, [errors, setError]);

  // Callback to pass form context
  onFormLoaded({ ...methods, setError: setErrorWrapper }, config);

  return (
    <ValidationContextProvider value={validationSchema}>
      <FormContext
        {...methods}
        setError={setError}
        defaultValues={alias(name, defaultValues)}
      >
        <form
          id={id}
          name={name}
          onSubmit={handleSubmit(name, onSubmit)}
          className={cx(className, styles.Form)}
          {...other}
        >
          {children}
        </form>
      </FormContext>
    </ValidationContextProvider>
  );
};

Form.propTypes = {
  /** Holds the form content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /** Form Id */
  id: PropTypes.string.isRequired,
  /** Form name */
  name: PropTypes.string.isRequired,
  /** Class names to give form wrapper */
  className: PropTypes.string,
  /** Form action, required for submitting */
  action: PropTypes.string,
  /** Form submission method */
  method: PropTypes.oneOf(["GET", "POST", "PUT", "PATCH", "DELETE"]),
  /**
   * Default errors to display on component load. All keys take an
   * `ERROR_CODE` as a value.
   *
   * Name|Description||
   * |---|---|---|
   * form|Using this string literal value as an object key will display the form error||
   * fieldName|Using a field name as a key will trigger an error for that field||
   * */
  errors: PropTypes.shape({
    form: PropTypes.string,
    fieldName: PropTypes.string,
  }),
  /** Form default values, object of field-value pairs. Can also be passed along in the contextConfig */
  defaultValues: PropTypes.object,
  /** Form context provider config */
  contextConfig: PropTypes.shape({
    mode: PropTypes.oneOf(["onSubmit", "onBlur", "onChange"]),
    reValidateMode: PropTypes.oneOf(["onSubmit", "onBlur", "onChange"]),
    submitFocusError: PropTypes.bool,
  }),
  /** Submission handler for form if client side validation passes */
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  action: "",
  method: "POST",
  errors: {},
  defaultValues: {},
  contextConfig: {
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    submitFocusError: true,
  },
  onSubmit: () => {},
  onFormLoaded: () => {},
};

export default Form;
