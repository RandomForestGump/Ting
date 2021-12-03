import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { COLOR_BG_PRIMARY, COLOR_BG_FRAME } from "@dgn-src-ui/config/constants";
import useConfig from "@dgn-src-ui/hooks/useConfig";
import { ThemeProvider, makeTheme } from "@dgn-src-ui/config/styles";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Box from "@material-ui/core/Box";
import styles from "./AppLayout.module.scss";
import "@dgn-src-ui/config/styles/global.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: COLOR_BG_PRIMARY,
  },
});

/**
 * Application shell. All pages that need the main application shell
 * should implement this layout, sending in the application content
 * as children.
 *
 * @param {*} props
 * @returns React Fragment
 */
const AppLayout = ({
  children,
  onScreenLoaded,
  hideHeader,
  hideFooter,
  InsertBefore,
  InsertAfter,
  AppProps,
  ...props
}) => {
  // Pull in the application wide configuration state
  const config = useConfig();

  const useFrame = config.frame;
  const themeName = config.themeName;

  // Create the theme, pass through additional configs
  // to handle background color based on if the view
  // needs to be framed in or not (large screens)
  const theme = makeTheme(themeName, {
    palette: {
      background: {
        default: useFrame ? COLOR_BG_FRAME : COLOR_BG_PRIMARY,
      },
    },
  });

  // Fire the onScreenLoaded event, giving access to
  // the global config context and to the theme context
  onScreenLoaded(config);

  // Style classes
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div
        className={cx(styles.Frame, {
          [styles.Frame__active]: config.frame,
        })}
      >
        {InsertBefore && <InsertBefore className="InsertBefore__element" />}
        <Box className={cx(styles.App, classes.root)} {...AppProps}>
          {!hideHeader && <Header className={styles.App__heading} />}
          <Content className={styles.App__content} {...props}>
            {children}
          </Content>
          {!hideFooter && <Footer className={styles.App__footer} />}
        </Box>
        {InsertAfter && <InsertAfter className={"InsertAfter__element"} />}
      </div>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  /** Holds the main content of the App */
  children: PropTypes.node,
  /** Callback invoked when a screen has been loaded. Accepts the global config object as an argument */
  onScreenLoaded: PropTypes.func,
  /** Hides the SRC/DGN logo header */
  hideHeader: PropTypes.bool,
  /** Hides the DGN link footer */
  hideFooter: PropTypes.bool,
  /** React component to be inserted before the layout content, but inside the App container */
  InsertBefore: PropTypes.elementType,
  /** React component to be inserted after the layout content, but inside the App container */
  InsertAfter: PropTypes.elementType,
  /** Any props to send into the App content component */
  AppProps: PropTypes.object,
};

AppLayout.defaultProps = {
  onScreenLoaded: () => {},
  AppProps: {},
  hideHeader: false,
  hideFooter: false,
};

export default AppLayout;
