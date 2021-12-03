import React from "react";
import CardErrorIcon from "@dgn-src-ui/core/Icon/CardIcon/CardErrorIcon";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";

const SomethingWentWrong = ({ onCancelClick }) => {
  return (
    <NotificationPage
      icon={CardErrorIcon}
      heading={
        <span>
          Something went wrong
          <br />
          on our end
        </span>
      }
    >
      <Typography>
        Please return to the merchant to check out manually or try again later.
      </Typography>
      <CTA>
        <FullWidthLink onClick={onCancelClick}>
          Cancel and Return to Merchant
        </FullWidthLink>
      </CTA>
    </NotificationPage>
  );
};

export default SomethingWentWrong;
