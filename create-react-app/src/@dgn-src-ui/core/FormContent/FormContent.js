import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./FormContent.module.scss";

const FormContent = props => {
  let { className, children, ...other } = props;
  return (
    <div className={cx(className, styles.FormContent)} {...other}>
      {children}
    </div>
  );
};

FormContent.displayName = "Form Content";

FormContent.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** Holds the select menu items */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default FormContent;
