import React from "react";
import View from "@dgn-src-ui/core/View";
import SomethingWentWrong from "./SomethingWentWrong";
import Doc from "./SomethingWentWrong.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: SomethingWentWrong,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const SomethingWentWrongScreen = () => {
  return <View screen="Notifications/SomethingWentWrong" />;
};

SomethingWentWrongScreen.story = {
  name: "4.3.1 Something Went Wrong",
};
