import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import useLocale from "@dgn-src-ui/hooks/useLocale";
import { COLOR_SUCCESS, COLOR_ERROR } from "@dgn-src-ui/config/constants";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

/**
 * Wrapper for text inputs and selects. Sets up
 * form controls, labels, etc and gets the actual
 * field passed in via its children.
 *
 * Using context, error text can be displayed under
 * the field by matching the field name to a key
 * in the errors object
 */
const Input = ({
  name,
  htmlFor,
  className,
  type,
  label,
  valid,
  icon,
  helperText,
  children,
  hideLabel,
  errorHighlight,
  error,
  ...other
}) => {
  // Grab the errors object that may have been populated.
  // Should be an object with field names as keys for
  // any fields that have errors
  const { errors } = useFormContext();

  const { __ } = useLocale();

  // Name fields use "dot" syntax, but the validation errors
  // come back as objects, so split the name string and
  // deep dive into the object to get the correct error
  name.split(".").forEach((namePart) => {
    error = error ? error?.[namePart] : errors?.[namePart];
  });

  return (
    <FormControl
      error={error || errorHighlight ? true : false}
      className={cx(className, styles.Input)}
      {...other}
    >
      <Grid
        container
        className={cx(className, styles.Input__field)}
        spacing={1}
        alignItems="center"
      >
        <Grid item className={styles.Input__inputContainer}>
          <InputLabel
            htmlFor={htmlFor}
            id={`${htmlFor}-label`}
            className={cx(
              styles.Input__label,
              styles[`Input__label__${type}`],
              { Input__label__hidden: hideLabel }
            )}
          >
            {label}
          </InputLabel>
          {children}
        </Grid>
        {icon && (error || valid) && (
          <Grid item>
            {error && (
              <WarningRoundedIcon
                style={{ color: COLOR_ERROR }}
                className={cx(styles.Input__icon, styles.Input__icon__error)}
              />
            )}
            {valid && !error && (
              <CheckCircleIcon
                style={{ color: COLOR_SUCCESS }}
                className={styles.Input__icon}
              />
            )}
          </Grid>
        )}
      </Grid>
      {error && (
        <FormHelperText
          role="alert"
          className={styles.Input__helperText}
          id={`error-message--${name}`}
        >
          {__({ ...error, key: `errors.fields.${error?.message?.key}` })}
        </FormHelperText>
      )}
      {helperText && (
        <FormHelperText className={styles.Input__helperText}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

Input.propTypes = {
  /** Name of input field */
  name: PropTypes.string.isRequired,
  /** String used in label for attribute */
  htmlFor: PropTypes.string.isRequired,
  /** Holds the input content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** The type of input field */
  type: PropTypes.string,
  /** Label content for input field */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Any text or content appearing below the input field */
  helperText: PropTypes.string,
  /** Whether or not to visually hide the label */
  hideLabel: PropTypes.bool,
  /** Show field as valid, error property can't be true */
  valid: PropTypes.bool,
  /** Whether or not to use error and valid icons */
  icon: PropTypes.bool,
  /** show the error border (no validation error, manual override) */
  errorHighlight: PropTypes.bool,
};

Input.defaultProps = {
  icon: true,
  type: "text",
  hideLabel: false,
  errorHighlight: false,
};

export default Input;
