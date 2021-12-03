import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * Global primary button of application.
 *
 *
 * @param {*} props
 * @returns React Fragment
 */
const Button = ({ children, loading, compressed, onClick, type, ...props }) => {
  // Grab form context to see if the form submission (if any)
  // has been resolved. Assumes true if outside of form context
  const context = useFormContext();
  const { isResolved } = useFormContext() || { isResolved: true };
  const [spinner, setSpinner] = useState(loading);

  // Wrapping the click handler to allow context to be sent through
  const handleOnClick = (e) => {
    onClick(e, context);
  };

  useEffect(() => {
    // If this is a submit button, check isResolved
    // to see if we should be showing a spinner
    if (type === "submit") {
      setSpinner(!isResolved);
    }
  }, [isResolved, type, setSpinner]);

  return (
    <MuiButton
      fullWidth
      disableElevation
      type={type}
      {...props}
      disabled={spinner}
      onClick={handleOnClick}
      style={compressed ? { marginBottom: "10px" } : null}
    >
      {spinner ? (
        <CircularProgress color="inherit" size="1.16em" thickness={4} />
      ) : (
        children
      )}
    </MuiButton>
  );
};

Button.propTypes = {
  /** material ui variant */
  variant: PropTypes.oneOf(["contained", "outlined"]),
  /** material ui color palette */
  color: PropTypes.oneOf(["primary", "secondary"]),
  /** onClick handler */
  onClick: PropTypes.func,
  /** True or False the button is in a loading state */
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  loading: false,
  onClick: () => {},
};

export default Button;
