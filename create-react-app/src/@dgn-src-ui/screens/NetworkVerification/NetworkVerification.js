import React from "react";
import PropTypes from "prop-types";
import styles from "./NetworkVerification.module.scss";
import Form from "@dgn-src-ui/core/Form";
import FormContent from "@dgn-src-ui/core/FormContent";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";
import TextField from "@dgn-src-ui/core/TextField";
import Disclaimer from "@dgn-src-ui/core/Disclaimer";
import Grid from "@material-ui/core/Grid";
import NetworkMarquee from "./NetworkMarquee";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import { Button } from "@dgn-src-ui/core/Button";
import { FullWidthLink, GlobalLink } from "@dgn-src-ui/core/Link";

const NetworkVerification = ({ form, emailAddress, onCancelClick }) => {
  return (
    <Box className={styles.NetworkVerification}>
      <NetworkMarquee />
      <Container>
        <Form id="networkVerification" name="NetworkVerification" {...form}>
          <FormErrorAlert />

          <Typography>
            Purchase with ease when you see the Click to Pay icon and Discover
            logo together at checkout.
          </Typography>

          <FormContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  label="First Name"
                  id="firstName"
                  defaultValue=""
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  id="lastName"
                  defaultValue=""
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="emailAddress"
                  label="Email Address"
                  id="emailAddress"
                  defaultValue=""
                />
              </Grid>
              {emailAddress && (
                <>
                  <Grid item xs={12}>
                    <Typography>
                      Your Email: <strong>{emailAddress}</strong>.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Entering a different email address creates a new profile.
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
            <Disclaimer>
              <Typography variant="body2">
                By clicking continue, you agree to our{" "}
                <GlobalLink to="terms">Terms &amp; Conditions</GlobalLink> and{" "}
                <GlobalLink to="privacy">Privacy Policy</GlobalLink>.
              </Typography>
            </Disclaimer>
          </FormContent>
          <CTA>
            <Button type="submit">Continue</Button>
            <FullWidthLink onClick={onCancelClick}>
              Cancel and Return to Merchant
            </FullWidthLink>
          </CTA>
        </Form>
      </Container>
    </Box>
  );
};

NetworkVerification.propTypes = {
  /**
   * If this is a returning user, we want to output their masked email
   * in order to encourage them to use the same email. */
  emailAddress: PropTypes.string,
};

export default NetworkVerification;
