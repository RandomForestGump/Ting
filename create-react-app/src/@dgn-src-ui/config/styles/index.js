import { TestTheme, DefaultTheme } from "@dgn-src-ui/config/styles";
import deepmerge from "@dgn-src-ui/util/deepmerge";
import { createMuiTheme } from "@material-ui/core/styles";

export * from "./themes";
export { default as ThemeProvider } from "./ThemeProvider";

export const makeTheme = (newTheme, pref = {}) => {
  const BaseThemeConfig = deepmerge(DefaultTheme, pref);
  switch (newTheme) {
    case "testTheme":
      return createMuiTheme(deepmerge(BaseThemeConfig, TestTheme));
    default:
      return createMuiTheme(BaseThemeConfig);
  }
};
