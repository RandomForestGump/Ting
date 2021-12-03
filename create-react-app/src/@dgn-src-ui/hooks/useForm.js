import { useState, useCallback } from "react";
import { useForm as useReactHookForm } from "react-hook-form";
import { DEFAULT_FORM_CONFIG } from "@dgn-src-ui/config/constants";
import transform from "@dgn-src-ui/config/validation/schemas/Transformations";

/**
 * Hook wrapper for react-hook-form useForm hook. Uses
 * a default configuration so useForm can be used across
 * many forms without having to declare the same
 * configuration, while still allowing overrides
 */
const useForm = (config = {}) => {
  const [isResolved, formResolver] = useState(true);
  // The UI has default form configurations, but we still
  // need to allow it to be overridden on a case-by-case
  // basis, so merge all of them together into a new object
  const { setError, ...methods } = useReactHookForm(
    Object.assign({}, DEFAULT_FORM_CONFIG, config)
  );

  const setErrorByKey = useCallback(
    (name, type, errorCode) => {
      if (typeof errorCode === "string") {
        errorCode = { key: errorCode };
      }
      return setError(name, type, errorCode);
    },
    [setError]
  );

  // Remove the middle argument by setting it for them
  const setErrorWrapper = useCallback(
    (name, errorCode) => {
      return setErrorByKey(name, "server", errorCode);
    },
    [setErrorByKey]
  );

  // Wrap the react hook form handleSubmit method in our own
  // logic to help with non UI integration.
  //
  // 1. Remove the middle "name" argument for setError,
  //    defaults to "server"
  // 2. Wrap any passed in submitHandler (from the ui)
  //    before actually executing it. This second level
  //    wrapping: sets formResolver to false, the form
  //    has not been resolved, runs transforms on the
  //    data, and adds context methods to the available
  //    arguments in their callback.
  const handleSubmit = (name, onSubmit) => {
    // Add context methods to arguments after transforming
    // the data and setting isResolved state to false.
    //
    //
    const onSubmitHandler = (data, e) => {
      formResolver(false);
      data = transform(name, data);
      onSubmit(data, e, {
        ...methods,
        handleSubmit,
        setError: setErrorWrapper,
        isResolved,
        formResolver,
      });
    };
    return methods.handleSubmit(onSubmitHandler);
  };

  // Also add a helper "hasErrors" method
  return {
    ...methods,
    setError: setErrorByKey,
    isResolved,
    formResolver,
    handleSubmit,
    setErrorWrapper,
    hasErrors: Object.keys(methods.errors).length,
  };
};

export default useForm;
