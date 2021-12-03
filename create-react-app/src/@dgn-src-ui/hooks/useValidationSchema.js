import { useContext } from "react";
import ValidationContext from "@dgn-src-ui/config/validation/ValidationContext";
// import SchemaProvider from "@dgn-src-ui/config/validation/SchemaProvider";

export default (name, defaultValue, rules = []) => {
  // Validation schema for the entire form. If there are
  // any validations for this input, it will be stored
  // within the validation schema fields
  const validationSchema = useContext(ValidationContext);

  // Additional rules can be manually sent in through
  // the rules props, add them into the schema here
  // validationSchema.addRules(rules, name);

  // Create the validation registration object if there
  // are rules to validate for this field
  return validationSchema.fields[name]
    ? {
        validate: (val) => {
          return validationSchema.fields[name]
            ?.validate(typeof val === "undefined" ? defaultValue : val)
            .then(() => true)
            .catch((e) => {
              return e.message.key ? e.message.key : e.message;
            });
        },
      }
    : {};
};
