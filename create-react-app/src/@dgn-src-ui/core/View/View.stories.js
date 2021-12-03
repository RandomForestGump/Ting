import React from "react";
import View from "@dgn-src-ui/core/View";
import Doc from "./View.mdx";
import { select } from "@storybook/addon-knobs";

const screens = {
  BillingAddress: {
    title: "Enter Billing Address",
    props: {},
  },
  OneTimeCode: {
    title: "One Time Code",
    props: {
      channel: "mon******@gmail.com",
    },
  },
};

let options = {};
Object.keys(screens).forEach((screen) => {
  options[screens[screen].title] = screen;
});

export default {
  title: "UI Core/View",
  component: View,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const ViewScreen = () => {
  const value = select("Screens", options, "BillingAddress");
  return <View screen={value} {...screens[value].props} />;
};

ViewScreen.story = {
  name: "View",
};
