import React, { useState } from "react";
import TooltipComp from "./Tooltip";
import Tooltipmdx from "./Tooltip.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import { text, boolean } from "@storybook/addon-knobs";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

export default {
  title: "UI Core",
  component: TooltipComp,
  parameters: {
    docs: {
      page: Tooltipmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const Tooltip = () => {
  let props = {
    text: text(
      "Tooltip Text",
      "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et"
    ),
    showarrow: boolean("Include Tooltip Arrow?", true),
  };

  const [tooltipOpen, setOpen] = useState(true);
  const handleTooltipOpen = () => {
    tooltipOpen ? setOpen(false) : setOpen(true);
  };

  return (
    <TooltipComp title={props.text} arrow={props.showarrow} open={tooltipOpen}>
      <IconButton onClick={handleTooltipOpen} color="secondary" size="small">
        <InfoOutlinedIcon />
      </IconButton>
    </TooltipComp>
  );
};
