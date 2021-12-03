import React from "react";
import deepmerge from "@dgn-src-ui/util/deepmerge";

const ConfigContext = React.createContext({});

export const ConfigContextProvider = ConfigContext.Provider;
export const ConfigContextConsumer = ConfigContext.Consumer;

export const makeConfig = (options) => {
  // Specific screen configurations
  const screens = {
    "Notifications/SessionEnded|Loaders/(.*)": {
      disableTimeout: true,
    },
    "Loaders/(.*)": {
      LayoutProps: {
        hideFooter: true,
      },
    },
  };

  // Base configuration option
  let config = {
    themeName: "defaultTheme",
    frame: false,
    lang: "en",
    session: {
      timeout: {
        secondsBeforeWarning: 299,
        secondsBeforeTimeout: 360,
        onTimeout: () => {},
      },
    },
    global: {
      links: {
        secure:
          "https://www.discoverglobalnetwork.com/en-us/what-we-offer/digital-payments/secure-remote-commerce",
        privacy:
          "https://www.discoverglobalnetwork.com/en-us/what-we-offer/digital-payments/secure-remote-commerce/privacy",
        terms:
          "https://www.discoverglobalnetwork.com/en-us/what-we-offer/digital-payments/secure-remote-commerce/terms-and-conditions",
        faq:
          "https://www.discoverglobalnetwork.com/downloads/discover-src-frequently-asked-questions.pdf",
      },
    },
    screens: screens,
  };

  // Override base configuration with screen specific configurations
  // if a screen is set and there is an overriding screen config
  Object.keys(screens).forEach((screen) => {
    if (options?.screen && options?.screen?.match(screen)) {
      config = deepmerge(config, screens[screen]);
    }
  });

  // Merge the incoming config options overtop of the base config
  return deepmerge(config, options);
};

export default ConfigContext;
