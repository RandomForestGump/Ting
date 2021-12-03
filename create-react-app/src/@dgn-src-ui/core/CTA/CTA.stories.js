import React from "react";
import { styled } from "@storybook/theming";
import CTAComp from "@dgn-src-ui/core/CTA/CTA";
import Button from "@dgn-src-ui/core/Button/Button";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import CTAmdx from "./CTA.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";

export default {
  title: "UI Core",
  component: CTAComp,
  parameters: {
    docs: {
      page: CTAmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const CTA = () => {
  return (
    <CTAComp>
      <Button>Continue</Button>
      <FullWidthLink>Cancel and return to merchant</FullWidthLink>
    </CTAComp>
  );
};
