import React, { useContext, useState } from "react";
import styles from "./Checkbox.module.scss";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import ValidationContext from "@dgn-src-ui/config/validation/ValidationContext";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import MuiCheckbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";

const Checkbox = ({
  name,
  value,
  label,
  checked: defaultChecked,
  onChange,
  className,
  ...props
}) => {
  // So we can toggle checked value
  const [checked, setChecked] = useState(defaultChecked);
  // For registering our input with react-hook-form
  const { register } = useFormContext();
  // Validation schema for the entire form. If there are
  // any validations for this input, it will be stored
  // within the validation schema fields config
  const validationSchema = useContext(ValidationContext);
  // Toggle checked value when the checkbox changes
  const onChangeHandler = event => {
    setChecked(event.target.checked);
    onChange(event);
  };
  return (
    <FormControlLabel
      className={className}
      label={label}
      control={
        <MuiCheckbox
          inputRef={register(validationSchema)}
          value={value}
          checked={checked}
          onChange={onChangeHandler}
          className={styles.Checkbox}
          color="primary"
          name={name}
          checkedIcon={<CheckRoundedIcon />}
          icon={<CheckBoxOutlineBlankSharpIcon htmlColor="white" />}
          {...props}
        />
      }
    />
  );
};

Checkbox.propTypes = {
  /** Checkbox Name */
  name: PropTypes.string.isRequired,
  /** Value of a checked checkbox */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  /** The Text next to the checkbox */
  label: PropTypes.node,
  /** Set the label's className */
  className: PropTypes.string
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {}
};

export default Checkbox;
