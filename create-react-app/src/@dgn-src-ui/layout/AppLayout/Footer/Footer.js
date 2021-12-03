import React from "react";
import styles from "./Footer.module.scss";
import cx from "classnames";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GlobalLink } from "@dgn-src-ui/core/Link";

/**
 * Footer of application. Appears on every page except
 * for full screen takeovers.
 *
 * @param {*} props
 * @returns React Fragment
 */
const Footer = ({ className }) => {
  return (
    <Box className={cx(className, styles.Footer)} role="contentinfo">
      <Typography align="center">
        <GlobalLink to="secure" className={styles.Footer__link}>
          <LockOutlinedIcon />
          Secure
        </GlobalLink>
        <GlobalLink to="terms" className={styles.Footer__link}>
          Terms of Use
        </GlobalLink>
        <GlobalLink to="privacy" className={styles.Footer__link}>
          Privacy Policy
        </GlobalLink>
        <GlobalLink to="faq" className={styles.Footer__link}>
          FAQ
        </GlobalLink>
      </Typography>
    </Box>
  );
};

export default Footer;
