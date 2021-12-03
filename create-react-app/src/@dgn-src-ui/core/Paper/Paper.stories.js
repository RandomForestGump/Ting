import React from "react";
import { text, boolean, color } from "@storybook/addon-knobs";
import { useTheme } from "@material-ui/core/styles";
import PaperComp from "./Paper";
import Link from "@dgn-src-ui/core/Link/Link";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import Papermdx from "./Paper.mdx";

export default {
  title: "UI Core",
  component: PaperComp,
  parameters: {
    docs: {
      page: Papermdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const Paper = () => {
  let props = {
    text: text("Paper Content", "Paper Content"),
    action: boolean("Include Action", false),
    backgroundcolor: color("Background Color", "#f2f2f2"),
  };
  return (
    <PaperComp
      elevation={0}
      square
      action={props.action && <Link>Link Example</Link>}
      backgroundColor={props.backgroundcolor}
    >
      {props.text}
    </PaperComp>
  );
};
