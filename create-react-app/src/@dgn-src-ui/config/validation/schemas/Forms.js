import SchemaProvider from "../SchemaProvider";

export const AddressForm = {
  name: SchemaProvider.string().when(["firstName"], {
    is: undefined,
    then: SchemaProvider.string()
      .max(100)
      .isRequired(),
    otherwise: SchemaProvider.string(),
  }),
  firstName: SchemaProvider.string().when(["name"], {
    is: undefined,
    then: SchemaProvider.string()
      .max(50)
      .isRequired(),
    otherwise: SchemaProvider.string(),
  }),
  lastName: SchemaProvider.string().when(["name"], {
    is: undefined,
    then: SchemaProvider.string()
      .max(50)
      .isRequired(),
    otherwise: SchemaProvider.string(),
  }),
  line1: SchemaProvider.string()
    .max(75)
    .isRequired(),
  line2: SchemaProvider.string().max(75),
  line3: SchemaProvider.string().max(75),
  city: SchemaProvider.string()
    .max(30)
    .isRequired(),
  province: SchemaProvider.string().when(["countryCode"], {
    is: (val) => val !== "US",
    then: SchemaProvider.string()
      .max(30)
      .isRequired(),
    otherwise: SchemaProvider.string(),
  }),
  state: SchemaProvider.string().when(["countryCode"], {
    is: (val) => val === "US" || !val,
    then: SchemaProvider.string()
      .length(2)
      .isRequired(),
    otherwise: SchemaProvider.string(),
  }),
  postalCode: SchemaProvider.string().when(["countryCode"], {
    is: (val) => val !== "US",
    then: SchemaProvider.string()
      .max(16)
      .isRequired(),
    otherwise: SchemaProvider.string(),
  }),
  zip: SchemaProvider.string().when(["countryCode"], {
    is: (val) => val === "US" || !val,
    then: SchemaProvider.string()
      .isValidZipCode()
      .isRequired(),
    otherwise: SchemaProvider.string(),
  }),
  countryCode: SchemaProvider.string()
    .length(2)
    .isRequired(),
};

/**
 * Collection of form schemas. The key the schemas
 * are stored at corresponds to the form name. Each
 * form schema consists of one or more field schemas.
 *
 * Field rules can be added individually or by accessing
 * the field rule collections
 */
export default {
  ReEnterCard: SchemaProvider.object().shape({
    primaryAccountNumber: SchemaProvider.string()
      .isValidCardNumber()
      .isRequired(),
    expirationDate: SchemaProvider.string()
      .isValidExpirationDate()
      .isRequired(),
    cardSecurityCode: SchemaProvider.string()
      .isValidSecurityCode()
      .isRequired(),
  }),
  OneTimeCode: SchemaProvider.object().shape({
    validationData: SchemaProvider.string()
      .isValidOneTimeCode(6)
      .isRequired(),
  }),
  VerificationChannel: SchemaProvider.object().shape({
    validationChannelId: SchemaProvider.string().isRequired(),
  }),
  ShippingAddress: SchemaProvider.object().shape(AddressForm, [
    ["name", "firstName"],
    ["name", "lastName"],
  ]),
  BillingAddress: SchemaProvider.object().shape(
    {
      ...AddressForm,
      setAsShippingAddress: SchemaProvider.bool(),
    },
    [
      ["name", "firstName"],
      ["name", "lastName"],
    ]
  ),
  ReviewAndConfirm: SchemaProvider.object().shape({
    addressId: SchemaProvider.mixed().isRequired(),
  }),
  NetworkVerification: SchemaProvider.object().shape({
    firstName: SchemaProvider.string()
      .max(50)
      .isRequired(),
    lastName: SchemaProvider.string()
      .max(50)
      .isRequired(),
    emailAddress: SchemaProvider.string()
      .max(255)
      .email()
      .isRequired(),
  }),
};
