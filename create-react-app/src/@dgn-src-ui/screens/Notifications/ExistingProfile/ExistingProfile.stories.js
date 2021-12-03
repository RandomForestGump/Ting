import React from "react";
import View from "@dgn-src-ui/core/View";
import ExistingProfile from "./ExistingProfile";
import Doc from "./ExistingProfile.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: ExistingProfile,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const ExistingProfileScreen = () => {
  return (
    <View
      screen="Notifications/ExistingProfile"
      email="mon********@gmail.com "
    />
  );
};

ExistingProfileScreen.story = {
  name: "4.3.0 Existing Profile",
};
