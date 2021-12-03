import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import TextField from "@dgn-src-ui/core/TextField";
import styles from "./CodeInput.module.scss";

const CodeInput = props => {
  let { characters, className, type, ...other } = props;
  let maskArray = [];
  for (let i = 0; i < props.characters; i++) {
    maskArray.push(/\d/);
  }

  return (
    <TextField
      className={cx(className, styles.CodeInput)}
      InputProps={{ autoFocus: true }}
      maskProps={{
        mask: maskArray,
        guide: true,
        placeholderChar: "\u2014"
      }}
      type={type ? type : "tel"}
      hideLabel={true}
      icon={false}
      {...other}
    />
  );
};

CodeInput.propTypes = {
  /** Number of characters in the input */
  characters: PropTypes.number.isRequired,
  /** Class names to give input wrapper */
  className: PropTypes.string
};

export default CodeInput;
