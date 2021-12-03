import React from "react";
import CardUnlockedIcon from "@dgn-src-ui/core/Icon/CardIcon/CardUnlockedIcon";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import Button from "@dgn-src-ui/core/Button/Button";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import Form from "@dgn-src-ui/core/Form";

const UnlockAccount = ({ form, onCancelClick }) => {
  return (
    <NotificationPage icon={CardUnlockedIcon} heading="Unlock your profile">
      <Typography>Request a new one-time code to continue.</Typography>
      <Form id="UnlockAccount" name="UnlockAccount" {...form}>
        <CTA>
          <Button type="submit">Request Code</Button>
          <FullWidthLink onClick={onCancelClick}>
            Cancel and return to merchant
          </FullWidthLink>
        </CTA>
      </Form>
    </NotificationPage>
  );
};

export default UnlockAccount;
