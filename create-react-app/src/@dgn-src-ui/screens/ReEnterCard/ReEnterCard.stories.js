import React from "react";
import View from "@dgn-src-ui/core/View";
import ReEnterCard from "./ReEnterCard";
import Doc from "./ReEnterCard.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/01 ReEnter Card",
  component: ReEnterCard,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const props = {
  screen: "ReEnterCard",
  form: {
    onSubmit: knobs.getOnSubmit(),
    defaultValues: {
      primaryAccountNumber: "4321 8054 2643 9101",
      expirationDate: "01/2022",
    },
  },
};

export const ReEnterCardScreen = () => {
  return <View {...props} />;
};

ReEnterCardScreen.story = {
  name: "1.0.0 ReEnter Card",
};

export const ClientSideErrors = () => {
  return (
    <View
      {...props}
      form={{
        errors: {
          primaryAccountNumber: "PRIMARY_ACCOUNT_NUMBER_REQUIRED",
          expirationDate: "EXPIRATION_DATE_REQUIRED",
          cardSecurityCode: "CARD_SECURITY_CODE_REQUIRED",
        },
        ...props.form,
      }}
    />
  );
};

ClientSideErrors.story = {
  name: "1.0.1 ReEnter Card - Client Side Errors",
};

export const CardInformationInvalid = () => {
  return (
    <View
      {...props}
      form={{
        errors: {
          form: "CARD_INVALID",
        },
        ...props.form,
      }}
    />
  );
};

CardInformationInvalid.story = {
  name: "1.0.2 ReEnter Card - Card Information Invalid",
};
