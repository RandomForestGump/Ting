import { addons } from "@storybook/addons";
import dgnTheme from "./dgnTheme";

addons.setConfig({
  theme: dgnTheme,
  panelPosition: "right"
  // showRoots: true
});
