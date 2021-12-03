import SchemaProvider from "./SchemaProvider";
import FormSchemas from "./schemas/Forms";
import FieldSchemas from "./schemas/Fields";
import RuleSchemas from "./schemas/Rules";

/**
 * Wrapper/Helper object for providing access
 * to the various schemas
 */
const Validation = {
  schema: (schemaName) => {
    return FormSchemas[schemaName] || SchemaProvider.object();
  },
  provider: SchemaProvider,
  forms: FormSchemas,
  fields: FieldSchemas,
  rules: RuleSchemas,
};

export default Validation;
export { Validation };
