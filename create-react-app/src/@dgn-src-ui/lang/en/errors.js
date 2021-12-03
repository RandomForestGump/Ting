const errors = {
  id: "errors",
  message:
    "Something went wrong. Confirm the information is correct to continue.",
  messages: [
    {
      id: "FIELD_ERRORS",
      message: "Please fix the errors below.",
    },
    {
      id: "CARD_INVALID",
      message:
        "Card information is invalid. Confirm it's entered correctly to continue.",
    },
    {
      id: "CARD_INFO_INVALID",
      message:
        "Card information is invalid. Confirm it's entered correctly to continue.",
    },
    {
      id: "CARD_EXP_INVALID",
      message:
        "Card information is invalid. Confirm it's entered correctly to continue.",
    },
    {
      id: "CODE_INVALID",
      message:
        "Code invalid. Please try again or request a new code to continue.",
    },
    {
      id: "CODE_EXPIRED",
      message: "Code expired. Please request a new code to continue.",
    },
    {
      id: "INVALID_CARD",
      message:
        "Card information is invalid. Confirm it's entered correctly to continue.",
    },
    {
      id: "IDV_WRONG_STATE",
      message:
        "You may use this card to manually checkout or add a different Discover card to your Click to Pay profile.",
    },
    {
      id: "isRequired",
      message: "This field is required",
    },
    {
      id: "field_length_max",
      message: ({ max }) => {
        return `Field length can't exceed ${max} characters`;
      },
    },
    {
      id: "fields",
      message: "Field translation error",
      messages: [
        {
          id: "PRIMARY_ACCOUNT_NUMBER_REQUIRED",
          message: "Enter your card number",
        },
        {
          id: "PRIMARY_ACCOUNT_NUMBER_VALID",
          message: "Enter a valid 16-digit card number",
        },
        {
          id: "EXPIRATION_DATE_REQUIRED",
          message: "Enter your expiration",
        },
        {
          id: "EXPIRATION_DATE_VALID",
          message: "Enter a valid expiration date (e.g. MM/YYYY)",
        },
        {
          id: "CARD_SECURITY_CODE_REQUIRED",
          message: "Enter your security code",
        },
        {
          id: "CARD_SECURITY_CODE_VALID",
          message: "Enter your 3-digit security code",
        },
        {
          id: "NAME_REQUIRED",
          message: "Enter your full name",
        },
        {
          id: "NAME_MAX_LENGTH",
          message: "Full names can't exceed 100 characters",
        },
        {
          id: "FIRST_NAME_REQUIRED",
          message: "Enter your first name",
        },
        {
          id: "FIRST_NAME_MAX_LENGTH",
          message: "First names can't exceed 50 characters",
        },
        {
          id: "LAST_NAME_REQUIRED",
          message: "Enter your last name",
        },
        {
          id: "LAST_NAME_MAX_LENGTH",
          message: "Last names can't exceed 50 characters",
        },
        {
          id: "EMAIL_ADDRESS_REQUIRED",
          message: "Enter a valid email address",
        },
        {
          id: "EMAIL_ADDRESS_MAX_LENGTH",
          message: "Emails can't exceed 255 characters",
        },
        {
          id: "VALIDATION_DATA_REQUIRED",
          message: "Enter the 6-digit code sent to you",
        },
        {
          id: "VALIDATION_CHANNEL_ID_REQUIRED",
          message: "Please make a selection",
        },
        {
          id: "ADDRESS_ID_REQUIRED",
          message: "Enter a shipping address",
        },
        {
          id: "INVALID_COUNTRY_DPA",
          message:
            "Merchant cannot deliver to this country at this time. Please try a different address.",
        },
        {
          id: "COUNTRY_CODE_REQUIRED",
          message: "Select a country",
        },
        {
          id: "LINE1_REQUIRED",
          message: "Enter a street address",
        },
        {
          id: "LINE1_MAX_LENGTH",
          message: "Street addresses can't exceed 75 characters",
        },
        {
          id: "LINE2_MAX_LENGTH",
          message: "Street addresses can't exceed 75 characters",
        },
        {
          id: "LINE3_MAX_LENGTH",
          message: "Street addresses can't exceed 75 characters",
        },
        {
          id: "STATE_REQUIRED",
          message: "Select a state",
        },
        {
          id: "STATE_LENGTH",
          message: "Select a state name abbreviation",
        },
        {
          id: "CITY_REQUIRED",
          message: "Enter a city name",
        },
        {
          id: "CITY_MAX_LENGTH",
          message: "City name can't exceed 30 characters",
        },
        {
          id: "PROVINCE_REQUIRED",
          message: "Enter a province name",
        },
        {
          id: "PROVINCE_MAX_LENGTH",
          message: "Province name can't exceed 30 characters",
        },
        {
          id: "ZIP_REQUIRED",
          message: "Enter a 5-digit ZIP Code",
        },
        {
          id: "ZIP_LENGTH",
          message: "ZIP Codes can't be more than 5 digits",
        },
        {
          id: "POSTAL_CODE_REQUIRED",
          message: "Enter a postal code",
        },
        {
          id: "POSTAL_CODE_MAX_LENGTH",
          message: "Postal code can't exceed 16 digits",
        },
      ],
    },
  ],
};

export default errors;
