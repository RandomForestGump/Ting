import React from "react";
import styles from "./NetworkMarquee.module.scss";
import cx from "classnames";
import { COLOR_SECONDARY_CONTRAST } from "@dgn-src-ui/config/constants";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { DiscoverLogo, SRCLogo } from "@dgn-src-ui/core/Icon";
import IconList from "@dgn-src-ui/core/IconList";

const NetworkMarquee = () => {
  return (
    <Box className={styles.NetworkMarquee}>
      <Container>
        <Typography
          variant="h1"
          className={styles.NetworkMarquee__heading}
          style={{ fontSize: 24, lineHeight: "32px" }}
        >
          Add your card to Discover<sup>&reg;</sup> Click to Pay
        </Typography>
        <IconList justify="center">
          <SRCLogo
            className={cx(
              styles.NetworkMarquee__logo,
              styles.NetworkMarquee__logo__src
            )}
            stroke={COLOR_SECONDARY_CONTRAST}
            style={{ marginRight: "14px" }}
          />
          <DiscoverLogo
            className={cx(
              styles.NetworkMarquee__logo,
              styles.NetworkMarquee__logo__discover
            )}
            style={{ marginLeft: "16px", border: "none" }}
          />
        </IconList>
      </Container>
    </Box>
  );
};

export default NetworkMarquee;
