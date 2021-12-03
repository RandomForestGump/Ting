import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#ff6000",
  colorSecondary: "#17628b",

  // UI
  appBg: "white",
  // appContentBg: 'silver',
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Meta Web Normal", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#293033",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#17628b",
  barSelectedColor: "#041e42",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "DGN's Storybook",
  brandUrl: "https://www.discoverglobalnetwork.com/en-us/",
  brandImage: "https://www.discoverglobalnetwork.com/assets/img/DGN-logo.svg"
});
