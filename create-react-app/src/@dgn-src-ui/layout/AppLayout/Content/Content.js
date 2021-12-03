import React from "react";
import styles from "./Content.module.scss";
import cx from "classnames";
import Box from "@material-ui/core/Box";

/**
 * Main content of the application between
 * the header and footer.
 *
 * @param {*} props
 * @returns React Fragment
 */
const Content = ({ className, children, ...props }) => {
  return (
    <Box className={cx(className, styles.Content)} role="main" {...props}>
      {children}
    </Box>
  );
};

export default Content;
