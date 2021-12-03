import React from "react";
import PropTypes from "prop-types";
import combine from "@dgn-src-ui/util/combine";
import { Typography } from "@material-ui/core";
import Card from "@dgn-src-ui/core/Card/Card";
import CardArt from "@dgn-src-ui/core/CardArt/CardArt";

const CardInfo = ({
  id,
  title,
  action,
  info,
  CardArtProps,
  TypographyProps,
}) => {
  let { image, ...card } = info;
  if (card.lastFour) {
    card.lastFour = `Ending in ${card.lastFour}`;
  }
  if (!card.type) {
    card = {
      type: "Discover Card",
      ...card,
    };
  }
  return (
    <Card id={id} title={title} action={action}>
      <CardArt src={image} role="presentation" {...CardArtProps} />
      <Typography {...TypographyProps}>{combine(card)}</Typography>
    </Card>
  );
};

CardInfo.propTypes = {
  /** ID of card */
  id: PropTypes.string,
  /** Title, if any, to display on the card */
  title: PropTypes.string,
  /** A component to place in the "action" position in the upper right corner */
  action: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  /**
   * All information to display on the card about the actual consumer...card.
   */
  info: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
    lastFour: PropTypes.string,
    contact: PropTypes.string,
  }),
};

CardInfo.defaultProps = {
  CardArtProps: {},
  TypographyProps: {},
};

export default CardInfo;
