import { addParameters, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import withThemeProvider from "./decorators/withThemeProvider";
import "@dgn-src-ui/config/styles/global.css";

addParameters({
  viewport: {
    defaultViewport: "mobile2",
    viewports: {
      mobile1: MINIMAL_VIEWPORTS.mobile1,
      mobile2: {
        ...INITIAL_VIEWPORTS.iphone8p,
        name: "Large Mobile",
      },
      tablet: MINIMAL_VIEWPORTS.tablet,
    },
  },
});

const sortReplacements = [
  ["GetStarted", "Configuration", "Views", "Forms", "Error Handling"],
];

addParameters({
  options: {
    storySort: (a, b) => {
      let name1 = `${a[1].kind} ${a[1].name}`.replace(/[^a-zA-Z0-9]/g, "");
      let name2 = `${b[1].kind} ${b[1].name}`.replace(/[^a-zA-Z0-9]/g, "");

      for (var x in sortReplacements) {
        for (var y in sortReplacements[x]) {
          name1 = name1.replace(
            sortReplacements[x][y],
            `${y}${sortReplacements[x][y]}`
          );
          name2 = name2.replace(
            sortReplacements[x][y],
            `${y}${sortReplacements[x][y]}`
          );
        }
      }

      return name1.localeCompare(name2, undefined, {
        numeric: true,
      });
    },
    sortStoriesByKind: true,
    showRoots: true,
  },
});

// Globally enable addons
addDecorator(withA11y);
addDecorator(
  withKnobs({
    escapeHTML: false,
  })
);
addDecorator(withThemeProvider);
