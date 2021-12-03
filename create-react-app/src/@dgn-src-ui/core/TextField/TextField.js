import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import FilledInput from "@material-ui/core/FilledInput";
import Input from "@dgn-src-ui/core/Input";
import MaskedTextField from "./MaskedTextField";
import styles from "./TextField.module.scss";

/**
 * Simple text field. Uses a filled input that is styled
 * to look like a border input, but contains the label.
 *
 * If mask properties are sent in, the MaskedTextField
 * component is passed in as an input component.
 *
 * Validation rules can be passed in on an individual field
 * basis. Using context, the validation schema is grabbed,
 * the rules are added, and the validation requirements
 * registered with the form context provider
 */
const TextField = ({
  id,
  name,
  className,
  label,
  icon,
  helperText,
  hideLabel,
  errorHighlight,
  rules,
  defaultValue,
  InputProps,
  maskProps,
  schema,
  type,
  ...other
}) => {
  // Grab the registration method from form context
  // so we can register input validation
  const { register, errors } = useFormContext();

  // const validations = useValidationSchema(name, defaultValue);

  return (
    <Input
      variant="filled"
      name={name}
      htmlFor={id}
      className={cx(className, styles.TextField)}
      type={type}
      label={label}
      icon={icon}
      helperText={helperText}
      hideLabel={hideLabel}
      errorHighlight={errorHighlight}
    >
      <FilledInput
        className={styles.TextField__input}
        fullWidth
        type={type}
        inputProps={{
          name: name,
          id: id,
          "aria-invalid": errors[name] ? true : false,
          "aria-describedby": errors[name] ? `error-message--${name}` : null,
          ...maskProps,
          ...other,
        }}
        {...InputProps}
        inputRef={register}
        inputComponent={maskProps ? MaskedTextField : undefined}
        defaultValue={defaultValue}
      />
    </Input>
  );
};

TextField.propTypes = {
  /** Input Id */
  id: PropTypes.string.isRequired,
  /** Input name */
  name: PropTypes.string.isRequired,
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** Array of rule objects */
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      test: PropTypes.func,
      message: PropTypes.string,
    })
  ),
  /** Default value to populate field with */
  defaultValue: PropTypes.string,
  /** Additional props to be passed along to the Material UI InputBase component */
  InputProps: PropTypes.object,
  /** Mask properties to be passed into react-text-mask input */
  maskProps: PropTypes.shape({
    mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    guide: PropTypes.bool,
    placeholderChar: PropTypes.string,
    keepCharPositions: PropTypes.bool,
    pipe: PropTypes.func,
    showMask: PropTypes.bool,
  }),
};

TextField.defaultProps = {
  rules: [],
};

export default TextField;
