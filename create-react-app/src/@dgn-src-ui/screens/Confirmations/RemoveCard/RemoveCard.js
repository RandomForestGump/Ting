import React from "react";
import PropTypes from "prop-types";
import { Button } from "@dgn-src-ui/core/Button";
import CardInfo from "@dgn-src-ui/core/CardInfo";
import CTA from "@dgn-src-ui/core/CTA";
import Form from "@dgn-src-ui/core/Form";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";
import styles from "./RemoveCard.module.scss";

const RemoveCard = ({ form, onCancelClick, card }) => {
  return (
    <NotificationPage
      className={styles.RemoveCard}
      heading="Are you sure you want to remove this card?"
    >
      <Form id="RemoveCard" name="RemoveCard" {...form}>
        <FormErrorAlert />
        <CardInfo
          info={card}
          CardArtProps={{
            className: styles.RemoveCard__CardArt,
            style: { height: 300 },
          }}
          TypographyProps={{ className: styles.RemoveCard__CardContent }}
        />
        <CTA>
          <Button type="submit">Remove</Button>
          <FullWidthLink onClick={onCancelClick}>Cancel</FullWidthLink>
        </CTA>
      </Form>
    </NotificationPage>
  );
};

RemoveCard.propTypes = {
  /**
   * Card Information
   *
   * |Key|Description|Default|
   * |---|---|---|
   * |card.image|URL of card art||
   * |card.type|Type of card (e.g. "Discover Card")|Discover Card|
   * |card.lastFour|Last four digits of the card||
   */
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lastFour: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
};

export default RemoveCard;
