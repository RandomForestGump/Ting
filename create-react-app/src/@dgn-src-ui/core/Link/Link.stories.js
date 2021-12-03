import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { FullWidthLink, GlobalLink, Link } from "@dgn-src-ui/core/Link";
import Linkmdx from "./Link.mdx";
import Heading from "../Heading";
import View from "../View";
import { Container } from "@material-ui/core";

export default {
  title: "UI Core",
  component: Link,
  parameters: {
    docs: {
      page: Linkmdx,
    },
  },
};

export const LinkComp = () => {
  let props = {
    link1: text("Inline Link Text", "Inline Link"),
    link2: text("Full Width Link Text", "Full Width Link"),
  };
  let globalLinkOptions = {
    Secure: "secure",
    "Terms & Conditions": "terms",
    "Privacy Policy": "privacy",
    FAQs: "faq",
  };
  let globalLink = select("Global Link", globalLinkOptions, "terms");
  return (
    <View
      screen={() => (
        <Container>
          <Heading>Link Examples</Heading>
          <h2>Inline Link:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            <Link underline="always">{props.link1}</Link>, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h2>Full Width Link:</h2>
          <FullWidthLink>{props.link2}</FullWidthLink>
          <h2>Global Link:</h2>
          <GlobalLink to={globalLink}>
            {Object.keys(globalLinkOptions).find(
              (key) => globalLink === globalLinkOptions[key]
            )}
          </GlobalLink>
        </Container>
      )}
      LayoutProps={{
        hideHeader: true,
        hideFooter: true,
      }}
    />
  );
};

LinkComp.story = {
  name: "Link",
};
