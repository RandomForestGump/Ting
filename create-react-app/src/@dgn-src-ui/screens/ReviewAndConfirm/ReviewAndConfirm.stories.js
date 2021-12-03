import React from "react";
import View from "@dgn-src-ui/core/View";
import ReviewAndConfirm from "./ReviewAndConfirm";
import Doc from "./ReviewAndConfirm.mdx";
import knobs from "@dgn-src-ui/.storybook/knobs";

export default {
  title: "UI Screens/06 Review and Confirm",
  component: ReviewAndConfirm,
  parameters: {
    docs: {
      page: Doc,
    },
    themeProvider: { disable: true },
  },
};

const addresses = [
  {
    addressId: "c9ff6577-f98c-4604-b557-7274d0561b20",
    name: "Montgomery Smith",
    line1: "123, NW 45th ST",
    state: "NY",
    city: "New York",
    zip: "12345",
    countryCode: "US",
  },
  {
    addressId: 12,
    name: "Phoebe Buffay",
    line1: "5 Morton St",
    city: "New York",
    state: "NY",
    zip: "10014",
    countryCode: "US",
  },
  {
    addressId: 9,
    name: "Liz Lemon",
    line1: "160 Riverside Dr",
    city: "New York",
    state: "NY",
    zip: "10024",
    countryCode: "US",
  },
];

const handleProfileClick = (val) => {
  alert(`Profile Menu Click: ${val}`);
  console.log(val);
};

const handleManageCardClick = (val) => {
  alert(`Mange Cards Menu Click: ${val}`);
  console.log(val);
};

const handleShippingClick = (val, e, data) => {
  let extraText =
    val === "editShippingAddress" ? ` - Address ID: ${data.address}` : "";
  alert(`Shipping Menu Click: ${val}${extraText}`);
  console.log(val, data);
};

const props = {
  screen: "ReviewAndConfirm",
  onCancelClick: () => {
    alert("yay");
  },
  addresses: [addresses[0]],
  card: {
    type: "Discover Card",
    lastFour: "9101",
    contact: "montgomerySmith@gmail.com",
    // image: "/assets/images/it-card-pride-front@3x.jpg",
  },
  onProfileMenuItemClick: handleProfileClick,
  onManageCardsMenuItemClick: handleManageCardClick,
  onShippingMenuItemClick: handleShippingClick,
  form: {
    onSubmit: knobs.getOnSubmit(),
  },
};

export const ReviewAndConfirmScreen = () => {
  return <View {...props} />;
};

ReviewAndConfirmScreen.story = {
  name: "6.0.0 Review & Confirm",
};

export const ReviewAndConfirmScreenNoAddress = () => {
  return <View {...props} addresses={[]} />;
};

ReviewAndConfirmScreenNoAddress.story = {
  name: "6.1.0 Review and Confirm - No Shipping Address",
};

export const ClientSideErrors = () => {
  return (
    <View
      {...props}
      addresses={[]}
      form={{
        errors: {
          addressId: "ADDRESS_ID_REQUIRED",
        },
        ...props.form,
      }}
    />
  );
};

ClientSideErrors.story = {
  name: "6.1.1 Review and Confirm - Client Side Errors",
};

export const MultipleAddresses = () => {
  return <View {...props} addresses={addresses} />;
};

MultipleAddresses.story = {
  name: "6.2.0 Review and Confirm - Multiple Shipping Addresses",
};

export const MerchantAddressError = () => {
  return (
    <View
      {...props}
      addresses={[
        {
          addressId: 9,
          name: "Montgomery Smith",
          line1: "14 Guild Street",
          city: "London",
          state: "",
          zip: "N15 4FL",
          countryCode: "GB",
        },
      ]}
      form={{
        errors: {
          addressId: "INVALID_COUNTRY_DPA",
        },
        ...props.form,
      }}
    />
  );
};

MerchantAddressError.story = {
  name: "6.5.0 Review and Confirm - Merchant Delivery Error",
};
