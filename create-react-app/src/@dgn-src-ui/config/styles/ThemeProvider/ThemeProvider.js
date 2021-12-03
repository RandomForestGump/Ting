import React from "react";
import styles from "./ThemeProvider.module.scss";
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Inject google icon font
const iconFont = document.createElement("link");
iconFont.setAttribute("ref", "stylesheet");
iconFont.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.insertBefore(iconFont, document.head.firstChild);

const ThemeProvider = (props) => {
  return (
    // Wrapping the app in the ThemeProvider component and adding the
    // CssBaseline component as the first child will apply custom
    // theme styling to any Material UI components
    <MuiThemeProvider theme={props.theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <div className={styles.Theme}>{props.children}</div>
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
