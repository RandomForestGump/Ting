// import React, { useState } from "react";
// import RadioButtonComp from "./Radio";
// import RadioButtonmdx from "./RadioButton.mdx";
// import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
// import FormDecorator from "@dgn-src-ui/.storybook/FormDecorator";
// import { FormControlLabel, RadioGroup } from "@material-ui/core";
// import { text, select } from "@storybook/addon-knobs";

// export default {
//   title: "UI Core",
//   component: RadioButtonComp,
//   parameters: {
//     docs: {
//       page: RadioButtonmdx
//     }
//   },
//   decorators: [WrapperDecorator, storyFn => <FormDecorator storyFn={storyFn} />]
// };

// export const RadioButton = () => {
//   const placeOptions = ["end", "start", "top", "bottom"];
//   const sizeOptions = ["large", "small"];

//   let props = {
//     radio1text: text("Radio 1 Text", "Choose Option 1"),
//     radio1label: select("Radio 1 Label Location", placeOptions, "end"),
//     radio1size: select("Radio 1 Size", sizeOptions, "large"),
//     radio2text: text("Radio 2 Text", "Choose Option 2"),
//     radio2label: select("Radio 2 Label Location", placeOptions, "end"),
//     radio2size: select("Radio 2 Size", sizeOptions, "large")
//   };

//   const [value, setValue] = useState("c");

//   const handleChange = event => {
//     setValue(event.target.value);
//   };

//   return (
//     <RadioGroup value={value} onChange={handleChange}>
//       <FormControlLabel
//         label={props.radio1text}
//         control={<RadioButtonComp size={props.radio1size} />}
//         labelPlacement={props.radio1label}
//         value="a"
//       />
//       <FormControlLabel
//         label={props.radio2text}
//         control={<RadioButtonComp size={props.radio2size} />}
//         labelPlacement={props.radio2label}
//         value="b"
//       />
//     </RadioGroup>
//   );
// };
