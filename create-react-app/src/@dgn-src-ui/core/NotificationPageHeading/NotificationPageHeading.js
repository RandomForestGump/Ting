import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Heading from "@dgn-src-ui/core/Heading";
import styles from "./NotificationPageHeading.module.scss";

const NotificationPageHeading = (props) => {
  let { className, afterIcon, children, ...other } = props;
  return (
    <div className={styles.NotificationPageHeading}>
      <Heading
        className={cx(className, styles.NotificationPageHeading__heading, {
          [styles.NotificationPageHeading__heading__afterIcon]: afterIcon,
        })}
        {...other}
      >
        {children}
      </Heading>
    </div>
  );
};

NotificationPageHeading.propTypes = {
  /** Class name for this component*/
  className: PropTypes.string,
  /** Holds heading Text */
  children: PropTypes.node,
};

export default NotificationPageHeading;
