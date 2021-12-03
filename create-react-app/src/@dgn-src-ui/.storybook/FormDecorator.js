import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { useFormContext } from "react-hook-form";
import Form from "@dgn-src-ui/core/Form";

const FormStoryWrapper = ({ showError, errorMessage, children }) => {
  const { setError, getValues } = useFormContext();
  let values = getValues();
  if (showError) {
    Object.keys(values).forEach(field => {
      setError(field, "required", errorMessage);
    });
  }
  return children;
};

export default ({ storyFn, useErrorStateKnob = true, ...other }) => {
  const showError = useErrorStateKnob
    ? boolean("Show Error State", false)
    : false;
  const message = showError
    ? text("Error Message", "This field is required.")
    : false;
  return (
    <Form id="form" name="form">
      <FormStoryWrapper showError={showError} errorMessage={message}>
        {storyFn({ ...other })}
      </FormStoryWrapper>
    </Form>
  );
};
