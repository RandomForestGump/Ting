import React from "react";
import { text, radios, boolean } from "@storybook/addon-knobs";
import ButtonComp from "./Button";
import SmallButtonComp from "./SmallButton/SmallButton";
import Buttonmdx from "./Button.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";

export default {
  title: "UI Core/Button",
  component: ButtonComp,
  parameters: {
    docs: {
      page: Buttonmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const Button = () => {
  const optionsVariant = {
    Contained: "contained",
    Outlined: "outlined",
  };

  let props = {
    variant: radios("Variant", optionsVariant, "contained"),
    text: text("Button Text", "Button Text"),
    loading: boolean("Show Button Loading", false),
  };

  return (
    <ButtonComp
      variant={props.variant}
      color={props.variant === "outlined" ? "secondary" : "primary"}
      loading={props.loading}
    >
      {props.text}
    </ButtonComp>
  );
};

export const SmallButtons = () => {
  let props = {
    text: text("Button Text", "Button Text", "Group-1"),
  };
  return <SmallButtonComp>{props.text}</SmallButtonComp>;
};
