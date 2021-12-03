import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./CTA.module.scss";

const CTA = props => {
  let { className, children, ...other } = props;
  return (
    <div className={cx(className, styles.CTA)} {...other}>
      {children}
    </div>
  );
};

CTA.propTypes = {
  /** Holds CTA Action Components (link or Button) */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.node
  ])
};

export default CTA;
