import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./NotificationPageIcon.module.scss";

const NotificationPageIcon = props => {
  let { className, Icon, ...other } = props;
  return (
    <div className={cx(props.className, styles.NotificationPageIcon)}>
      <Icon className={styles.NotificationPageIcon__icon} {...other} />
    </div>
  );
};

NotificationPageIcon.propTypes = {
  /** Class name for this component*/
  className: PropTypes.string,
  /** Icon Component */
  Icon: PropTypes.func
};

export default NotificationPageIcon;
