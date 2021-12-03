import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const SRCLogo = props => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        width="28"
        height="18"
        viewBox="0 0 28 18"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <path
            id="a"
            d="M27.755 8.376L21.05.41a.803.803 0 0 0-.689-.394.813.813 0 0 0-.806.82c0 .238.1.453.26.603l6.075 7.488-6.007 7.345h-2.595l5.677-6.716.01-.013h.001a.848.848 0 0 0 .225-.586.848.848 0 0 0-.225-.587l-.011-.012L16.186.422l-.004-.005a.802.802 0 0 0-.693-.402h-4.761a.813.813 0 0 0-.806.82c0 .137.019.28.092.38l6.31 7.771-5.378 6.56c-.032.033-.495.704-1.31.704H3.215a1.593 1.593 0 0 1-1.598-1.613V3.265c0-.801.724-1.624 1.617-1.624H7.23c.471 0 .806-.327.806-.806C8.035.355 7.7 0 7.23 0L3.195.016C1.284.016 0 1.62 0 3.25v11.388c0 1.754 1.521 3.249 3.195 3.249h6.42c.34 0 .677-.054 1-.16a3.48 3.48 0 0 0 1.522-1.019l6.051-7.171c.287-.33.325-.81.005-1.167h-.001c-.004-.003-.007-.008-.01-.012l-5.724-6.716H15.1l5.982 7.315-6.295 7.722c-.002.002.002.008.01.019a.827.827 0 0 0-.092.38c0 .453.361.82.806.82h4.76a.803.803 0 0 0 .698-.407l6.78-7.935.01-.013c.32-.357.282-.835-.004-1.166"
          />
        </defs>
        <use fill={props.stroke} fillRule="nonzero" xlinkHref="#a" />
      </svg>
    </Icon>
  );
};

SRCLogo.defaultProps = {
  stroke: "#000"
};

SRCLogo.propTypes = {
  /** Class for the span that wraps the SVG icon */
  className: PropTypes.string
};

export default SRCLogo;
