import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Heading from "@dgn-src-ui/core/Heading";
import Form from "@dgn-src-ui/core/Form";
import CTA from "@dgn-src-ui/core/CTA";
import { Button } from "@dgn-src-ui/core/Button";
import { FullWidthLink } from "@dgn-src-ui/core/Link";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";
import Address from "@dgn-src-ui/core/Address";

/**
 * Form for entering a billing address. Does not currently
 * accept any default values to put into form fields. Address
 * fields may get moved into separate address component for
 * greater reuse on other, future, address screens.
 */
const ShippingAddress = ({ form, edit, onCancelClick }) => {
  return (
    <Container>
      <Form id="shippingAddress" name="ShippingAddress" {...form}>
        <FormErrorAlert />
        <Heading>{edit ? "Edit" : "Add"} Shipping Address</Heading>
        <Address />
        <CTA>
          <Button type="submit" compressed={true}>
            Save
          </Button>
          <FullWidthLink onClick={onCancelClick}>Cancel</FullWidthLink>
        </CTA>
      </Form>
    </Container>
  );
};

ShippingAddress.propTypes = {
  /** Whether or not this is an add or edit shipping address form */
  edit: PropTypes.bool,
};

ShippingAddress.defaultProps = {
  edit: false,
};
export default ShippingAddress;
