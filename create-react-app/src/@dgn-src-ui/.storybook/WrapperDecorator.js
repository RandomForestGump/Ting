import React from "react";
import { styled } from "@storybook/theming";

export default storyFn => {
  const Wrapper = styled.div({
    maxWidth: 375,
    margin: 30
  });
  return <Wrapper>{storyFn()}</Wrapper>;
};
