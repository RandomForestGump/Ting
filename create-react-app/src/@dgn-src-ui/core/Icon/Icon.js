import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Icon.module.scss";

const Icon = React.forwardRef(
  ({ className, inline, children, ...props }, ref) => {
    return (
      <span
        aria-hidden="true"
        className={cx(styles.Icon, className, {
          [styles.Icon__inline]: inline
        })}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Icon.displayName = "Icon";

Icon.propTypes = {
  /** Class for the span that wraps the SVG icon */
  className: PropTypes.string,
  /** Whether or not this is an inline icon (auto correct) */
  inline: PropTypes.bool,
  /** SVG icon */
  children: PropTypes.element
};

export default Icon;
