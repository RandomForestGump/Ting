// import React from "react";
// import { styled } from "@storybook/theming";
// import { radios, text } from "@storybook/addon-knobs";
// import FilledInput from "@material-ui/core/FilledInput";
// import InputComp from "@dgn-src-ui/core/Input";
// import Inputmdx from "./Input.mdx";
// import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
// import Form from "@dgn-src-ui/core/Form";
// import Grid from "@material-ui/core/Grid";
// import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
// import styles from "./Input.module.scss";
// import classNames from "classnames/bind";
// import { COLOR_ERROR } from "@dgn-src-ui/config/constants";
// import { useFormContext } from "react-hook-form";
// const cx = classNames.bind(styles);

// export default {
//   title: "Input",
//   component: InputComp,
//   parameters: {
//     docs: {
//       page: Inputmdx
//     }
//   },
//   decorators: [
//     WrapperDecorator
//   ]
// };

// export const Input = () => {
//   const options = {
//     None: "none",
//     Error: "error",
//     Valid: "valid"
//   };

//   let props = {
//     validation: radios("Validation", options, "none"),
//     fieldLabel: text("Label", "Select Label")
//   };

//   return (
//     <Form id="form" name="form">
//       <InputComp
//         error={props.validation === "error"}
//         valid={props.validation === "valid"}
//         label={props.fieldLabel}
//       >
//         <Grid
//         container
//         className={styles.Input__field}
//         spacing={1}
//         alignItems="center"
//         >
//           <Grid item className={styles.Input__inputContainer}>
//             <FilledInput fullWidth />
//           </Grid>
//           <Grid item>
//           {props.validation === "error" && (
//             <WarningRoundedIcon
//               style={{ color: COLOR_ERROR }}
//               className={cx(styles.Input__icon, styles.Input__icon__error)}
//             />
//           )}
//           </Grid>
//         </Grid>
//       </InputComp>

//     </Form>
//   );
// };
