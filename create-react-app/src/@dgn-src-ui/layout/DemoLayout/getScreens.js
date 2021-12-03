import React, { useState, useReducer } from "react";
import TOC from "./TOC";
import ImageScreen from "./ImageScreen";
import determineNextScreen from "./determineNextScreen";
import { Typography } from "@material-ui/core";
import ToastAlert from "@dgn-src-ui/core/ToastAlert";
import deepmerge from "@dgn-src-ui/util/deepmerge";

const MODE_CLICK = false;
const MODE_INTERACTIVE = true;
const DEFAULT_FLOW = "flow1";

const flows = {
  flow1: {
    enrolled: true,
    authenticated: false,
    networkStepUp: false,
    dgnStepUp: true,
    issuerStepUp: true,
    hasDiscoverCard: true,
    hasOtherCards: false,
    numAddresses: 1,
  },
  flow2: {
    enrolled: true,
    authenticated: false,
    networkStepUp: true,
    dgnStepUp: false,
    issuerStepUp: true,
    hasDiscoverCard: true,
    hasOtherCards: true,
    numAddresses: 1,
  },
  flow3: {
    enrolled: true,
    authenticated: false,
    networkStepUp: true,
    dgnStepUp: true,
    issuerStepUp: true,
    hasDiscoverCard: true,
    hasOtherCards: true,
    numAddresses: 1,
  },
  flow4A: {
    enrolled: true,
    authenticated: true,
    networkStepUp: false,
    dgnStepUp: false,
    issuerStepUp: false,
    hasDiscoverCard: true,
    hasOtherCards: false,
    numAddresses: 1,
  },
  flow4B: {
    enrolled: true,
    authenticated: true,
    networkStepUp: false,
    dgnStepUp: false,
    issuerStepUp: false,
    hasDiscoverCard: true,
    hasOtherCards: true,
    numAddresses: 1,
    editShipping: true,
  },
  flow5A: {
    enrolled: true,
    authenticated: false,
    networkStepUp: false,
    dgnStepUp: true,
    issuerStepUp: false,
    hasDiscoverCard: true,
    hasOtherCards: false,
    numAddresses: 1,
  },
  flow5B: {
    enrolled: true,
    authenticated: false,
    networkStepUp: true,
    dgnStepUp: true,
    issuerStepUp: false,
    hasDiscoverCard: true,
    hasOtherCards: true,
    numAddresses: 1,
  },
  flow5C: {
    enrolled: true,
    authenticated: true,
    networkStepUp: false,
    dgnStepUp: true,
    issuerStepUp: false,
    hasDiscoverCard: true,
    hasOtherCards: true,
    numAddresses: 1,
  },
  flow6: {
    enrolled: true,
    authenticated: false,
    networkStepUp: true,
    dgnStepUp: false,
    issuerStepUp: false,
    hasDiscoverCard: false,
    hasOtherCards: true,
    numAddresses: 1,
  },
  flow9: {
    enrolled: true,
    authenticated: false,
    networkStepUp: true,
    dgnStepUp: true,
    issuerStepUp: true,
    hasDiscoverCard: false,
    hasOtherCards: true,
    hasProfile: true,
    numAddresses: 1,
  },
  flow10: {
    enrolled: false,
    authenticated: false,
    networkStepUp: false,
    dgnStepUp: true,
    issuerStepUp: false,
    hasDiscoverCard: false,
    hasOtherCards: true,
    numAddresses: 1,
  },
};

// Pretend states
let flow = "flow1";
const setFlow = (newFlow) => (flow = newFlow);
let mode = MODE_CLICK;
const setMode = (newMode) => (mode = newMode);

let timeouts = [];

