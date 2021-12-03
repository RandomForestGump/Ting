import React from "react";
import View from "@dgn-src-ui/core/View";
import OneTimeCode from "./OneTimeCode";
import Doc from "./OneTimeCode.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/03 One Time Code",
  component: OneTimeCode,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const props = {
  screen: "OneTimeCode",
  channel: "mon*********@gmail.com",
  onResendCodeClick: () => {},
  form: {
    onSubmit: knobs.getOnSubmit(),
  },
};

export const OneTimeCodeScreen = () => {
  return <View {...props} />;
};

OneTimeCodeScreen.story = {
  name: "3.0.0 One Time Code",
};

export const Filled = () => {
  return (
    <View
      {...props}
      form={{
        defaultValues: { validationData: "876543" },
        ...props.form,
      }}
    />
  );
};

Filled.story = {
  name: "3.0.1 One Time Code - Filled",
};

export const ClientSideErrors = () => {
  return (
    <View
      {...props}
      form={{
        errors: { validationData: "VALIDATION_DATA_REQUIRED" },
        ...props.form,
      }}
    />
  );
};

ClientSideErrors.story = {
  name: "3.0.2 One Time Code - Client Side Errors",
};

export const InvalidOTP = () => {
  return (
    <View
      {...props}
      form={{
        errors: { form: "CODE_INVALID" },
        ...props.form,
      }}
    />
  );
};

InvalidOTP.story = {
  name: "3.0.3 One Time Code - Invalid OTP",
};

export const OTPExpired = () => {
  return (
    <View
      {...props}
      form={{
        errors: { form: "CODE_EXPIRED" },
        ...props.form,
      }}
    />
  );
};

OTPExpired.story = {
  name: "3.0.4 One Time Code - Invalid OTP - Expired",
};

export const OtherMethodsAvailable = () => {
  return (
    <View
      {...props}
      channel={"***-***-1234"}
      form={{
        defaultValues: { validationData: "876543" },
        ...props.form,
      }}
      onSelectMethodClick={() => {
        alert("Navigate to verification channel");
      }}
    />
  );
};

OtherMethodsAvailable.story = {
  name: "3.1.0 One Time Code - Other Methods Available",
};

export const TempLockOut = () => {
  return <View {...props} locked={true} />;
};

TempLockOut.story = {
  name: "3.2.0 One Time Code- Temporarily Locked Out",
};

export const TempLockOutSupportChannel = () => {
  return <View {...props} locked={true} supportChannel="XXX-XXX-XXXX" />;
};

TempLockOutSupportChannel.story = {
  name: "3.2.1 One Time Code- Temporarily Locked Out - Phone Number",
};
