import React from "react";
import CardErrorIcon from "@dgn-src-ui/core/Icon/CardIcon/CardErrorIcon";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import Button from "@dgn-src-ui/core/Button/Button";
import Form from "@dgn-src-ui/core/Form";

const DuplicateCard = ({ form, onCancelClick }) => {
  return (
    <NotificationPage
      icon={CardErrorIcon}
      heading={
        <span>
          Card is already added to
          <br />
          your profile
        </span>
      }
    >
      <Typography>
        Use this card from your profile or add a new card.
      </Typography>
      <Form id="CannotAddCard" name="CannotAddCard" {...form}>
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
export default DuplicateCard;
