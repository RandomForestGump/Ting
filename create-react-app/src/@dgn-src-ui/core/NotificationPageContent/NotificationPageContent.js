import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./NotificationPageContent.module.scss";

const NotificationPageContent = props => {
  let { className, children, ...other } = props;
  return (
    <div
      className={cx(props.className, styles.NotificationPageContent)}
      {...other}
    >
      {children}
    </div>
  );
};

NotificationPageContent.propTypes = {
   /** Class name for this component*/
   className: PropTypes.string,
  /** Holds any content components (eg. typography, cta, etc.) */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default NotificationPageContent;
