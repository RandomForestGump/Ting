import React, { useState } from "react";
import ToastAlertComp from ".";
import ToastAlertmdx from "./ToastAlert.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import { text, radios } from "@storybook/addon-knobs";
import Button from "@dgn-src-ui/core/Button";
import { Typography } from "@material-ui/core";

export default {
  title: "UI Core",
  component: ToastAlertComp,
  parameters: {
    docs: {
      page: ToastAlertmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const ToastAlert = () => {
  const severityOptions = {
    Error: "error",
    Info: "info",
    Success: "success",
    Warning: "warning",
  };
  let props = {
    text: text("Notification Text", "New one-time access code sent"),
    severity: radios("Notification Type", severityOptions, "success"),
  };
  const [open, setOpen] = useState(false);
  const onResendCode = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onResendCode} variant="contained" color="secondary">
        Open Notification
      </Button>
      <ToastAlertComp
        open={open}
        onClose={handleClose}
        severity={props.severity}
      >
        <Typography variant="body1" color="inherit">
          {props.text}
        </Typography>
      </ToastAlertComp>
    </>
  );
};
