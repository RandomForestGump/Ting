import React from "react";
import { styled } from "@storybook/theming";
import { text } from "@storybook/addon-knobs";
import DisclaimerComp from "@dgn-src-ui/core/Disclaimer";
import Typography from "@material-ui/core/Typography";
import Disclaimermdx from "./Disclaimer.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";

export default {
  title: "UI Core",
  component: DisclaimerComp,
  parameters: {
    docs: {
      page: Disclaimermdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const Disclaimer = () => {
  const discText =
    "Your information will be shared with participating payment networks, service providers and as otherwise described in our Privacy Notice to give you the appropriate experience.";
  let props = {
    text: text("Disclaimer Text", discText),
  };
  return (
    <DisclaimerComp>
      <Typography variant="body2">{props.text}</Typography>
    </DisclaimerComp>
  );
};
