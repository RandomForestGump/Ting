import React from "react";
import Button from "@dgn-src-ui/core/Button";

/**
 * Global Small button of application.
 *
 *
 * @param {*} props
 * @returns React Fragment
 */
const SmallButton = props => {
  return (
    <Button size="small" {...props}>
      {props.children}
    </Button>
  );
};

SmallButton.defaultProps = {
  variant: "outlined",
  color: "secondary",
  fullWidth: false
};

export default SmallButton;
