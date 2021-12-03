import React from "react";
import View from "@dgn-src-ui/core/View";
import BillingAddress from "./BillingAddress";
import Doc from "./BillingAddress.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/08 Billing Address",
  component: BillingAddress,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const props = {
  screen: "BillingAddress",
  form: {
    onSubmit: knobs.getOnSubmit(),
  },
};

export const BillingAddressScreen = () => {
  return <View {...props} />;
};

BillingAddressScreen.story = {
  name: "8.0.0 Enter Billing Address",
};

export const Filled = () => {
  return (
    <View
      {...props}
      form={{
        ...props.form,
        defaultValues: {
          firstName: "Montgomery",
          lastName: "Smith",
          line1: "123, NW 45th ST",
          state: "NY",
          city: "New York",
          zip: "12345",
          countryCode: "US",
        },
      }}
    />
  );
};

Filled.story = {
  name: "8.0.1 Enter Billing Address - Filled",
};

export const ClientErrors = () => {
  return (
    <View
      {...props}
      form={{
        ...props.form,
        errors: {
          firstName: "FIRST_NAME_REQUIRED",
          lastName: "LAST_NAME_REQUIRED",
          line1: "LINE1_REQUIRED",
          city: "CITY_REQUIRED",
          state: "STATE_REQUIRED",
          zip: "ZIP_REQUIRED",
          countryCode: "COUNTRY_CODE_REQUIRED",
        },
      }}
    />
  );
};

ClientErrors.story = {
  name: "8.0.2 Enter Billing Address - Client Side Errors",
};
