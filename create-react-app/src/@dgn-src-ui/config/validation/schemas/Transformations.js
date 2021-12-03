export const AddressTransformations = {
  postalCode: ({ postalCode, ...data }) => {
    return {
      ...data,
      zip: postalCode,
    };
  },
  province: ({ province, ...data }) => {
    return {
      ...data,
      state: province,
    };
  },
};

export const transformations = {
  ReEnterCard: {
    expirationDate: ({ expirationDate, ...data }) => {
      return {
        ...data,
        panExpirationMonth: expirationDate?.split("/")?.[0],
        panExpirationYear: expirationDate?.split("/")?.[1],
      };
    },
  },
  ShippingAddress: {
    ...AddressTransformations,
  },
  BillingAddress: {
    ...AddressTransformations,
  },
};

export default (form, data) => {
  // Convert boolean string values to actual bool
  Object.keys(data).forEach((field) => {
    data[field] =
      data[field] === "true" || data[field] === "false"
        ? data[field] === "true"
        : data[field];
  });

  let fields = transformations[form] || {};
  // Run transformation on a field if it exists
  Object.keys(fields).forEach((field) => {
    if (data[field]) {
      data = fields[field](data);
    }
  });
  return data;
};
