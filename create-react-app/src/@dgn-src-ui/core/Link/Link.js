import React from "react";
import PropTypes from "prop-types";
import MuiLink from "@material-ui/core/Link";

/**
 * Global link of application.
 *
 *
 * @param {*} props
 * @returns React Fragment
 */
const Link = ({ children, href, newWindow, ...props }) => {
  return (
    <MuiLink {...props} href={href} color="secondary">
      {children}
    </MuiLink>
  );
};

Link.propTypes = {
  /** Link content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** href for the link */
  href: PropTypes.string,
  /** when the link should be underlined */
  underline: PropTypes.oneOf(["none", "hover", "always"]),
  /** When using the GlobalLink component, this prop will use the value of the key within config.global.links */
  to: PropTypes.string
};

Link.defaultProps = {
  href: "#",
  underline: "hover"
};

export default Link;
