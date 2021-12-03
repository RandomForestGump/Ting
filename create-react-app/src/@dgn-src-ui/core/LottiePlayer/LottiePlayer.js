import React from "react";
import PropTypes from "prop-types";
import Lottie from 'react-lottie';

const LottiePlayer = props => {
  let { options, width, height } = props;
  return (
    <Lottie
      options={options}
      width={width}
      height={height}
    >
    </Lottie>
  );
};

LottiePlayer.propTypes = {
  /** Animation settings */
  options: PropTypes.object
};

export default LottiePlayer;