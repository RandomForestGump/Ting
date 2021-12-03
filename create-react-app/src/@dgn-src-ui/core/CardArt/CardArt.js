import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import DefaultImageSrc from "./default-discover-card-art.png";
import styles from "./CardArt.module.scss";

const CardArt = ({
  className,
  src = DefaultImageSrc,
  alt,
  imageProps,
  ...props
}) => {
  return (
    <Box
      className={cx(className, styles.cardArt)}
      {...props}
      style={
        src !== DefaultImageSrc
          ? {
              background: `transparent url(${DefaultImageSrc}) no-repeat`,
              backgroundSize: "contain",
            }
          : {}
      }
    >
      <img src={src} alt={alt} {...imageProps} />
    </Box>
  );
};

CardArt.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** image src */
  src: PropTypes.string,
  /** Alt Tag - leave empty for a decorative image */
  alt: PropTypes.string,
};

CardArt.defaultProps = {
  alt: "",
};

export default CardArt;
