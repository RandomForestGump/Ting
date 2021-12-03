import React from "react";
import CardErrorIcon from "@dgn-src-ui/core/Icon/CardIcon/CardErrorIcon";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";

const DeviceProfile = ({ onCancelClick }) => {
  return (
    <NotificationPage
      icon={CardErrorIcon}
      heading={
        <span>
          We cannot sign you
          <br />
          in at this time
        </span>
      }
    >
      <Typography>
        For your security, please sign in on a different device or return to the
        merchant to check out manually.
      </Typography>
      <CTA>
        <FullWidthLink onClick={onCancelClick}>
          Cancel and Return to Merchant
        </FullWidthLink>
      </CTA>
    </NotificationPage>
  );
};

export default DeviceProfile;
