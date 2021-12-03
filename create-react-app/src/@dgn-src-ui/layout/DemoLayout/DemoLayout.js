import React from "react";
import View from "@dgn-src-ui/core/View";
import Box from "@material-ui/core/Box";
import styles from "./DemoLayout.module.scss";
import getScreens from "./getScreens";
import deepmerge from "@dgn-src-ui/util/deepmerge";

/**
 * Demo page, should not be included in actual application. It simply
 * contains an iframe, mimicking a lightbox iframe on a vendor like
 * Cinemark. It loads the actual application within the iframe. This
 * page can be used for presenting purposes.
 */
const addresses = [
  {
    addressId: 22,
    name: "Montgomery Smith",
    firstName: "Montgomery",
    lastName: "Smith",
    line1: "123 NW 45th ST",
    city: "New York",
    state: "NY",
    zip: "12345",
    countryCode: "US",
  },
  {
    addressId: 12,
    name: "Phoebe Buffay",
    firstName: "Phoebe",
    lastName: "Buffay",
    line1: "5 Morton St",
    city: "New York",
    state: "NY",
    zip: "10014",
    countryCode: "US",
  },
  {
    addressId: 9,
    name: "Liz Lemon",
    firstName: "Liz",
    lastName: "Lemon",
    line1: "160 Riverside Drive",
    city: "New York",
    state: "NY",
    zip: "10024",
    countryCode: "US",
  },
];

const DemoLayout = () => {
  const consumerInfo = {
    merchant: "Papa Johns",
    contactChannels: [
      {
        identifier: "A10002",
        type: "SMS",
        value: "***-***-1234",
      },
      {
        identifier: "A10003",
        type: "OUTBOUND_CALL",
        value: "***-***-1234",
      },
      {
        identifier: "A10004",
        type: "SMS",
        value: "***-***-4321",
      },
      {
        identifier: "A10005",
        type: "OUTBOUND_CALL",
        value: "***-***-4321",
      },
    ],
    firstName: "Montgomery",
    lastName: "Smith",
    emailAddress: "montgomery@gmail.com",
    issuerName: "Discover Card",
    maskedEmailAddress: "mon************@gmail.com",
    cardArtUrl: "/assets/images/it-card-pride-front@3x.jpg",
    lastFour: "9101",
    shippingAddresses: addresses,
  };

  const { screen, setNextScreen, mode } = getScreens(consumerInfo);
  let { config = {}, LayoutProps, ...props } = screen.props;
  // Extract LayoutProps and transfer onClick handler into AppProps
  let { onClick, AppProps, ...otherLayoutProps } = LayoutProps || {};
  // Set timeout to go to the session ended screen
  config.session = {
    ...config?.session,
    timeout: {
      onTimeout: () => {
        setTimeout(() => setNextScreen({ next: "SessionEnded" }), 200);
      },
    },
  };
  // Remove the automatic session timeout
  if (mode === "click") {
    props.disableTimeout = true;
  }
  return (
    <Box className={styles.Demo}>
      <Box className={styles.Demo__wrapper}>
        <a
          onClick={(e) => {
            console.log("HOME");
            e.preventDefault();
            setNextScreen({ next: "Toc" });
          }}
          href="/"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            width: "100%",
            height: "35px",
            zIndex: 500,
          }}
        >
          <span></span>
        </a>
        <View
          screen={screen.component ? screen.component : screen.name}
          {...props}
          LayoutProps={{
            ...otherLayoutProps,
            AppProps: {
              ...AppProps,
              onKeyPress: onClick,
              onClick: onClick,
            },
          }}
          config={deepmerge(
            {
              consumer: consumerInfo,
            },
            config
          )}
          bustViewCache={true}
        />
      </Box>
    </Box>
  );
};

export default DemoLayout;
