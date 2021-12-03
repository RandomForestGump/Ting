import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import useValidationSchema from "@dgn-src-ui/hooks/useValidationSchema";

const HiddenInput = ({ name, value, style, ...other }) => {
  const { register, setValue, defaultValues } = useFormContext();
  const validationSchema = useValidationSchema(name, value);

  // If there is default value directly passed in via props, use that,
  // otherwise check the form context object
  value = value ? value : defaultValues[name];

  // Selects aren't real select inputs, so we have to register
  // on the change
  useEffect(() => {
    register({ name: name }, validationSchema);
    setValue(name, value);
  }, [register, validationSchema, name, setValue, value]);

  return (
    <input
      type="hidden"
      aria-hidden={true}
      name={name}
      {...other}
      style={{
        visibility: "hidden",
        position: "absolute",
        ...style,
      }}
    />
  );
};

HiddenInput.displayName = "Hidden Input";

HiddenInput.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string,
};

export default HiddenInput;
