import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { withStyles } from "@material-ui/core/styles";
import { Switch as MuiSwitch } from "@material-ui/core";

const SwitchComp = withStyles(() => ({
  root: {
    marginLeft: "-12px",
  },
}))(MuiSwitch);

const Switch = ({
  name,
  value,
  label,
  checked: defaultChecked,
  onChange,
  className,
  ...props
}) => {
  // For registering our input with react-hook-form
  const { register, defaultValues } = useFormContext();
  // If there is default value directly passed in via props, use that,
  // otherwise check the form context object
  defaultChecked = defaultChecked ? defaultChecked : defaultValues[name];

  // So we can toggle checked value
  const [checked, setChecked] = React.useState(defaultChecked);

  // Toggle checked value when the checkbox changes
  const onChangeHandler = (event) => {
    setChecked(event.target.checked);
    onChange(event);
  };
  return (
    <SwitchComp
      inputRef={register}
      checked={checked}
      onChange={onChangeHandler}
      name={name}
      color="primary"
      className={className}
      inputProps={{
        "aria-label": { label },
      }}
      {...props}
    />
  );
};

Switch.propTypes = {
  /** Checkbox Name */
  name: PropTypes.string.isRequired,
  /** Value of a checked checkbox */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** The Text next to the checkbox */
  label: PropTypes.node,
};

Switch.defaultProps = {
  checked: false,
  onChange: () => {},
};
export default Switch;
