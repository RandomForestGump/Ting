import React from "react";
import PropTypes from "prop-types";
import useConfig from "@dgn-src-ui/hooks/useConfig";
import Link from "@dgn-src-ui/core/Link";

/**
 * Global link of application.
 *
 *
 * @param {*} props
 * @returns React Fragment
 */
const GlobalLink = ({ children, to, ...props }) => {
  const { global } = useConfig();
  return (
    <Link
      {...props}
      href={props.href ? props.href : global.links[to]}
      rel={props.rel ? props.rel : "noopener"}
      target={props.target ? props.target : "_blank"}
    >
      {children}
    </Link>
  );
};

GlobalLink.propTypes = {
  /** Link content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  /** What global configuration link to use */
};

export default GlobalLink;
