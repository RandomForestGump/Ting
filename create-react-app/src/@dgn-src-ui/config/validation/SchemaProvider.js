import * as Yup from "yup";
import FieldRules from "./schemas/Fields";

/**
 * Wrapper for the schema provider used, in this case Yup.
 *
 * We need a few custom methods added to Yup so we can
 * manipulate rules and tests to a greater degree than
 * it provides naturally (adding in tests after)
 */

// Yup schemas can have sub schemas for fields
Yup.addMethod(Yup.mixed, "hasField", function(field) {
  return !!this.fields?.[field];
});

// Checks to see if a given test has already been added
// to this schema
Yup.addMethod(Yup.mixed, "hasTest", function(testName) {
  return this.tests.filter((test) => {
    return test.OPTIONS?.name === testName;
  }).length;
});

// Adds an array of rule objects to the schema. If field is passed in,
// deep dive into that field schema and add the rules there
Yup.addMethod(Yup.mixed, "addRules", function(rules = [], field = null) {
  return rules.length
    ? this.withMutation((validationSchema) => {
        if (field) {
          return validationSchema.hasField(field)
            ? validationSchema.fields[field].addRules(rules)
            : validationSchema.shape({
                [field]: Yup.mixed().addRules(rules),
              });
        }
        rules.forEach((rule) => {
          validationSchema.addTest(rule);
        });

        return validationSchema;
      })
    : this;
});

// Helper method, makes sure a single rule gets added into
// an array and passed to the addRules method
Yup.addMethod(Yup.mixed, "addRule", function(rule) {
  return this.addRules([rule]);
});

// Helper method, grabs all of the rules for a given field
// name within the field rules configuration.
Yup.addMethod(Yup.mixed, "addFieldRules", function(field) {
  return this.addRules(FieldRules[field]);
});

// Adds a test to the schema, but only if it doesn't
// already exist (uses the rule object name to match)
// TODO: Should overwrite it, if it exists
Yup.addMethod(Yup.mixed, "addTest", function(rule) {
  return !this.hasTest(rule.name) && this.test(rule);
});

Yup.addMethod(Yup.mixed, "isRequired", function() {
  return this.test({
    name: "isRequired",
    message: () => ({
      key: "errors.isRequired",
      values: {},
      mod: "required",
    }),
    test: (value) => {
      return typeof value === "string"
        ? value.replace(/\W/g, "").length
        : !(typeof value === "undefined" || value === null || value === false);
    },
  });
});
Yup.addMethod(Yup.string, "isValidCardNumber", function() {
  return this.test({
    name: "isValidCardNumber",
    message: () => ({
      key: "errors.isValidCardNumber",
      mod: "valid",
    }),
    test: (value) => value.replace(/\s/g, "").match(/\b\d{9,19}\b/),
  });
});
Yup.addMethod(Yup.string, "isValidExpirationDate", function() {
  return this.test({
    name: "isValidExpirationDate",
    message: () => ({
      key: "errors.isValidExpirationDate",
      mod: "valid",
    }),
    test: (value) => value.match(/^((0[1-9])|(1[0-2]))\/(\d{4})$/),
  });
});
Yup.addMethod(Yup.string, "isValidSecurityCode", function() {
  return this.test({
    name: "isValidSecurityCode",
    message: () => ({
      key: "errors.isValidSecurityCode",
      mod: "valid",
    }),
    test: (value) => value.match(/^(\d{3})$/),
  });
});
Yup.addMethod(Yup.string, "isValidOneTimeCode", function() {
  return this.test({
    name: "isValidOneTimeCode",
    message: () => ({
      key: "errors.isValidOneTimeCode",
      mod: "required",
    }),
    test: (value) => value.match(/^(\d{6})$/),
  });
});
Yup.addMethod(Yup.string, "isValidZipCode", function() {
  return this.test({
    name: "isValidZipCode",
    message: () => ({
      key: "errors.isValidZipCode",
      mod: "length",
    }),
    test: (value) => value.match(/^(\d{5})$/),
  });
});

Yup.setLocale({
  string: {
    max: ({ max }) => ({
      key: "errors.field_max_length",
      values: { max },
      mod: "max_length",
    }),
    length: ({ length }) => ({
      key: "errors.field_length",
      values: { length },
      mod: "length",
    }),
    email: () => ({
      key: "errors.valid_email_address",
      mod: "required",
    }),
  },
});

export default Yup;
