import React from "react";
import View from "@dgn-src-ui/core/View";
import SessionEnding from "./SessionEnding";
import Doc from "./SessionEnding.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: SessionEnding,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const config = {
  session: {
    timeout: {
      onTimeout: () => {
        alert("Timed out");
      },
      secondsBeforeWarning: 1,
      secondsBeforeTimeout: 12,
    },
  },
};

export const SessionEndingComp = () => {
  return <View screen="Notifications/UnlockAccount" config={config} />;
};

SessionEndingComp.story = {
  name: "4.4.0 Session Ending",
};
