import React from "react";
import View from "@dgn-src-ui/core/View";
import AccountLocked from "./AccountLocked";
import Doc from "./AccountLocked.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: AccountLocked,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const AccountLockedScreen = () => {
  return (
    <View
      screen="Notifications/AccountLocked"
      onTimeout={() => alert("Navigate to 4.2.0 Unlock Account page")}
    />
  );
};

AccountLockedScreen.story = {
  name: "4.0.0 Account Locked",
};
export const AccountLockedScreen15 = () => {
  return (
    <View
      screen="Notifications/AccountLocked"
      timeout={15}
      convertToSeconds={true}
      onTimeout={() => alert("Navigate to 4.2.0 Unlock Account page")}
    />
  );
};

AccountLockedScreen15.story = {
  name: "4.0.1 Account Locked - 15 Minutes",
};
