const useInputClearOnError = (fields = [], form, check = true) => {
  const { onFormLoaded, ...methods } = form;

  if (typeof fields === "string") {
    fields = [fields];
  }

  methods.onFormLoaded = (context, config) => {
    const { hasErrors, setValue } = context;
    if (hasErrors && check) {
      for (var x in fields) {
        setValue(fields[x], "");
      }
    }
    if (onFormLoaded) {
      onFormLoaded(context, config);
    }
  };
  return methods;
};

export default useInputClearOnError;
