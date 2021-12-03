import React from "react";
import View from "@dgn-src-ui/core/View";
import ShippingAddress from "./ShippingAddress";
import Doc from "./ShippingAddress.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/07 Shipping Address",
  component: ShippingAddress,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const props = {
  screen: "ShippingAddress",
  form: {
    defaultValues: {
      name: "Montgomery Smith",
      line1: "123, NW 45th ST",
      state: "NY",
      city: "New York",
      zip: "12345",
      countryCode: "US",
    },
    onSubmit: knobs.getOnSubmit(),
  },
};

export const ShippingAddressScreen = () => {
  return (
    <View
      {...props}
      form={{
        ...props.form,
        defaultValues: {},
      }}
    />
  );
};

ShippingAddressScreen.story = {
  name: "7.0.0 Add Shipping Address",
};

export const Filled = () => {
  return <View {...props} />;
};

Filled.story = {
  name: "7.0.1 Add Shipping Address - Filled",
};

export const ClientErrors = () => {
  return (
    <View
      {...props}
      form={{
        ...props.form,
        defaultValues: {},
        errors: {
          name: "NAME_REQUIRED",
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
  name: "7.0.2 Add Shipping Address - Client Side Errors",
};

export const International = () => {
  return (
    <View
      {...props}
      form={{
        ...props.form,
        defaultValues: {
          countryCode: "CA",
        },
      }}
    />
  );
};

International.story = {
  name: "7.1.0 International Shipping Address",
};

export const Edit = () => {
  return <View {...props} edit={true} />;
};

Edit.story = {
  name: "7.2.0 Edit Shipping Address",
};
