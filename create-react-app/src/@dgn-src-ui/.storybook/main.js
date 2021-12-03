module.exports = {
  stories: [
    "../core/**/*.stories.(js|mdx)",
    "../screens/**/*.stories.(js|mdx)",
    "../docs/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links/register",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
  ],
};
