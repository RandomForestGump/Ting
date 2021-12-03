import React from "react";
import View from "@dgn-src-ui/core/View";
import NetworkVerification from "./NetworkVerification";
import Doc from "./NetworkVerification.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/02 Network Verification",
  component: NetworkVerification,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const props = {
  screen: "NetworkVerification",
  form: {
    onSubmit: knobs.getOnSubmit(),
  },
};

const defaultValues = {
  firstName: "Montgomery",
  lastName: "Smith",
  emailAddress: "montgomerySmith@gmail.com",
};

const errors = {
  firstName: "FIRST_NAME_REQUIRED",
  lastName: "LAST_NAME_REQUIRED",
  emailAddress: "EMAIL_ADDRESS_REQUIRED",
};

const user = "mon*********@gmail.com";

export const NetworkVerificationScreen = () => {
  return <View {...props} />;
};

NetworkVerificationScreen.story = {
  name: "2.0.0 Network Verification",
};

export const Filled = () => {
  return (
    <View
      {...props}
      form={{
        defaultValues: defaultValues,
        ...props.form,
      }}
    />
  );
};

Filled.story = {
  name: "2.0.1 Network Verification - Filled",
};

export const ClientSideErrors = () => {
  return (
    <View
      {...props}
      form={{
        errors: errors,
        ...props.form,
      }}
    />
  );
};

ClientSideErrors.story = {
  name: "2.0.2 Network Verification - Client Side Errors",
};

export const ReturningUser = () => {
  return (
    <View
      screen="NetworkVerification"
      form={{ onSubmit: knobs.getOnSubmit() }}
      emailAddress={user}
    />
  );
};
ReturningUser.story = {
  name: "2.1.0 Network Verification Returning User",
};

export const ReturningUserFilled = () => {
  return (
    <View
      {...props}
      form={{
        defaultValues: defaultValues,
        ...props.form,
      }}
      emailAddress={user}
    />
  );
};

ReturningUserFilled.story = {
  name: "2.1.1 Network Verification - Returning User - Filled",
};

export const ReturningUserErrors = () => {
  return (
    <View
      {...props}
      form={{
        errors: errors,
        ...props.form,
      }}
      emailAddress={user}
    />
  );
};

ReturningUserErrors.story = {
  name: "2.1.2 Network Verification - Returning User - Client Side Errors",
};
