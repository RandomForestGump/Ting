import React from "react";
import PropTypes from "prop-types";
import styles from "./Option.module.scss";

const Option = props => {
  let { children, ...other } = props;
  return (
    <div className={styles.Option} {...other}>
      {children}
    </div>
  );
};

Option.displayName = "Option";

Option.propTypes = {
  /** Holds the select menu items */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default Option;
