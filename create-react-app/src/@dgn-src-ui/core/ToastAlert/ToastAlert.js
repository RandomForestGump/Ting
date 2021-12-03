import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const ToastAlert = ({
  open,
  onClose,
  autoHideDuration,
  severity,
  children,
  ...props
}) => {
  console.log("Auto Hide:", autoHideDuration);
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      {...props}
    >
      <Alert severity={severity} elevation={6} variant="filled">
        {children}
      </Alert>
    </Snackbar>
  );
};

ToastAlert.propTypes = {
  /** Whether or not the snackbar is open */
  open: PropTypes.bool.isRequired,
  /** Callback fired when the component requests to be closed. If the autoHideDuration is not null then it calls onClose */
  onClose: PropTypes.func,
  /** In milliseconds, how long should the notification be visible until it automatically disappears */
  autoHideDuration: PropTypes.number,
  /** Severity Level - decides color */
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  /** The text of the alert */
  children: PropTypes.any.isRequired
};

ToastAlert.defaultProps = {
  autoHideDuration: 6000,
  severity: "success"
};

export default ToastAlert;
