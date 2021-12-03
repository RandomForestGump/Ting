import React from "react";
import AlertComp from ".";
import Alertmdx from "./Alert.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import { text, radios } from "@storybook/addon-knobs";

export default {
  title: "UI Core",
  component: AlertComp,
  parameters: {
    docs: {
      page: Alertmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const Alert = () => {
  const optionsWarning = {
    Error: "error",
    Info: "info",
    Success: "success",
    Warning: "warning",
  };

  let props = {
    text: text("Alert Text", "This is an alert"),
    severity: radios("Warning", optionsWarning, "error"),
  };
  return <AlertComp {...props}>{props.text}</AlertComp>;
};
