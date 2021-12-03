import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { COLOR_BORDER, COLOR_ERROR } from "@dgn-src-ui/config/constants";
import styles from "./RadioListItem.module.scss";

const useStyles = makeStyles({
  root: {
    borderTop: `1px solid ${COLOR_BORDER}`,
    "&:last-child": {
      borderBottom: `1px solid ${COLOR_BORDER}`,
    },
  },
  content: {
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  compact: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  error: {
    border: `2px solid ${COLOR_ERROR}`,
  },
});

const RadioListItem = ({ className, error, compact, children, ...props }) => {
  const classes = useStyles();
  return (
    <div
      className={cx(className, styles.RadioListItem, classes.root)}
      {...props}
    >
      <div
        className={cx(styles.RadioListItem__content, classes.content, {
          [classes.error]: error,
          [classes.compact]: compact,
        })}
      >
        {children}
      </div>
    </div>
  );
};

RadioListItem.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** Holds the select menu items */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default RadioListItem;
