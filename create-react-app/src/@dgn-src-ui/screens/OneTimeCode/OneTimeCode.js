import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import useInputClearOnError from "@dgn-src-ui/hooks/useInputClearOnError";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Heading from "@dgn-src-ui/core/Heading/Heading";
import Typography from "@material-ui/core/Typography";
import { CodeInput } from "@dgn-src-ui/core/TextField";
import Form from "@dgn-src-ui/core/Form";
import FormContent from "@dgn-src-ui/core/FormContent";
import CTA from "@dgn-src-ui/core/CTA";
import { Button, SmallButton } from "@dgn-src-ui/core/Button";
import { FullWidthLink } from "@dgn-src-ui/core/Link";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";
import ToastAlert from "@dgn-src-ui/core/ToastAlert";
import styles from "./OneTimeCode.module.scss";

const OneTimeCode = ({
  channel,
  locked,
  supportChannel,
  clearCodeInputOnError,
  form,
  onCancelClick,
  onResendCodeClick,
  onSelectMethodClick,
}) => {
  let context = useFormContext();
  const [open, setAlertVisibility] = useState(false);
  const [alertMessage, setAlertMessage] = useState(
    "New one-time access code sent"
  );
  const [alertSeverity, setAlertSeverity] = useState("success");
  const onResendCodeHandler = (e) => {
    setAlertVisibility(true);
    onResendCodeClick(e, context, {
      setAlertVisibility,
      setAlertMessage,
      setAlertSeverity,
    });
  };
  const handleClose = () => {
    setAlertVisibility(false);
  };

  let methods = useInputClearOnError(
    "validationData",
    form,
    clearCodeInputOnError
  );

  return (
    <Container>
      <Form
        id="oneTimeCodeForm"
        name="OneTimeCode"
        className={styles.OneTimeCode}
        {...methods}
      >
        <FormErrorAlert />
        {!locked && (
          <>
            <ToastAlert
              open={open}
              onClose={handleClose}
              severity={alertSeverity}
              className="App__alert"
            >
              <Typography variant="body1" color="inherit">
                {alertMessage}
              </Typography>
            </ToastAlert>
            <Heading>Enter code sent to:</Heading>
            <Typography gutterBottom variant="body1">
              <strong>{channel}</strong>
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <SmallButton onClick={onResendCodeHandler}>Resend</SmallButton>
              </Grid>
              {onSelectMethodClick && (
                <Grid item>
                  <SmallButton onClick={onSelectMethodClick}>
                    Select Another Method
                  </SmallButton>
                </Grid>
              )}
            </Grid>
          </>
        )}
        {locked && (
          <>
            <Heading>You're temporarily locked out </Heading>
            <Typography>
              Several incorrect attempts have been made to access this card.
              {supportChannel
                ? ` Simply contact ${supportChannel} to continue.`
                : " Simply contact the number on the back of your card for further assistance."}
            </Typography>
          </>
        )}
        <FormContent>
          <CodeInput
            label="One Time Code"
            characters={6}
            id="oneTimeCode"
            name="validationData"
            errorHighlight={locked}
          />
          <CTA>
            <Button type="submit">Continue</Button>
            <FullWidthLink onClick={onCancelClick}>
              Cancel and Return to Merchant
            </FullWidthLink>
          </CTA>
        </FormContent>
      </Form>
    </Container>
  );
};

OneTimeCode.propTypes = {
  /** Channel the code will be sent to (text, email, call) */
  channel: PropTypes.string.isRequired,
  /** Indicates the user has been locked out from requesting more OTPs */
  locked: PropTypes.bool,
  /** Specific channel the user can use to get help (phone number, email) */
  supportChannel: PropTypes.string,
  /** Clears the code input when there is a server side error */
  clearCodeInputOnError: PropTypes.bool,
  /**
   * Callback for when the "Resend Code button is clicked.
   *
   * Argument|Type|Description
   * ---|---|---
   * e|object|Synthetic React event object
   * */
  onResendCodeClick: PropTypes.func.isRequired,
  /**
   * Callback for when the "Select Another Method" button is clicked.
   * By including this property, the button will automatically show up.
   *
   * Argument|Type|Description
   * ---|---|---
   * e|object|Synthetic React event object
   * */
  onSelectMethodClick: PropTypes.func,
};

OneTimeCode.defaultProps = {
  clearCodeInputOnError: true,
};

export default OneTimeCode;
