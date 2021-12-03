import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import useLocale from "@dgn-src-ui/hooks/useLocale";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./RadioList.module.scss";

const RadioList = ({
  className,
  label,
  name,
  children,
  defaultValue,
  ...props
}) => {
  const { __ } = useLocale();

  // Grab the registration method from form context
  // so we can register input validation
  const {
    register,
    setValue,
    errors,
    defaultValues,
    unregister,
  } = useFormContext();

  // If there is default value directly passed in via props, use that,
  // otherwise check the form context object
  if (defaultValues[name]) {
    defaultValue = defaultValues[name];
  }

  // Add the error prop to the list item
  const RadioListItem = (Item, error) => {
    let props = {
      ...Item.props,
      error: error,
    };
    return React.cloneElement(Item, props);
  };

  // Update the value when the radio value changes
  const handleOnChange = (event) => {
    setValue(name, event.target.value);
  };

  React.useEffect(() => {
    setValue(name, defaultValue);
    return () => unregister(name);
  }, [name, setValue, defaultValue, unregister]);

  // Make sure this input is registered for validation
  register({ name: name });

  return (
    <FormControl
      className={cx(className, styles.RadioList)}
      {...props}
      error={!!errors[name]}
      component="fieldset"
    >
      <FormLabel component="legend" className={styles.RadioList__label}>
        {label}
      </FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        onChange={handleOnChange}
        row
        defaultValue={defaultValue}
      >
        {(children.length &&
          children.map((child) => RadioListItem(child, errors[name]))) ||
          RadioListItem(children, errors[name])}
      </RadioGroup>
      {errors[name] && (
        <FormHelperText
          role="alert"
          className={styles.Input__helperText}
          id={`error-message--${name}`}
        >
          {__({
            ...errors[name],
            key: `errors.fields.${errors[name]?.message?.key}`,
          })}
        </FormHelperText>
      )}
    </FormControl>
  );
};

RadioList.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** Holds the select menu items */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default RadioList;
