const MODE_CLICK = false;

export default (screen, options) => {
  if (options.next) {
    return options.next;
  }

  const isMode = (checkMode) => {
    return options.mode === checkMode;
  };

  const determineCardList = () => {
    if (options.hasDiscoverCard && options.hasOtherCards) {
      return "CardListWithDiscoverAndOthers";
    }
    if (options.hasOtherCards) {
      return "CardListWithoutDiscover";
    }
    return false;
  };
  const determineDiscoverStepUp = () => {
    if (options.dgnStepUp) {
      return "DGNOneTimeCodeAlert";
    }
    if (options.issuerStepUp) {
      return "DGNVerificationChannel";
    }
    return "ReviewAndConfirm";
  };

  let cardListScreen = determineCardList();
  let discoverStepUpScreen = determineDiscoverStepUp();

  switch (screen) {
    case "Toc":
      return "MerchantCart";
    case "MerchantCart":
      let nextScreen = "ReturningCustomer";
      if (options.authenticated) {
        nextScreen = cardListScreen ? cardListScreen : "ReviewAndConfirm";
      }
      return options.enrolled ? nextScreen : "NewUser";
    case "MerchantCheckout":
      return "Toc";
    case "ReturningCustomer":
      return "ReturningCustomerFilled";
    case "ReturningCustomerFilled":
      if (options.networkStepUp) {
        return "NetworkOneTimeCodeAlert";
      }
      if (!cardListScreen) {
        return discoverStepUpScreen;
      }
      return cardListScreen;
    case "NetworkOneTimeCodeAlert":
      return "NetworkOneTimeCodeEmail";
    case "NetworkOneTimeCodeEmail":
      return "NetworkOneTimeCode";
    case "NetworkOneTimeCode":
      return "NetworkOneTimeCodeFilled";
    case "NetworkOneTimeCodeFilled":
      if (!cardListScreen) {
        return discoverStepUpScreen;
      }
      return cardListScreen;
    case "NetworkOneTime":
      return "OneTimeCode";
    case "DGNOneTimeCodeAlert":
      return "DGNOneTimeCodeEmail";
    case "DGNOneTimeCodeEmail":
      return "DGNOneTimeCode";
    case "DGNOneTimeCode":
      if (isMode(MODE_CLICK)) {
        return "DGNOneTimeCodeFilled";
      }
      if (options.issuerStepUp) {
        return "DGNVerificationChannel";
      }
      return "ReviewAndConfirm";
    case "DGNOneTimeCodeFilled":
      if (options.issuerStepUp) {
        return "DGNVerificationChannel";
      }
      return "ReviewAndConfirm";
    case "DGNVerificationChannel":
      if (isMode(MODE_CLICK)) {
        return "DGNVerificationChannelFilled";
      }
      return "IssuerOneTimeCode";
    case "DGNVerificationChannelFilled":
      return "IssuerOneTimeCode";
    case "IssuerOneTimeCode":
      if (isMode(MODE_CLICK)) {
        return "IssuerOneTimeCodeFilled";
      }
      return "ReviewAndConfirm";
    case "IssuerOneTimeCodeFilled":
      return "ReviewAndConfirm";
    case "CardListWithDiscover":
    case "CardListWithDiscoverAndOthers":
      return discoverStepUpScreen;
    case "CardListWithoutDiscover":
      return "NetworkAddCard";
    case "NetworkAddCard":
      return "NetworkAddCardFilled";
    case "NetworkAddCardFilled":
      return "NetworkVerification";
    case "NewUser":
      return "NewUserFilled";
    case "NewUserFilled":
      return "NetworkVerification";
    case "NetworkVerification":
      return "NetworkVerificationFilled";
    case "NetworkVerificationFilled":
      return discoverStepUpScreen;
    case "ReviewAndConfirm":
      if (isMode(MODE_CLICK) && options.editShipping) {
        return "EditShippingAddress";
      }
      return "ConfirmationLoader";
    case "AddShippingAddress":
    case "EditShippingAddress":
      if (isMode(MODE_CLICK) && options.editShipping) {
        return "EditShippingAddressFilled";
      }
      return "ReviewAndConfirm";
    case "EditShippingAddressFilled":
      return "ReviewAndConfirmUpdated";
    case "ReviewAndConfirmUpdated":
      return "ConfirmationLoader";
    case "ConfirmDeleteShipping":
      return "ReviewAndConfirm";
    case "ConfirmationLoader":
      return "MerchantCheckout";
    default:
      return "Toc";
  }
};
