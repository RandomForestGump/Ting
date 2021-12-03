import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

/**
 * h1 of application. Appears on every page.
 *
 *
 * @param {*} props
 * @returns React Fragment
 */
const Heading = props => {
  let { children, variant, ...other } = props;
  return (
    <Typography variant={variant} {...other}>
      {children}
    </Typography>
  );
};

Heading.propTypes = {
  /** material ui variant ( h1, h2, etc. ) */
  variant: PropTypes.string,
};

Heading.defaultProps = {
  variant: "h1"
};

export default Heading;
