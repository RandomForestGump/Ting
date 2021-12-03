import React from "react";
import View from "@dgn-src-ui/core/View";
import RemoveCard from "./RemoveCard";
import Doc from "./RemoveCard.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/09 Confirmations",
  component: RemoveCard,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

export const RemoveCardScreen = () => {
  return (
    <View
      screen="Confirmations/RemoveCard"
      card={{
        // image: "/assets/images/it-card-pride-front@3x.jpg",
        type: "Discover Card",
        lastFour: "9101",
      }}
      form={{ onSubmit: knobs.getOnSubmit() }}
    />
  );
};

RemoveCardScreen.story = {
  name: "9.0.0 Remove Card",
};