export default (consumer) => {
  const [screen, setNextScreen] = useReducer(determineNextScreen, "Toc");
  const isMode = (checkMode) => {
    return mode === checkMode;
  };
  const originalOptions = {
    addresses: consumer.shippingAddresses.slice(
      0,
      flows[DEFAULT_FLOW].numAddresses
    ),
    selectedAddress: null,
  };
  const [flowOptions, setFlowOptions] = useState(originalOptions);

  const getOptions = () => {
    return {
      ...flows[flow],
      mode: mode,
    };
  };

  const onFormSubmit = () => {
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    setNextScreen(getOptions());
  };

  const extendDCFProps = (props) => {
    return deepmerge(DefaultDCFProps, props);
  };

  const CancelProp = () => {
    setNextScreen({ next: "MerchantCart" });
  };

  const DefaultDCFProps = {
    LayoutProps: {
      onClick: isMode(MODE_CLICK) ? onFormSubmit : undefined,
    },
  };

  const DummyScreenProps = {
    LayoutProps: {
      hideHeader: true,
      hideFooter: true,
      onClick: onFormSubmit,
    },
  };

  if (screen === "Toc" && Object.keys(flowOptions).length > 2) {
    setFlowOptions(originalOptions);
  }

  console.log(
    "Screen:",
    screen,
    "| Flow:",
    flow,
    "| Mode:",
    mode ? "Interactive (true)" : "Click-Through (false)",
    "| Flow Options:",
    flowOptions
  );

  let screens = {
    Toc: {
      component: TOC,
      props: {
        form: {
          defaultValues: { flowList: flow, flowMode: mode },
          onSubmit: ({ flowList, flowMode }) => {
            console.log(flowMode);
            setMode(flowMode ? MODE_INTERACTIVE : MODE_CLICK);
            setFlow(flowList);
            onFormSubmit();
          },
        },
      },
    },
    MerchantCart: {
      component: () => {
        return <ImageScreen image="MerchantCart" />;
      },
      props: DummyScreenProps,
    },
    MerchantCheckout: {
      component: () => {
        return <ImageScreen image="MerchantCheckout" />;
      },
      props: DummyScreenProps,
    },
    ReturningCustomer: {
      component: () => {
        return <ImageScreen image="ReturningCustomer" />;
      },
      props: DummyScreenProps,
    },
    ReturningCustomerFilled: {
      component: () => {
        return <ImageScreen image="ReturningCustomerFilled" />;
      },
      props: DummyScreenProps,
    },
    NewUser: {
      component: () => {
        return <ImageScreen image="NewUser" />;
      },
      props: DummyScreenProps,
    },
    NewUserFilled: {
      component: () => {
        return <ImageScreen image="NewUserFilled" />;
      },
      props: DummyScreenProps,
    },
    NetworkOneTimeCodeAlert: {
      component: () => {
        return <ImageScreen image="NetworkOneTimeCodeAlert" />;
      },
      props: DummyScreenProps,
    },
    NetworkOneTimeCodeEmail: {
      component: () => {
        return <ImageScreen image="NetworkOneTimeCodeEmail" />;
      },
      props: DummyScreenProps,
    },
    NetworkOneTimeCode: {
      component: () => {
        return <ImageScreen image="NetworkOneTimeCode" />;
      },
      props: DummyScreenProps,
    },
    NetworkOneTimeCodeFilled: {
      component: () => {
        return <ImageScreen image="NetworkOneTimeCodeFilled" />;
      },
      props: DummyScreenProps,
    },
    DGNOneTimeCodeAlert: {
      name: "OneTimeCode",
      props: extendDCFProps({
        channel: consumer.maskedEmailAddress,
        form: {
          onSubmit: onFormSubmit,
        },
        onCancelClick: CancelProp,
        onResendCodeClick: () => {},
        LayoutProps: {
          InsertBefore: (props) => {
            return (
              <ToastAlert
                open={true}
                autoHideDuration={0}
                {...props}
                severity="info"
              >
                <Typography color="inherit">
                  <strong>Demo Email Alert</strong>
                  <br />
                  Your one-time code is 876543
                  <br />
                  Click anywhere to continue demo
                </Typography>
              </ToastAlert>
            );
          },
          onClick: () => {
            setNextScreen(getOptions());
          },
        },
      }),
    },
    DGNOneTimeCodeEmail: {
      component: () => {
        return <ImageScreen image="DGNOneTimeCodeEmail" />;
      },
      props: DummyScreenProps,
    },
    DGNOneTimeCode: {
      name: "OneTimeCode",
      props: extendDCFProps({
        channel: consumer.maskedEmailAddress,
        onResendCodeClick: () => {},
        form: {
          onSubmit: ({ validationData }, e, { setError, setValue }) => {
            if (validationData !== "876543") {
              e.target.querySelector("[name='validationData']").focus();
              setValue("validationData", "");
              setError("validationData", 2001);
              return setError("form", 30004);
            }
            onFormSubmit();
          },
        },
        onCancelClick: CancelProp,
      }),
    },
    DGNOneTimeCodeFilled: {
      name: "OneTimeCode",
      props: extendDCFProps({
        channel: consumer.maskedEmailAddress,
        onResendCodeClick: () => {},
        form: {
          onSubmit: onFormSubmit,
          defaultValues: {
            validationData: "876543",
          },
        },
      }),
    },
    IssuerOneTimeCode: {
      name: "OneTimeCode",
      props: extendDCFProps({
        channel: flowOptions.selectedChannel
          ? flowOptions.selectedChannel.value
          : consumer.maskedEmailAddress,
        onResendCodeClick: () => {},
        onSelectMethodClicked: () => {
          setNextScreen({ next: "DGNVerificationChannel" });
        },
        form: {
          onSubmit: ({ validationData }, e, { setError, setValue }) => {
            if (validationData !== "876543") {
              e.target.querySelector("[name='validationData']").focus();
              setValue("validationData", "");
              setError("validationData", 2001);
              return setError("form", 30004);
            }
            onFormSubmit();
          },
        },
        onCancelClick: CancelProp,
        LayoutProps: {
          InsertBefore: (props) => {
            const [open, setOpen] = useState(true);
            const handleClose = () => {
              setOpen(false);
            };
            return (
              <ToastAlert
                open={open}
                onClose={handleClose}
                autoHideDuration={isMode(MODE_CLICK) ? undefined : 6000}
                severity="info"
                {...props}
              >
                <Typography color="inherit">
                  <strong>676-09 (Demo Alert)</strong>
                  <br />
                  Your one-time code is 876543
                </Typography>
              </ToastAlert>
            );
          },
        },
      }),
    },
    IssuerOneTimeCodeFilled: {
      name: "OneTimeCode",
      props: extendDCFProps({
        channel: consumer.maskedEmailAddress,
        onResendCodeClick: () => {},
        form: {
          onSubmit: onFormSubmit,
          defaultValues: {
            validationData: "876543",
          },
        },
      }),
    },
    DGNVerificationChannel: {
      name: "VerificationChannel",
      props: extendDCFProps({
        channels: consumer.contactChannels,
        form: {
          onSubmit: ({ validationChannelId }) => {
            let channel = consumer.contactChannels.find(
              (channel) => channel.identifier === validationChannelId
            );
            setFlowOptions((prevObject) => ({
              ...prevObject,
              selectedChannel: channel,
            }));
            onFormSubmit();
          },
        },
        onCancelClick: CancelProp,
      }),
    },

    DGNVerificationChannelFilled: {
      name: "VerificationChannel",
      props: extendDCFProps({
        channels: consumer.contactChannels,
        form: {
          onSubmit: onFormSubmit,
          defaultValues: {
            validationChannelId: consumer.contactChannels[0].identifier,
          },
        },
      }),
    },
    CardListWithDiscover: {
      component: () => {
        return " Card List With Discover";
      },
      props: DummyScreenProps,
    },
    CardListWithoutDiscover: {
      component: () => {
        return <ImageScreen image="CardListWithoutDiscover" />;
      },
      props: DummyScreenProps,
    },
    CardListWithDiscoverAndOthers: {
      component: () => {
        return <ImageScreen image="CardListWithDiscoverAndOthers" />;
      },
      props: DummyScreenProps,
    },
    NetworkAddCard: {
      component: () => {
        return <ImageScreen image="NetworkAddCard" />;
      },
      props: DummyScreenProps,
    },
    NetworkAddCardFilled: {
      component: () => {
        return <ImageScreen image="NetworkAddCardFilled" />;
      },
      props: DummyScreenProps,
    },
    NetworkVerification: {
      name: "NetworkVerification",
      props: extendDCFProps({
        emailAddress: flows[flow].hasProfile
          ? consumer.maskedEmailAddress
          : undefined,
        form: {
          onSubmit: onFormSubmit,
        },
        onCancelClick: CancelProp,
      }),
    },
    NetworkVerificationFilled: {
      name: "NetworkVerification",
      props: extendDCFProps({
        emailAddress: flows[flow].hasProfile
          ? consumer.maskedEmailAddress
          : undefined,
        form: {
          onSubmit: onFormSubmit,
          defaultValues: {
            firstName: consumer.firstName,
            lastName: consumer.lastName,
            emailAddress: consumer.emailAddress,
          },
        },
        onCancelClick: CancelProp,
      }),
    },
    ReviewAndConfirm: {
      name: "ReviewAndConfirm",
      props: extendDCFProps({
        addresses: flowOptions.addresses,
        selectedShippingAddressId: flowOptions?.selectedAddress?.addressId,
        onProfileMenuItemClick: () => {},
        onManageCardsMenuItemClick: () => {},
        onShippingMenuItemClick: (action, e, data) => {
          if (action === "addShippingAddress") {
            setNextScreen({ next: "AddShippingAddress" });
          } else if (action === "editShippingAddress") {
            setFlowOptions({
              ...flowOptions,
              selectedAddress: data.address,
            });
            setNextScreen({ next: "EditShippingAddress" });
          } else if (action === "deleteShippingAddress") {
            setFlowOptions({
              ...flowOptions,
              selectedAddress: data.address,
            });
            setNextScreen({ next: "ConfirmDeleteShipping" });
          }
        },
        card: {
          type: consumer.issuerName,
          lastFour: consumer.lastFour,
          contact: consumer.emailAddress,
          image: consumer.cardArtUrl,
        },
        form: {
          onSubmit: () => {
            if (isMode(MODE_CLICK) && flows[flow].editShipping) {
              setFlowOptions({
                ...flowOptions,
                selectedAddress: consumer.shippingAddresses[0],
              });
            }
            onFormSubmit();
          },
        },
        LayoutProps: {
          onClick: isMode(MODE_CLICK)
            ? () => {
                setFlowOptions({
                  ...flowOptions,
                  selectedAddress: flowOptions.addresses[0],
                });
                onFormSubmit();
              }
            : undefined,
        },
        onCancelClick: CancelProp,
      }),
    },
    AddShippingAddress: {
      name: "ShippingAddress",
      props: extendDCFProps({
        form: {
          onSubmit: (data) => {
            const address = {
              ...data,
              addressId: Math.round(Math.random() * 1000000),
            };
            setFlowOptions({
              ...flowOptions,
              addresses: [...flowOptions.addresses, address],
              selectedAddress: address,
            });
            onFormSubmit();
          },
        },
        onCancelClick: () => {
          setNextScreen({ next: "ReviewAndConfirm" });
        },
      }),
    },
    EditShippingAddress: {
      name: "ShippingAddress",
      props: extendDCFProps({
        edit: true,
        form: {
          onSubmit: (data) => {
            setFlowOptions({
              ...flowOptions,
              addresses: flowOptions.addresses.map((address) => {
                if (
                  flowOptions?.selectedAddress?.addressId === address.addressId
                ) {
                  return {
                    ...data,
                    addressId: flowOptions?.selectedAddress?.addressId,
                  };
                }
                return address;
              }),
              selectedAddress: {
                ...data,
                addressId: flowOptions?.selectedAddress?.addressId,
              },
            });
            onFormSubmit();
          },
          defaultValues: flowOptions?.selectedAddress,
        },
        onCancelClick: () => {
          setNextScreen({ next: "ReviewAndConfirm" });
        },
      }),
    },
    ConfirmDeleteShipping: {
      name: "Confirmations/DeleteShippingAddress",
      props: extendDCFProps({
        address: flowOptions.addresses.find(
          (address) =>
            address.addressId === flowOptions?.selectedAddress?.addressId
        ),
        onCancelClick: () => {
          setNextScreen({ next: "ReviewAndConfirm" });
        },
        form: {
          onSubmit: () => {
            setFlowOptions({
              ...flowOptions,
              selectedAddress: undefined,
              addresses: flowOptions.addresses.filter(
                (address) =>
                  address.addressId !== flowOptions?.selectedAddress?.addressId
              ),
            });
            onFormSubmit();
          },
        },
      }),
    },
    ConfirmationLoader: {
      name: "Loaders/ConfirmationLoader",
      props: extendDCFProps({
        onScreenLoaded: () => {
          timeouts.push(setTimeout(onFormSubmit, 5000));
        },
      }),
    },
    SessionEnded: {
      name: "Notifications/SessionEnded",
      props: DummyScreenProps,
    },
  };

  screens.EditShippingAddressFilled = deepmerge(screens.EditShippingAddress, {
    props: {
      form: {
        defaultValues: {
          ...flowOptions.addresses[0],
          line1: "987 NW 67th St",
          zip: "98765",
        },
      },
      LayoutProps: {
        onClick: () => {
          let addresses = flowOptions.addresses;
          addresses[0].line1 = "987 NW 67th St";
          addresses[0].zip = "98765";
          setFlowOptions({
            ...flowOptions,
            addresses: addresses,
          });
          onFormSubmit();
        },
      },
    },
  });

  screens.ReviewAndConfirmUpdated = deepmerge(screens.ReviewAndConfirm, {
    props: {
      addresses: [
        {
          ...flowOptions.addresses[0],
          line1: "987 NW 67th St",
          zip: "98765",
        },
      ],
      LayoutProps: {
        onClick: () => {
          let addresses = flowOptions.addresses;
          addresses[0].line1 = "987 NW 67th St";
          addresses[0].zip = "98765";
          setFlowOptions({
            ...flowOptions,
            addresses: addresses,
          });
          onFormSubmit();
        },
      },
    },
  });

  return {
    screen: screens[screen],
    setNextScreen,
    mode,
  };
};
