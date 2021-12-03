import React, {useState} from "react";
import PropTypes from "prop-types";
import MuiTooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Tooltip = props => {
  let { children, title, arrow, placement, open, onClick, color, size, ariaLabel, ...other } = props;

  const [tooltipOpen, setOpen] = useState(false);
  const handleTooltipOpen = () => {
    tooltipOpen ? setOpen(false) : setOpen(true);
  };

  return (
    <MuiTooltip
      title={title}
      arrow={arrow}
      placement={placement}
      open={tooltipOpen}
      {...other}
    >
      <IconButton
        onClick={handleTooltipOpen}
        color={color}
        size={size}
        aria-label={ariaLabel}
      >
        {children ? children : <InfoOutlinedIcon style={{ fontSize: 15.6 }} />}
      </IconButton>
    </MuiTooltip>
  );
};

Tooltip.propTypes = {
  /** The element to click on that shows the tooltip. Can be an icon, image, text, or any element. By default it is the InfoOutlinedIcon */
  children: PropTypes.any,
  /** The content of the tooltip */
  title: PropTypes.any.isRequired,
  /** Whether or not the tooltip content has an arrow */
  arrow: PropTypes.bool,
  /** The placement of the toooltip in relation to its anchor */
  placement: PropTypes.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /** Whether or not the tooltip is shown */
  open: PropTypes.bool,
  /** What to do when the Tooltip's anchor is clicked */
  onClick: PropTypes.func,
  /** The color of the Icon anchor */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  /** The size of the Icon Button */
  size: PropTypes.oneOf(["small", "medium"]),
  /** The screen reader text for the anchor element */
  ariaLabel: PropTypes.string,
};

Tooltip.defaultProps = {
  arrow: true,
  placement: "bottom-end",
  color: "secondary",
  size: "small",
  ariaLabel: "click for more info",
};

export default Tooltip;