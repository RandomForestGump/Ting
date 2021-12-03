import React from "react";
import View from "@dgn-src-ui/core/View";
import SessionEnded from ".";
import Doc from "./SessionEnded.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: SessionEnded,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const SessionEndedScreen = () => {
  return <View screen="Notifications/SessionEnded" />;
};

SessionEndedScreen.story = {
  name: "4.4.1 Session Ended",
};
