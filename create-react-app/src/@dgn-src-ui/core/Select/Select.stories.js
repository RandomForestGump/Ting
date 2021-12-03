import React from "react";
import { text } from "@storybook/addon-knobs";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";
import SelectComp from "@dgn-src-ui/core/Select/Select";
import Option from "@dgn-src-ui/core/Option";
import Selectmdx from "./Select.mdx";

export default {
  title: "UI Core",
  component: SelectComp,
  parameters: {
    docs: {
      page: Selectmdx,
    },
  },
  decorators: [
    WrapperDecorator,
    (storyFn) => (
      <FormDecorator label={text("Label", "Select Label")} storyFn={storyFn} />
    ),
  ],
};

export const Select = ({ label, ...other }) => {
  return (
    <SelectComp
      htmlFor="example"
      label={label}
      name="example"
      id="example"
      {...other}
    >
      <Option value="">Select</Option>
      <Option value={10}>Ten</Option>
      <Option value={20}>Twenty</Option>
      <Option value={30}>Thirty</Option>
    </SelectComp>
  );
};
