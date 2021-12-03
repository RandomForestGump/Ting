import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import Heading from "@dgn-src-ui/core/Heading";
import Form from "@dgn-src-ui/core/Form";
import CTA from "@dgn-src-ui/core/CTA";
import { Button } from "@dgn-src-ui/core/Button";
import { FullWidthLink } from "@dgn-src-ui/core/Link";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";
import Address from "@dgn-src-ui/core/Address";
import Checkbox from "@dgn-src-ui/core/Checkbox";
import HiddenInput from "@dgn-src-ui/core/Input/HiddenInput";

/**
 * Form for entering a billing address. This is an
 * edge case screen, most consumers should have an
 * address returned from the issuer.
 */
const BillingAddress = ({ form, onCancelClick }) => {
  return (
    <Container>
      <Form id="BillingAddress" name="BillingAddress" {...form}>
        <FormErrorAlert />
        <Heading>Enter Billing Address</Heading>
        <Address useFullName={false} useCountryCode={false} />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box mt={0.5}>
              <Checkbox
                name="setAsShippingAddress"
                label="Use as my shipping address"
                value={true}
                checked={true}
              />
            </Box>
          </Grid>
        </Grid>
        <HiddenInput name="countryCode" id="countryCode" value="US" />
        <CTA>
          <Button type="submit">Save</Button>
          <FullWidthLink onClick={onCancelClick}>
            Cancel and Return to Merchant
          </FullWidthLink>
        </CTA>
      </Form>
    </Container>
  );
};

export default BillingAddress;
