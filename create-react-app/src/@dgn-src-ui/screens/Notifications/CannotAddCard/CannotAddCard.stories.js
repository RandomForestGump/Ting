import React from "react";
import View from "@dgn-src-ui/core/View";
import CannotAddCard from "./CannotAddCard";
import Doc from "./CannotAddCard.mdx";

export default {
  title: "UI Screens/04 Notifications",
  component: CannotAddCard,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const CannotAddCardScreen = () => {
  return <View screen="Notifications/CannotAddCard" />;
};

CannotAddCardScreen.story = {
  name: "4.1.0 Card Cannot Be Added",
};

export const ProvCountExceeded = () => {
  return <View screen="Notifications/CannotAddCard/ProvCountExceeded" />;
};

ProvCountExceeded.story = {
  name: "4.1.1 Card Cannot Be Added - Provisioning Count Exceeded",
};

export const TooManyProfiles = () => {
  return <View screen="Notifications/CannotAddCard/TooManyProfiles" />;
};

TooManyProfiles.story = {
  name: "4.1.2 Card Cannot Be Added - Too Many Profiles",
};

export const DuplicateCard = () => {
  return <View screen="Notifications/CannotAddCard/DuplicateCard" />;
};

DuplicateCard.story = {
  name: "4.1.3 Card Cannot Be Added - Duplicate Card",
};

export const RemoveCard = () => {
  return <View screen="Notifications/CannotAddCard/RemoveCard" />;
};

RemoveCard.story = {
  name: "4.1.4 Card Cannot Be Added - Remove Card",
};
