import ValidationRules from "./Rules";

/**
 * Collects sets of rules into arrays and stored
 * with a key name designating the input name.
 *
 * Ex. The "address" field may be used in several
 * forms, and will usually have the same validation
 * rules. Those rules can then be accessed here
 */
export default {
  // primaryAccountNumber: [ValidationRules.REQUIRED, ValidationRules.CARD_NUMBER],
  // expirationDate: [ValidationRules.REQUIRED, ValidationRules.EXP_DATE],
  // cardSecurityCode: [
  //   ValidationRules.REQUIRED,
  //   ValidationRules.CARD_SECURITY_CODE,
  // ],
  // zip: [ValidationRules.ZIP_CODE],
  // postalCode: [ValidationRules.POSTAL_CODE],
  // phoneNumber: [
  //   ValidationRules.REQUIRED,
  //   ValidationRules.PHONE_NUMBER,
  //   ValidationRules.IS_NUMBER,
  // ],
  emailAddress: [ValidationRules.REQUIRED],
};
