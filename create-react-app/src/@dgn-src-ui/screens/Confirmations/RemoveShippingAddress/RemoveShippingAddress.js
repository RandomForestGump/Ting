import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { Button } from "@dgn-src-ui/core/Button";
import Card from "@dgn-src-ui/core/Card/Card";
import CTA from "@dgn-src-ui/core/CTA";
import Form from "@dgn-src-ui/core/Form";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import styles from "./RemoveShippingAddress.module.scss";
import addressify from "@dgn-src-ui/util/addressify";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";

const RemoveShippingAddress = ({ form, address, onCancelClick }) => {
  return (
    <NotificationPage
      className={styles.RemoveShippingAddress}
      heading="Are you sure you want to remove this shipping address?"
    >
      <Form id="deleteShippingAddress" name="deleteShippingAddress" {...form}>
        <FormErrorAlert />
        <Card>
          <Box className={styles.RemoveShippingAddress__Content}>
            {addressify(address)}
          </Box>
        </Card>
        <CTA>
          <Button type="submit">Delete</Button>
          <FullWidthLink onClick={onCancelClick}>Cancel</FullWidthLink>
        </CTA>
      </Form>
    </NotificationPage>
  );
};

RemoveShippingAddress.propTypes = {
  /**
   * Address to be deleted
   *
   * Name|Description|Default
   * |---|---|---|
   * |addressId|ID of shipping address||
   * |name|Full name of consumer||
   * |line1|Address line 1 of shipping address||
   * |line2|Address line 2 of shipping address||
   * |line3|Address line 3 of shipping address||
   * |city|City of shipping address||
   * |state|State or province of shipping address||
   * |zip|Zip Code or Postal Code of shipping address||
   */
  address: PropTypes.shape({
    addressId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    line1: PropTypes.string,
    line2: PropTypes.string,
    line3: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default RemoveShippingAddress;
