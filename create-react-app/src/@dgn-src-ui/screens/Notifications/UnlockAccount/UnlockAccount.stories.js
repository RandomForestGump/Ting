import React from "react";
import View from "@dgn-src-ui/core/View";
import UnlockAccount from "./UnlockAccount";
import Doc from "./UnlockAccount.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: UnlockAccount,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const UnlockAccountScreen = () => {
  return <View screen="Notifications/UnlockAccount" />;
};

UnlockAccountScreen.story = {
  name: "4.2.0 Unlock Account",
};
