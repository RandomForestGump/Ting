import React from "react";
import View from "@dgn-src-ui/core/View";
import DeviceError from "./DeviceError";
import Doc from "./DeviceError.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: DeviceError,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const DeviceErrorScreen = () => {
  return <View screen="Notifications/DeviceError" />;
};

DeviceErrorScreen.story = {
  name: "4.3.2 Device Error",
};
