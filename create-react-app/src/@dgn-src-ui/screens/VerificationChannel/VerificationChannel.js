import React from "react";
import PropTypes from "prop-types";
import useLocale from "@dgn-src-ui/hooks/useLocale";
import Container from "@material-ui/core/Container";
import { Box, Typography } from "@material-ui/core";
import Button from "@dgn-src-ui/core/Button";
import CTA from "@dgn-src-ui/core/CTA";
import Form from "@dgn-src-ui/core/Form";
import Heading from "@dgn-src-ui/core/Heading";
import { FullWidthLink } from "@dgn-src-ui/core/Link";
import Disclaimer from "@dgn-src-ui/core/Disclaimer";
import Radio from "@dgn-src-ui/core/Radio";
import RadioList from "@dgn-src-ui/core/RadioList";
import RadioListItem from "@dgn-src-ui/core/RadioListItem";
import styles from "./VerificationChannel.module.scss";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";

const sortChannels = (channels) => {
  let sorted = [];
  channels.forEach((channel) => {
    let index = sorted.findIndex(
      (channelValue) => channelValue.value === channel.value
    );
    if (index === -1) {
      index = sorted.length;
      sorted.push({
        value: channel.value,
        channels: [],
      });
    }
    sorted[index].channels.push({
      type: channel.type,
      id: channel.identifier,
    });
  });
  return sorted;
};

const VerificationChannel = ({ form, onCancelClick, channels }) => {
  const { __ } = useLocale();

  const methods = sortChannels(channels);

  return (
    <Container>
      <Box className={styles.VerificationChannel}>
        <Form id="verificationChannel" name="VerificationChannel" {...form}>
          <FormErrorAlert />
          <Heading>Verify it’s you</Heading>
          {(channels.length && (
            <>
              <Typography>
                As an added layer of security for your card, choose one of the
                following options to receive a one-time access code:
              </Typography>
              <RadioList
                name="validationChannelId"
                label={"Verification Channels"}
              >
                {methods.map((method, index) => {
                  return (
                    <RadioListItem key={`method-${index}`}>
                      <Typography gutterBottom>
                        <strong>{method.value}</strong>
                      </Typography>
                      {method.channels.map((channel) => {
                        return (
                          <Box
                            className={styles.VerificationChannel__channel}
                            key={`channel-${channel.id}`}
                          >
                            <Radio
                              label={__(`trustedChannels.${channel.type}`)}
                              value={channel.id}
                            />
                          </Box>
                        );
                      })}
                    </RadioListItem>
                  );
                })}
              </RadioList>
              <Disclaimer>
                <Typography variant="body2">
                  By clicking “Continue”, you agree that your Bank and DFS
                  Services LLC including their affiliates and agents, may send
                  you a one-time call or text at the selected number. If this is
                  a cell phone you agree that we may contact you using an
                  automatic dialer, including text messages. Message and Data
                  rates may apply.
                </Typography>
              </Disclaimer>
            </>
          )) || (
            <>
              <Typography paragraph>
                To send a one-time access code to verify your profile, you'll
                need to add a phone number or email address to your account by
                contacting your card issuer using the information on the back of
                your card.
              </Typography>
              <Typography>
                Once you've added a phone number or email address, you'll need
                to start over.
              </Typography>
            </>
          )}
          <CTA>
            <Button type="submit">Continue</Button>
            <FullWidthLink onClick={onCancelClick}>
              Cancel and Return to Merchant
            </FullWidthLink>
          </CTA>
        </Form>
      </Box>
    </Container>
  );
};

VerificationChannel.propTypes = {
  /** An array of all available contact channels. */
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      identifier: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        "SMS",
        "EMAIL_ADDRESS",
        "OUTBOUND_CALL",
        "CUSTOMER_SERVICE",
      ]).isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

VerificationChannel.defaultProps = {
  channels: [],
};
export default VerificationChannel;
