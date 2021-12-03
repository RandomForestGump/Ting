import React from "react";
import MerchantCart from "./images/MerchantCart.png";
import ReturningCustomer from "./images/ReturningCustomer.png";
import ReturningCustomerFilled from "./images/ReturningCustomerFilled.png";
import DGNOneTimeCodeEmail from "./images/DGNOneTimeCodeEmail.png";
import MerchantCheckout from "./images/MerchantCheckout.png";
import NetworkOneTimeCodeAlert from "./images/NetworkOneTimeCodeAlert.png";
import NetworkOneTimeCodeEmail from "./images/NetworkOneTimeCodeEmail.png";
import NetworkOneTimeCode from "./images/NetworkOneTimeCode.png";
import NetworkOneTimeCodeFilled from "./images/NetworkOneTimeCodeFilled.png";
import CardListWithDiscoverAndOthers from "./images/CardListWithDiscoverAndOthers.png";
import CardListWithoutDiscover from "./images/CardListWithoutDiscover.png";
import NewUser from "./images/NewUser.png";
import NewUserFilled from "./images/NewUserFilled.png";
import NetworkAddCard from "./images/NetworkAddCard.png";
import NetworkAddCardFilled from "./images/NetworkAddCardFilled.png";

const images = {
  MerchantCart: MerchantCart,
  ReturningCustomer: ReturningCustomer,
  ReturningCustomerFilled: ReturningCustomerFilled,
  DGNOneTimeCodeEmail: DGNOneTimeCodeEmail,
  MerchantCheckout: MerchantCheckout,
  NetworkOneTimeCodeAlert: NetworkOneTimeCodeAlert,
  NetworkOneTimeCodeEmail: NetworkOneTimeCodeEmail,
  NetworkOneTimeCode: NetworkOneTimeCode,
  NetworkOneTimeCodeFilled: NetworkOneTimeCodeFilled,
  CardListWithDiscoverAndOthers: CardListWithDiscoverAndOthers,
  CardListWithoutDiscover: CardListWithoutDiscover,
  NewUser: NewUser,
  NewUserFilled: NewUserFilled,
  NetworkAddCard: NetworkAddCard,
  NetworkAddCardFilled: NetworkAddCardFilled,
};

export default ({ image }) => {
  return (
    <img
      src={images[image]}
      style={{ width: "100%", height: "auto" }}
      alt={image}
    />
  );
};
