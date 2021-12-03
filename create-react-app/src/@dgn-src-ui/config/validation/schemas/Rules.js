/**
 * Individual rule objects. Allows rules to be
 * reused across any number of fields.
 */
export default {
  CARD_NUMBER_VALID: {
    name: "cardNumber",
    test: (value) => {
      return value.replace(/\s/g, "").match(/\b\d{9,19}\b/);
    },
    message: "CARD_NUMBER_VALID",
  },
  CARD_EXP_VALID: {
    name: "expirationDate",
    test: (value) => {
      return value.match(/^((0[1-9])|(1[0-2]))\/(\d{4})$/);
    },
    message: "CARD_EXP_VALID",
  },
  CARD_CODE_VALID: {
    name: "cardSecurityCode",
    test: (value) => {
      let length = value.replace(/\W/g, "").length;
      return length === 3 || length === 4;
    },
    message: "CARD_CODE_VALID",
  },
  ONE_TIME_CODE_REQUIRED: {
    name: "oneTimeCode",
    test: (value) => {
      return value.replace(/\W/g, "").length === 6;
    },
    message: "ONE_TIME_CODE_REQUIRED",
  },
  NAME_LENGTH: {
    name: "nameLength",
    test: (value) => {
      return value.replace(/\W/g, "").length <= 100;
    },
    message: "NAME_LENGTH",
  },
  FIRST_NAME_LENGTH: {
    name: "firstNameLength",
    test: (value) => {
      return value.replace(/\W/g, "").length <= 100;
    },
    message: "FIRST_NAME_LENGTH",
  },
  LAST_NAME_LENGTH: {
    name: "lastNameLength",
    test: (value) => {
      return value.replace(/\W/g, "").length <= 100;
    },
    message: "LAST_NAME_LENGTH",
  },
  EMAIL_ADDRESS_REQUIRED: {
    name: "emailAddress",
    test: (value) => {
      return value.match(/[\w-]+@([\w-]+\.)+[\w-]+/);
    },
    message: "EMAIL_ADDRESS_REQUIRED",
  },
  EMAIL_ADDRESS_LENGTH: {
    name: "emailAddressLength",
    test: (value) => {
      return value.length <= 255;
    },
    message: "EMAIL_ADDRESS_LENGTH",
  },
  ADDRESS_LENGTH: {
    name: "emailAddressLength",
    test: (value) => {
      return value.length <= 75;
    },
    message: "ADDRESS_LENGTH",
  },
  ZIP_CODE: {
    name: "zipCode",
    test: (value) => {
      return value.replace(/\W/g, "").length === 5;
    },
    message: "ZIP_CODE",
  },
  PHONE_NUMBER: {
    name: "phoneNumber",
    test: (value) => {
      return value.replace(/\W|-|(|)/g, "").length === 10;
    },
    message: "Enter a 10-digit phone number.",
  },
  IS_NUMBER: {
    name: "isNumber",
    test: (value) => {
      return value.replace(/\W|-|(|)/g, "").match(/[0-9]+/);
    },
    message: "You must enter a number.",
  },
  REQUIRED: {
    name: "customRequired",
    test: (value) => {
      return typeof value === "string"
        ? value.replace(/\W/g, "").length
        : !(typeof value === "undefined" || value === null || value === false);
    },
    message: "This field is required",
  },
};
