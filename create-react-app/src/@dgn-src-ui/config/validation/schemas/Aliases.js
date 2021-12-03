import isInternationalCode from "@dgn-src-ui/util/isInternationalCode";
export const AddressAliases = {
  zip: (defaultData) => {
    if (isInternationalCode(defaultData.countryCode)) {
      defaultData.postalCode = defaultData.zip;
    }
    return defaultData;
  },
  state: (defaultData) => {
    if (isInternationalCode(defaultData.countryCode)) {
      defaultData.province = defaultData.state;
    }
    return defaultData;
  },
};

export const aliases = {
  ShippingAddress: {
    ...AddressAliases,
  },
  BillingAddress: {
    ...AddressAliases,
  },
};

export default (form, defaultData) => {
  let fields = aliases[form] || {};
  Object.keys(fields).forEach((field) => {
    if (fields[field]) {
      defaultData = fields[field](defaultData);
    }
  });
  return defaultData;
};
