import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ActionMenuComp from "@dgn-src-ui/core/ActionMenu";
import ActionMenumdx from "./ActionMenu.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import Link from "@dgn-src-ui/core/Link";

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

export default {
  title: "UI Core",
  component: ActionMenuComp,
  parameters: {
    docs: {
      page: ActionMenumdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const ActionMenu = () => {
  const classes = useStyles();
  const [option, setOption] = useState();
  const handleOnClick = (val, e) => {
    e.nativeEvent.preventDefault();
    setOption(val);
  };
  return (
    <>
      <ActionMenuComp
        id="example"
        label="Action Menu Options"
        onClick={handleOnClick}
      >
        <Link
          align="center"
          href="#"
          className={classes.root}
          value="1"
          underline="none"
        >
          <strong>Option 1</strong>
        </Link>
        <Link
          align="center"
          href="#"
          className={classes.root}
          value="2"
          underline="none"
        >
          <strong>Option 2</strong>
        </Link>
        <Link
          align="center"
          href="#"
          className={classes.root}
          value="3"
          underline="none"
        >
          <strong>Option 3</strong>
        </Link>
      </ActionMenuComp>
      <div style={{ marginTop: "25px" }}>Chosen Menu Option: {option}</div>
    </>
  );
};
