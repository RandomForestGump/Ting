import React from "react";
import PropTypes from "prop-types";
import { FONT_FAMILY_BOLD } from "@dgn-src-ui/config/constants";
import { useFormContext } from "react-hook-form";
import useLocale from "@dgn-src-ui/hooks/useLocale";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@dgn-src-ui/core/Alert";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "30px",
    fontFamily: FONT_FAMILY_BOLD,
  },
});

/**
 * Wrapper for the Alert component, specific to forms and form
 * context. Will automatically show up if there are errors
 * set for the form. A message override can be supplied by
 * setting an error using the name "form".
 */
const FormErrorAlert = ({ severity, children, ...props }) => {
  const { __ } = useLocale();
  const classes = useStyles();
  const { errors } = useFormContext();

  let error = errors?.form;

  // If a form error has not been explicitly set, check to see if
  // the form is submitted and not valid. If it is submitted and
  // not valid, they need to be prompted to fix the errors below.
  if (!error && Object.keys(errors).length) {
    error = { message: { key: "FIELD_ERRORS" } };
  }

  // Only show up if there are errors
  return Object.keys(errors).length ? (
    <Alert severity={severity} className={classes.root} {...props}>
      {__({ ...error, key: `errors.${error?.message?.key}` })}
    </Alert>
  ) : null;
};

// This is a simple opinionated wrapper, so use Alert's propTypes,
// except make children optional
FormErrorAlert.propTypes = { ...Alert.propTypes, children: PropTypes.node };

FormErrorAlert.defaultProps = {
  severity: "error",
};

export default FormErrorAlert;
