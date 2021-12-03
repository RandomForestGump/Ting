import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { MASK_CARD } from "@dgn-src-ui/config/constants";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";
import TextField from "@dgn-src-ui/core/TextField";
import TextFieldmdx from "./TextField.mdx";

export default {
  title: "UI Core/Text Field",
  component: TextField,
  parameters: {
    docs: {
      page: TextFieldmdx,
    },
  },
  decorators: [
    WrapperDecorator,
    (storyFn) => (
      <FormDecorator
        label={text("Label", "Text Field Label")}
        useMask={boolean("Use Card Mask", false)}
        storyFn={storyFn}
      />
    ),
  ],
};

export const TextFieldComp = (props) => {
  const maskProps = props.useMask ? { mask: MASK_CARD } : null;
  return (
    <TextField
      name="textField"
      label={props.label}
      id="example"
      maskProps={maskProps}
    />
  );
};

TextFieldComp.story = {
  name: "Text Field",
};
