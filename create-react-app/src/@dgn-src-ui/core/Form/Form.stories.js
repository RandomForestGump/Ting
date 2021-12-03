import React from "react";
import { MASK_CARD } from "@dgn-src-ui/config/constants";
import ValidationRules from "@dgn-src-ui/config/validation/schemas/Rules";
import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import FormComp from "@dgn-src-ui/core/Form";
import TextField from "@dgn-src-ui/core/TextField";
import CTA from "@dgn-src-ui/core/CTA";
import Button from "@dgn-src-ui/core/Button";
import Formmdx from "./Form.mdx";

export default {
  title: "UI Core",
  component: FormComp,
  parameters: {
    docs: {
      page: Formmdx,
    },
  },
  decorators: [
    WrapperDecorator,
    (storyFn) => <FormDecorator storyFn={storyFn} />,
  ],
};

export const Form = () => {
  return (
    <>
      <TextField
        id="example"
        name="example"
        rules={[ValidationRules.REQUIRED, ValidationRules.CARD_NUMBER]}
        maskProps={{ mask: MASK_CARD }}
        label="Card Number"
      />
      <CTA>
        <Button type="submit">Submit</Button>
      </CTA>
    </>
  );
};
