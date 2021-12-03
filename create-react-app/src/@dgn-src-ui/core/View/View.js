import React from "react";
import PropTypes from "prop-types";
import { ConfigContextProvider, makeConfig } from "@dgn-src-ui/config";
import { makeLocale } from "@dgn-src-ui/lang";
import AppLayout from "@dgn-src-ui/layout/AppLayout";
import Loader from "@dgn-src-ui/screens/Loaders";
import SessionEnding from "@dgn-src-ui/screens/Notifications/SessionEnding";
import ViewLoader from "./ViewLoader";

/**
 * Loads a screen component based on a string or imported component. This
 * allows for dynamic inclusion of screens without having to individually
 * import every one and decide which one to return.
 *
 * It also acts as a global wrapper for screens, allowing things like
 * global config context and a single layout component to be added
 * to every screen component loaded in.
 */
const View = ({
  children,
  screen,
  config: userConfig,
  loading,
  disableTimeout,
  onScreenLoaded,
  LayoutProps,
  ...props
}) => {
  userConfig.screen = typeof string === "string" ? screen : "Component";

  let config = makeConfig(userConfig);
  config.locale = makeLocale(config.lang);

  return (
    <ConfigContextProvider value={config}>
      <AppLayout onScreenLoaded={onScreenLoaded} {...LayoutProps}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <ViewLoader screen={screen} {...props} Loader={<Loader />} />
            {!disableTimeout && config?.session?.timeout && (
              <SessionEnding {...props} />
            )}
          </>
        )}
      </AppLayout>
    </ConfigContextProvider>
  );
};

View.propTypes = {
  /**
   * Which screen to load into the AppLayout. Can either be
   * a string representation or a component */
  screen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
  /**
   * Form props that will be passed along to the `Form` component within a screen.
   *
   * Name|Description|Default
   * |---|---|---|
   * onSubmit|Callback function that gets invoked when the form is successfully submit, post client side validation. Accepts a data object containing fields and values, a synthetic event object, and a form context object. The form context object contains: setError (accepts "form" or a field name as the first argument, and an ERROR_CODE as the second), formResolver (accepts boolean, sending in true will stop any resolving items like button spinners, if you are navigating away this is unnecessary), and others found in the React Hook Forms docs below.|() => {}
   * defaultValues|An object containing field name => value pairs for pre-loading values into form fields.|{}
   * errors|An object containing field name => value pairs for any errors that should be present on load. Accepts field names as keys, as well as a generic "form" key for triggering the error at a top of the form. The value should be an error code.|{}
   * contextConfig.mode|What kind of submission event triggers React Hook Form|"onSubmit"
   * contextConfig.revalidateMode|After the form is submitted for the first time, what event triggers another revalidation|"onSubmit"
   * contextConfig.submitFocusError|When set to true, focuses on the first form field error|true
   */
  form: PropTypes.shape({
    onSubmit: PropTypes.func,
    defaultValues: PropTypes.shape({
      fieldName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
      ]),
    }),
    contextConfig: PropTypes.shape({
      mode: PropTypes.oneOf(["onSubmit", "onBlur", "onChange"]),
      reValidateMode: PropTypes.oneOf(["onSubmit", "onBlur", "onChange"]),
      submitFocusError: PropTypes.bool,
    }),
  }),
  /**
   * Global configuration available to UI screen.
   *
   * Values can be accessed by any subcomponent with the `useConfig` hook.
   *
   * Name|Description|Default
    |---|---|---|
    themeName|No other themes are currently available|"defaultTheme"
    frame|If set to true, the UI will "frame" itself once the browser reaches 600px wide to prevent the UI from stretching too far. This should not be set to true for all cases, as some tablets have a screen size larger than 600px and the desired view does not include the app being "framed" in.|false
    lang|Default language set, must have corresponding language files set in `@dgn-src-ui/lang`. Currently the only accepted language is "en".|"en"
    session.timeout|Session timeout object containing the information needed to execute on session idle/ended functionality. If this value is false and not an object, the session idle screens will be automatically disabled.
    session.timeout.secondsBeforeWarning|When the user has been idle for this long, the UI automatically shows the `SessionEnding` screen over top of the current screen. Countdown shows how many seconds before the `secondsBeforeTimeout` value is reached. Subtracting one from the desired value will make sure they see a nice round number when the screen switches.|299
    session.timeout.secondsBeforeTimeout|When the user has been idle for this long, the `onTimeout` callback is invoked. By default the screen will not automatically update to the `SessionEnded` screen. It only invokes the callback function.|360
    session.timeout.onTimeout|Callback function that gets invoked when `secondsBeforeTimeout` has been reached after no input from user (idle timeout). This callback must be used to redirect the user to the appropriate screen or the user will be sitting on this screen with a `00:00` counter. There is a `Notifications/SessionEnded` screen that can be loaded and is the recommended screen to load.|() => {}
    global.links.secure|URL string used for any "Secure" links.|<a href="https://www.discoverglobalnetwork.com/en-us/what-we-offer/digital-payments/secure-remote-commerce">Copy Link Address</a>
    global.links.terms|URL string used for any "Terms & Conditions" links.|<a href="https://www.discoverglobalnetwork.com/en-us/what-we-offer/digital-payments/secure-remote-commerce/terms-and-conditions">Copy Link Address</a>
    global.links.privacy|URL string used for any "Privacy Policy" links.|<a href="https://www.discoverglobalnetwork.com/en-us/what-we-offer/digital-payments/secure-remote-commerce/privacy">Copy Link Address</a>
    global.links.faq|URL string used for any "FAQ" links|<a href="https://www.discoverglobalnetwork.com/downloads/discover-src-frequently-asked-questions.pdf">Copy Link Address</a>
   * */
  config: PropTypes.shape({
    /** What theme to apply to the entire UI screen.  */
    themeName: PropTypes.string,
    /** Whether or not the UI should be framed in */
    frame: PropTypes.bool,
    /** Language code to use for locale translations */
    lang: PropTypes.string,
    /** Session configuration */
    session: PropTypes.shape({
      timeout: PropTypes.shape({
        onTimeout: PropTypes.func,
        secondsBeforeWarning: PropTypes.number,
        secondsBeforeTimeout: PropTypes.number,
      }),
    }),
    global: PropTypes.shape({
      links: PropTypes.shape({
        secure: PropTypes.string,
        privacy: PropTypes.string,
        terms: PropTypes.string,
        faq: PropTypes.string,
      }),
    }),
  }),
  /** Whether or not to show a loading screen before the actual screen. The value passed in here is likely to be a state variable so a render is triggered when you switch the loading status to false. */
  loading: PropTypes.bool,
  /** Disables the idle timeout screen from popping up */
  disableTimeout: PropTypes.bool,
  /** Callback invoked when the user initiates a cancel click. This function accepts a single synthetic click event object as an argument. By default, it will prevent the default action of any item it is attached to. This prop is passed to all screens and implemented wherever a cancel click is required. */
  onCancelClick: PropTypes.func,
  /** Callback invoked when a screen has been loaded. Accepts the global config object as an argument. */
  onScreenLoaded: PropTypes.func,
  /** Props to be sent down to the layout component */
  LayoutProps: PropTypes.shape({
    hideHeader: PropTypes.bool,
    hideFooter: PropTypes.bool,
    InsertBefore: PropTypes.elementType,
    InsertAfter: PropTypes.elementType,
  }),
};

View.defaultProps = {
  config: {},
  loading: false,
  disableTimeout: false,
  onCancelClick: () => {},
  onScreenLoaded: () => {},
  LayoutProps: {},
};

export default View;
