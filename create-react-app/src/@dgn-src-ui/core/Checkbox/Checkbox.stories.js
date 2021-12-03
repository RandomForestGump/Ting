import React from "react";
import CheckboxComp from "./Checkbox";
import Checkboxmdx from "./Checkbox.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";
import { FormControlLabel } from "@material-ui/core";
import { text, select } from "@storybook/addon-knobs";

export default {
  title: "UI Core",
  component: CheckboxComp,
  parameters: {
    docs: {
      page: Checkboxmdx,
    },
  },
  decorators: [
    WrapperDecorator,
    (storyFn) => <FormDecorator storyFn={storyFn} />,
  ],
};

export const Checkbox = () => {
  const placeOptions = ["end", "start", "top", "bottom"];

  let props = {
    checkbox1text: text("Checkbox 1 Text", "Remember me on this device"),
    checkbox1label: select("Checkbox 1 Label Location", placeOptions, "end"),
    checkbox2text: text("Checkbox 2 Text", "Do something as well"),
    checkbox2label: select("Checkbox 2 Label Location", placeOptions, "end"),
  };

  return (
    <>
      <FormControlLabel
        label={props.checkbox1text}
        control={<CheckboxComp name="checkThis" />}
        labelPlacement={props.checkbox1label}
      />
      <FormControlLabel
        label={props.checkbox2text}
        control={<CheckboxComp name="checkThat" />}
        labelPlacement={props.checkbox2label}
      />
    </>
  );
};
