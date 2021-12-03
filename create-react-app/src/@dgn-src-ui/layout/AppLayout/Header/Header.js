import React from "react";
import cx from "classnames";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconList from "@dgn-src-ui/core/IconList";
import { DiscoverLogo, SRCLogo } from "@dgn-src-ui/core/Icon";
import styles from "./Header.module.scss";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
}));

/**
 * Header of application. This component displays on every page,
 * including full screen takeovers.
 *
 * @param {*} props
 * @returns React Fragment
 */
const Header = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={cx(className, styles.Header)} role="banner">
      <Container className={cx(styles.Header__container, classes.container)}>
        <IconList>
          <SRCLogo
            className={cx(styles.Header__logo, styles.Header__logo__src)}
            style={{ marginRight: "8px" }}
          />
          <DiscoverLogo
            className={cx(styles.Header__logo, styles.Header__logo__discover)}
            style={{ marginLeft: "8px" }}
          />
        </IconList>
      </Container>
    </Box>
  );
};

export default Header;
