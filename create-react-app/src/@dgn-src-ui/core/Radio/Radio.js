import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Radio as MuiRadio } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  icon: {
    width: "24px",
    height: "24px",
    border: "solid 1px #dbdbdb",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
  iconSmall: {
    width: "17px",
    height: "17px",
    border: "solid 1px #dbdbdb",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  checkedIcon: {
    "&:before": {
      display: "block",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "14px",
      height: "14px",
      content: '""',
      backgroundColor: "#ff6000",
      borderRadius: "50%",
    },
  },
  checkedIconSmall: {
    "&:before": {
      display: "block",
      position: "absolute",
      top: "3px",
      left: "3px",
      width: "9px",
      height: "9px",
      content: '""',
      backgroundColor: "#ff6000",
      borderRadius: "50%",
    },
  },
});

const RadioButton = ({ size, ...props }) => {
  const classes = useStyles();
  return (
    <MuiRadio
      color="primary"
      icon={
        <span
          className={cx(
            { [classes.icon]: size === "large" },
            { [classes.iconSmall]: size === "small" }
          )}
        />
      }
      checkedIcon={
        <span
          className={cx(
            { [classes.icon]: size === "large" },
            { [classes.iconSmall]: size === "small" },
            { [classes.checkedIcon]: size === "large" },
            { [classes.checkedIconSmall]: size === "small" }
          )}
        />
      }
      {...props}
    />
  );
};

const Radio = ({ className, label, checked, size, children, ...props }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      label={children ? children : label}
      control={<RadioButton size={size} />}
      className={cx(className, {
        [classes.checked]: checked,
      })}
      {...props}
    />
  );
};

Radio.propTypes = {
  /** The Radio button size - either small or large */
  size: PropTypes.oneOf(["small", "large"]),
};

Radio.defaultProps = {
  size: "large",
};

export default Radio;
