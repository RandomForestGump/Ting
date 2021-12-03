import React from "react";
import View from "@dgn-src-ui/core/View";
import Loader from "./Loader";
import Doc from "./Loader.mdx";

export default {
  title: "UI Screens/10 Loaders",
  component: Loader,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const LoaderScreen = () => {
  return <View screen="Loaders/Loader" />;
};

LoaderScreen.story = {
  name: "10.0.0 Loader",
};

export const LoadingProfile = () => {
  return <View screen="Loaders/LoadingProfile" />;
};

LoadingProfile.story = {
  name: "10.0.1 Loading Profile",
};

export const ReturningToPurchase = () => {
  return <View screen="Loaders/ReturningToPurchase" />;
};

ReturningToPurchase.story = {
  name: "10.0.2 Returning to Purchase",
};
