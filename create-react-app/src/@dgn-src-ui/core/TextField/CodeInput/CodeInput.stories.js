import React from "react";
import { styled } from "@storybook/theming";
import { withKnobs, number } from "@storybook/addon-knobs";
import CodeInputComp from "./CodeInput";
import CodeInputmdx from "./CodeInput.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";

export default {
  title: "UI Core/Text Field",
  component: CodeInputComp,
  parameters: {
    docs: {
      page: CodeInputmdx,
    },
  },
  decorators: [
    WrapperDecorator,
    (storyFn) => <FormDecorator storyFn={storyFn} />,
  ],
};

export const CodeInput = () => {
  let props = {
    characters: number("Number of Characters", 6),
  };

  return (
    <CodeInputComp
      name="codeInput"
      id="codeInput"
      characters={props.characters}
    />
  );
};
