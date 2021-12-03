import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import MuiAlert from "@material-ui/lab/Alert";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.body1,
    boxShadow: theme.shadows[1],
    borderWidth: "0 0 0 5px",
    padding: "10px 16px"
  }
}));

const Alert = props => {
  const classes = useStyles();
  let { severity, children, className, ...other } = props;
  const alertIconMapping = {
    success: <CheckCircleRoundedIcon fontSize="large" />,
    warning: <WarningRoundedIcon fontSize="large" />,
    error: <WarningRoundedIcon fontSize="large" />,
    info: <InfoIcon fontSize="large" />
  };
  return (
    <MuiAlert
      {...other}
      className={cx(classes.root, className)}
      severity={severity}
      iconMapping={alertIconMapping}
      variant="outlined"
    >
      <strong>{children}</strong>
    </MuiAlert>
  );
};

Alert.propTypes = {
  /** Severity Level*/
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  /** Content */
  children: PropTypes.node.isRequired,
  /** Class name for component */
  className: PropTypes.string
};

Alert.defaultProps = {
  severity: "info",
  className: ""
};

export default Alert;
