import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import Typography from "@material-ui/core/Typography";
import CardComp from "@dgn-src-ui/core/Card/Card";
import CardArt from "@dgn-src-ui/core/CardArt/CardArt";
import Link from "@dgn-src-ui/core/Link/Link";
import Cardmdx from "./Card.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import { FormHelperText } from "@material-ui/core";
import styles from "./Card.module.scss";
import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";

export default {
  title: "UI Core",
  component: CardComp,
  subcomponents: {
    CardArt,
  },
  parameters: {
    docs: {
      page: Cardmdx,
    },
  },
  decorators: [
    WrapperDecorator,
    (storyFn) => <FormDecorator storyFn={storyFn} />,
  ],
};

export const Card = () => {
  let props = {
    title: text("Card Title", "Pay With"),
    action: boolean("Include Action Example", false),
    cardart: boolean("Include Card Art Example", false),
    showerror: boolean("Show Error State", false),
  };

  const message = props.showerror
    ? text("Error Message", "This field is required.")
    : false;

  return (
    <>
      <CardComp
        className={props.showerror ? styles.card__invalid : ""}
        title={props.title}
        action={props.action && <Link>Example Link</Link>}
      >
        {props.cardart && (
          <CardArt src={"/assets/images/it-card-pride-front@3x.jpg"} />
        )}
        <Typography variant="body2">
          Discover Card <br />
          Ending in 9101 <br />
          montgomerySmith@gmail.com
        </Typography>
      </CardComp>
      {props.showerror && (
        <FormHelperText className={styles.card__validationText}>
          {message}
        </FormHelperText>
      )}
    </>
  );
};
