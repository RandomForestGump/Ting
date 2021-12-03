import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import styles from "./NotificationPage.module.scss";
import NotificationPageIcon from "@dgn-src-ui/core/NotificationPageIcon";
import NotificationPageHeading from "@dgn-src-ui/core/NotificationPageHeading";
import NotificationPageContent from "@dgn-src-ui/core/NotificationPageContent";

const NotificationPage = ({ className, icon, heading, children, ...props }) => {
  return (
    <div className={cx(className, styles.NotificationPage)} {...props}>
      <Container className={styles.NotificationPage__container}>
        {icon && <NotificationPageIcon Icon={icon} />}
        {heading && (
          <NotificationPageHeading afterIcon={icon ? true : false}>
            {heading}
          </NotificationPageHeading>
        )}
        {children && (
          <NotificationPageContent>{children}</NotificationPageContent>
        )}
      </Container>
    </div>
  );
};

NotificationPage.propTypes = {
  /** Class name for this component*/
  className: PropTypes.string,
  /** Holds Notification Page SubComponents (NotificationPageContent, NotificationPageIcon,NotificationPageHeading) */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default NotificationPage;
