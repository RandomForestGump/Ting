import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./LoadingArt.module.scss";
import LottiePlayer from "@dgn-src-ui/core/LottiePlayer";
// prettier-ignore
import animationData from "./data/07oqOU.json";

const LoadingArt = props => {
  let { className, ...other } = props;
  let animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMin slice"
    }
  };
  return (
    <Icon className={cx(className, styles.Loading)} {...other}>
      <LottiePlayer options={animationOptions} />
    </Icon>
  );
};

LoadingArt.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string
};

export default LoadingArt;
