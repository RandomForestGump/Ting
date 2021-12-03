import React from "react";
import { styled } from "@storybook/theming";
import { boolean } from "@storybook/addon-knobs";
import DiscoverLogo from "./DiscoverLogo";
import SRCLogo from "./SRCLogo";
import CardBasicIcon from "./CardIcon/CardBasicIcon";
import CardErrorIcon from "./CardIcon/CardErrorIcon";
import CardLockedIcon from "./CardIcon/CardLockedIcon";
import CardUnlockedIcon from "./CardIcon/CardUnlockedIcon";
import Iconmdx from "./Icon.mdx";
import Heading from "../Heading";

const Meta = styled.div({
  color: "#333",
  fontSize: 16,
  marginLeft: "10px",
});

const Item = styled.div(
  {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "0 1 80%",
    boxSizing: "border-box",
    minWidth: 120,
    padding: "0px 7.5px 20px",
  },
  ({ minimal }) =>
    minimal
      ? {
          flex: "none",
          minWidth: "auto",
          padding: 0,
          background: "#fff",
          border: "1px solid #666",

          "& svg": {
            display: "block",
            marginRight: 0,
            width: 48,
            height: 48,
          },
        }
      : {}
);

const Wrap = styled.div({
  display: "flex",
  flexFlow: "row wrap",
  margin: 30,
});

export default {
  title: "UI Core/Icon",
  parameters: {
    docs: {
      page: Iconmdx,
    },
  },
};

export const singleIcon = () => (
  <Wrap>
    <DiscoverLogo />
  </Wrap>
);

export const allIcons = () => {
  let props = {
    style: {
      width: boolean("Fixed width", false) ? "50px" : null,
    },
  };
  return (
    <>
      <Wrap>
        <Heading>All icons are displayed below at their default size.</Heading>
      </Wrap>
      <Wrap>
        <Item>
          <SRCLogo {...props} /> <Meta>SRCLogo</Meta>
        </Item>
        <Item>
          <DiscoverLogo {...props} /> <Meta>DiscoverLogo</Meta>
        </Item>
        <Item>
          <CardUnlockedIcon /> <Meta>CardUnlockedIcon</Meta>
        </Item>
        <Item>
          <CardLockedIcon /> <Meta>CardLockedIcon</Meta>
        </Item>
        <Item>
          <CardErrorIcon /> <Meta>CardErrorIcon</Meta>
        </Item>
        <Item>
          <CardBasicIcon /> <Meta>CardBasicIcon</Meta>
        </Item>
      </Wrap>
    </>
  );
};
