import React from "react";
import CardErrorIcon from "@dgn-src-ui/core/Icon/CardIcon/CardErrorIcon";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import Button from "@dgn-src-ui/core/Button/Button";
import Form from "@dgn-src-ui/core/Form";

const CannotAddCard = ({ form, onCancelClick }) => {
  return (
    <NotificationPage icon={CardErrorIcon} heading="Card cannot be added">
      <Typography>
        Please remove a Discover card from your profile to add this card.
      </Typography>
      <Form id="CannotAddCard" name="CannotAddCard" {...form}>
        <CTA>
          <Button type="submit">Remove Card</Button>
          <FullWidthLink onClick={onCancelClick}>
            Cancel and Return to Merchant
          </FullWidthLink>
        </CTA>
      </Form>
    </NotificationPage>
  );
};

export default CannotAddCard;
