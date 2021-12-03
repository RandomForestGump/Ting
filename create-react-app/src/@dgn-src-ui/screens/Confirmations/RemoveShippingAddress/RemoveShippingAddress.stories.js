import React from "react";
import View from "@dgn-src-ui/core/View";
import RemoveShippingAddress from "./RemoveShippingAddress";
import Doc from "./RemoveShippingAddress.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/09 Confirmations",
  component: RemoveShippingAddress,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const address = {
  addressId: 22,
  name: "Montgomery Smith",
  firstName: "Montgomery",
  lastName: "Smith",
  line1: "123 NW 45th ST",
  city: "New York",
  state: "NY",
  zip: "12345",
};
export const RemoveShippingAddressScreen = () => {
  return (
    <View
      screen="Confirmations/RemoveShippingAddress"
      address={address}
      form={{ onSubmit: knobs.getOnSubmit() }}
    />
  );
};

RemoveShippingAddressScreen.story = {
  name: "9.1.0 Remove Shipping Address",
};
