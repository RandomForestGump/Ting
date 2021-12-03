import React from "react";
import { makeDecorator } from "@storybook/addons";
import { ThemeProvider, makeTheme } from "@dgn-src-ui/config/styles";

export default makeDecorator({
  name: "withThemeProvider",
  parameterName: "themeProvider",
  wrapper: (storyFn, context, { parameters }) => {
    const theme = makeTheme("defaultTheme");
    return (
      <ThemeProvider theme={theme}>
        <div className="container-fluid mt-20">
          <div className="row">
            <div className="col-12">{storyFn(context)}</div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
});
