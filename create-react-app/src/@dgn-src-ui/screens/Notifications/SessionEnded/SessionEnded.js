import React from "react";
import Typography from "@material-ui/core/Typography";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import CTA from "@dgn-src-ui/core/CTA";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";

const SessionEnded = ({ onCancelClick }) => {
  return (
    <NotificationPage heading="Your session has ended">
      <Typography>
        For your security, you've been logged out due to inactivity.
      </Typography>
      <CTA>
        <FullWidthLink onClick={onCancelClick}>
          Cancel and Return to Merchant
        </FullWidthLink>
      </CTA>
    </NotificationPage>
  );
};

export default SessionEnded;
