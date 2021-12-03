import React from "react";
import PropTypes from "prop-types";
import {
  MASK_CARD,
  MASK_EXPIRE_DATE,
  MASK_SECURITY_CODE,
} from "@dgn-src-ui/config/constants";
import useInputClearOnError from "@dgn-src-ui/hooks/useInputClearOnError";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@dgn-src-ui/core/Button/Button";
import CardBasicIcon from "@dgn-src-ui/core/Icon/CardIcon/CardBasicIcon";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import DiscoverLogo from "@dgn-src-ui/core/Icon/DiscoverLogo";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import Form from "@dgn-src-ui/core/Form";
import CTA from "@dgn-src-ui/core/CTA";
import Disclaimer from "@dgn-src-ui/core/Disclaimer";
import TextField from "@dgn-src-ui/core/TextField";
import styles from "./ReEnterCard.module.scss";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";

const ReEnterCard = ({
  form,
  clearSecurityCodeInputOnError,
  onCancelClick,
}) => {
  let methods = useInputClearOnError(
    "cardSecurityCode",
    form,
    clearSecurityCodeInputOnError
  );

  return (
    <NotificationPage
      className={styles.ReEnterCard}
      icon={CardBasicIcon}
      heading="We couldn't verify your info. Please try again."
    >
      <Form
        id="reEnterCardForm"
        name="ReEnterCard"
        {...methods}
        className={styles.ReEnterCard__form}
      >
        <FormErrorAlert />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              type="tel"
              label="Card Number"
              id="primaryAccountNumber"
              name="primaryAccountNumber"
              maskProps={{
                mask: MASK_CARD,
              }}
              InputProps={{
                endAdornment: (
                  <DiscoverLogo
                    className={styles.ReEnterCard__fieldIcon}
                    position="end"
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="tel"
              label="Expires"
              id="expirationDate"
              name="expirationDate"
              placeholder="MM/YYYY"
              maskProps={{
                mask: MASK_EXPIRE_DATE,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="tel"
              label="Security Code"
              id="cardSecurityCode"
              name="cardSecurityCode"
              maskProps={{
                mask: MASK_SECURITY_CODE,
              }}
            />
          </Grid>
        </Grid>
        <Disclaimer>
          <Typography variant="body2">
            Your information will be shared with participating payment networks,
            service providers and as otherwise described in our Privacy Notice
            to give you the appropriate experience.
          </Typography>
        </Disclaimer>
        <CTA>
          <Button type="submit">Continue</Button>
          <FullWidthLink onClick={onCancelClick}>
            Cancel and Return to Merchant
          </FullWidthLink>
        </CTA>
      </Form>
    </NotificationPage>
  );
};

ReEnterCard.propTypes = {
  /**
   * If an error of any kind is triggered, setting this property
   * to true will automatically clear the security code input
   */
  clearSecurityCodeInputOnError: PropTypes.bool,
};

ReEnterCard.defaultProps = {
  clearSecurityCodeInputOnError: true,
};

export default ReEnterCard;
