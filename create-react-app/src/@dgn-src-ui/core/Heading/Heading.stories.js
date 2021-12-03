import React from "react";
import { text } from "@storybook/addon-knobs";

import HeadingComp from "@dgn-src-ui/core/Heading/Heading";
import Headingmdx from "./Heading.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";

export default {
  title: "UI Core",
  component: HeadingComp,
  parameters: {
    docs: {
      page: Headingmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const Heading = () => {
  let props = {
    text: text("Heading Text", "Example of an h1"),
  };
  return <HeadingComp>{props.text}</HeadingComp>;
};
