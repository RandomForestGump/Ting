import React from "react";
import View from "@dgn-src-ui/core/View";
import VerificationChannel from "./VerificationChannel";
import Doc from "./VerificationChannel.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/05 Verification Channel",
  component: VerificationChannel,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};
let channels = [
  {
    identifier: "A10002",
    type: "SMS",
    value: "***-***-1234",
  },
  {
    identifier: "A10003",
    type: "OUTBOUND_CALL",
    value: "***-***-1234",
  },
  {
    identifier: "A10004",
    type: "SMS",
    value: "***-***-4321",
  },
  {
    identifier: "A10005",
    type: "OUTBOUND_CALL",
    value: "***-***-4321",
  },
];

const props = {
  screen: "VerificationChannel",
  channels: channels,
  form: {
    onSubmit: knobs.getOnSubmit(),
  },
};

export const VerificationChannelScreen = () => {
  return <View {...props} />;
};

VerificationChannelScreen.story = {
  name: "5.0.0 Verification Channel",
};

export const Selected = () => {
  return (
    <View
      {...props}
      form={{
        defaultValues: {
          validationChannelId: "A10002",
        },
        ...props.form,
      }}
    />
  );
};

Selected.story = {
  name: "5.0.1 Verification Channel - Selected",
};

export const ClientErrors = () => {
  return (
    <View
      {...props}
      form={{
        errors: {
          validationChannelId: "VALIDATION_CHANNEL_ID_REQUIRED",
        },
        ...props.form,
      }}
    />
  );
};

ClientErrors.story = {
  name: "5.0.2 Verification Channel - Client Side Errors",
};

export const SingleVerificationChannel = () => {
  return (
    <View
      {...props}
      channels={[
        {
          identifier: "SRC",
          type: "SMS",
          value: "***-***-3369",
        },
      ]}
    />
  );
};

SingleVerificationChannel.story = {
  name: "5.1.0 Verification Channel - Single Channel",
};
