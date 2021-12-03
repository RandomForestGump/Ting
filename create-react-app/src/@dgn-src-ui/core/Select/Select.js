import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useFormContext } from "react-hook-form";
import { COLOR_BORDER } from "@dgn-src-ui/config/constants";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@dgn-src-ui/core/Input";
import styles from "./Select.module.scss";

const cx = classNames.bind(styles);

const SelectProvider = ({
  id,
  name,
  className,
  label,
  icon,
  helperText,
  hideLabel,
  errorHighlight,
  rules,
  defaultValue,
  elementClassName,
  InputProps,
  MenuProps,
  MenuListProps,
  children,
  ...props
}) => {
  // Grab the registration method from form context
  // so we can register input validation
  const {
    register,
    unregister,
    setValue,
    errors,
    defaultValues,
  } = useFormContext();

  // If there is default value directly passed in via props, use that,
  // otherwise check the form context object
  if (defaultValues[name]) {
    defaultValue = defaultValues[name];
  }

  const handleOnChange = (event) => {
    setValue(name, event.target.value);
  };

  React.useEffect(() => {
    setValue(name, defaultValue);
    return () => unregister(name);
  }, [name, setValue, defaultValue, unregister]);

  register({ name: name });

  return (
    <Input
      name={name}
      htmlFor={id}
      className={cx(className, styles.Select)}
      {...props}
      type={"select"}
      label={label}
      icon={icon}
      helperText={helperText}
      hideLabel={hideLabel}
      errorHighlight={errorHighlight}
    >
      <Select
        fullWidth
        inputProps={{
          className: cx(elementClassName, styles.Select__input, {
            Select__input__label_hidden: hideLabel,
          }),
          "aria-invalid": errors[name] ? true : false,
          "aria-describedby": `error-message--${name}`,
          ...props,
        }}
        MenuProps={{
          MenuListProps: {
            disablePadding: true,
            style: {
              marginLeft: "-1px",
              marginRight: "-1px",
              border: `1px solid ${COLOR_BORDER}`,
            },
            ...MenuListProps,
          },
          ...MenuProps,
        }}
        defaultValue={defaultValue}
        onChange={handleOnChange}
      >
        {(children.length || (children = [children])) &&
          children.map((option, index) => {
            return (
              <MenuItem
                className={styles.Select__option}
                value={option.props.value}
                key={index}
              >
                {option}
              </MenuItem>
            );
          })}
      </Select>
    </Input>
  );
};

SelectProvider.propTypes = {
  /** Select Id */
  id: PropTypes.string.isRequired,
  /** Select Name */
  name: PropTypes.string.isRequired,
  /** Holds the select menu items */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** Selected value of the input */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional props to be passed along to the Material UI Menu component */
  MenuProps: PropTypes.object,
  /** Additional props to be passed along to the Material UI MenuList component */
  MenuListProps: PropTypes.object,
  /** Additional props to be passed along to the Material UI Input component */
  InputProps: PropTypes.object,
};

SelectProvider.defaultProps = {
  InputProps: {},
  defaultValue: "",
};

export default SelectProvider;
