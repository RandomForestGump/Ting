import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@dgn-src-ui/core/Button/Button";
import CardBasicIcon from "@dgn-src-ui/core/Icon/CardIcon/CardBasicIcon";
import CardErrorIcon from "@dgn-src-ui/core/Icon/CardIcon/CardErrorIcon";
import CardLockedIcon from "@dgn-src-ui/core/Icon/CardIcon/CardLockedIcon";
import CardUnlockedIcon from "@dgn-src-ui/core/Icon/CardIcon/CardUnlockedIcon";
import CTA from "@dgn-src-ui/core/CTA";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPageComp from "@dgn-src-ui/core/NotificationPage";
import NotificationPageIcon from "@dgn-src-ui/core/NotificationPageIcon";
import NotificationPageHeading from "@dgn-src-ui/core/NotificationPageHeading";
import NotificationPageContent from "@dgn-src-ui/core/NotificationPageContent";
import Notificationmdx from "./Notification.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import { select, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "UI Core",
  component: NotificationPageComp,
  subUIcomponents: {
    NotificationPageIcon,
    NotificationPageHeading,
    NotificationPageContent,
  },
  parameters: {
    docs: {
      page: Notificationmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const NotificationPage = () => {
  const options = {
    CardUnlockedIcon: "CardUnlockedIcon",
    CardLockedIcon: "CardLockedIcon",
    CardErrorIcon: "CardErrorIcon",
    CardBasicIcon: "CardBasicIcon",
  };
  let props = {
    icon: select("Icon", options, "CardUnlockedIcon"),
    heading: text("Heading Text", "Unlock your account"),
    content: text(
      "Body Text",
      "Send a one-time code to your email to access your account."
    ),
    showbutton: boolean("Show Button?", true),
    linktext: text("Link Text", "Cancel and return to merchant"),
  };

  const buttontext = props.showbutton
    ? text("Button Text", "Send Code")
    : false;

  let iconImage;
  if (props.icon === "CardUnlockedIcon") {
    iconImage = CardUnlockedIcon;
  } else if (props.icon === "CardLockedIcon") {
    iconImage = CardLockedIcon;
  } else if (props.icon === "CardErrorIcon") {
    iconImage = CardErrorIcon;
  } else if (props.icon === "CardBasicIcon") {
    iconImage = CardBasicIcon;
  } else {
    iconImage = CardUnlockedIcon;
  }

  return (
    <NotificationPageComp icon={iconImage} heading={props.heading}>
      <Typography>{props.content}</Typography>
      <CTA>
        {props.showbutton && <Button>{buttontext}</Button>}
        <FullWidthLink>{props.linktext}</FullWidthLink>
      </CTA>
    </NotificationPageComp>
  );
};
