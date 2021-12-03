import React from "react";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";
import Address from "@dgn-src-ui/core/Address";
import Addressmdx from "./Address.mdx";

export default {
  title: "UI Core",
  component: Address,
  parameters: {
    docs: {
      page: Addressmdx,
    },
  },
  decorators: [
    WrapperDecorator,
    (storyFn) => <FormDecorator useErrorStateKnob={false} storyFn={storyFn} />,
  ],
};

export const AddressComp = () => {
  return <Address />;
};

AddressComp.story = {
  name: "Address",
};
