import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Disclaimer.module.scss";

const Disclaimer = props => {
  let { className, children, ...other } = props;
  return (
    <div className={cx(className, styles.Disclaimer)} {...other}>
      {children}
    </div>
  );
};

Disclaimer.displayName = "Disclaimer";

Disclaimer.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** Holds disclaimer text and/or links */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Disclaimer;
