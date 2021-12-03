import React from "react";
import PropTypes from "prop-types";
import CardErrorIcon from "@dgn-src-ui/core/Icon/CardIcon/CardErrorIcon";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import Button from "@dgn-src-ui/core/Button/Button";
import Form from "@dgn-src-ui/core/Form";

const ExistingProfile = ({ email, form, onCancelClick }) => {
  return (
    <NotificationPage
      icon={CardErrorIcon}
      heading="This profile already exists"
    >
      <Typography>
        Please sign in as a returning user with {email} to continue.
      </Typography>
      <Form id="ExistingProfile" name="ExistingProfile" {...form}>
        <CTA>
          <Button type="submit">Sign In</Button>
          <FullWidthLink onClick={onCancelClick}>
            Cancel and Return to Merchant
          </FullWidthLink>
        </CTA>
      </Form>
    </NotificationPage>
  );
};

ExistingProfile.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ExistingProfile;
