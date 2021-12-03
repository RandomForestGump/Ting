import React from "react";
import cx from "classnames";
import Box from "@material-ui/core/Box";
import Link from '../Link';
import styles from "../Link.module.scss";


/**
 * Global link of application.
 * 
 *
 * @param {*} props
 * @returns React Fragment
 */
const FullWidthLink = (props) => {
  let {children, className, ...other } = props;
  return (
    <Box className={styles.Link__wrapper}>
      <Link className={cx(className, styles.Link__fullWidth)} color="secondary" underline="hover" {...other}>
      {children}
      </Link>
    </Box>
  );
};

export default FullWidthLink;
