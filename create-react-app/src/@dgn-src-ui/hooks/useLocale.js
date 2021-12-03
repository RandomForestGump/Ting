import useConfig from "./useConfig";

const useLocale = () => {
  //Get config context
  const { locale } = useConfig();

  const __ = (translationObject, fallbackMessage = "Translation error") => {
    // If there's a fallback message and the key can't immediately
    // be found, use the fallback message
    // TEMP
    // console.log(key, fallbackMessage);
    if (typeof translationObject === "string") {
      translationObject = {
        key: translationObject,
        params: {},
      };
    }

    const { key, params } = translationObject;

    let testKey = key.split(".").reduce((keyUp, piece) => {
      return locale[`${keyUp}.${piece}`] ? `${keyUp}.${piece}` : keyUp;
    });

    let translation = locale[testKey]
      ? makeMessage(locale[testKey], params)
      : fallbackMessage;

    return translation;
  };

  const makeMessage = (message, params) => {
    return typeof message === "function" ? message(params) : message;
  };

  const isKey = (key) => {
    return !!locale[key];
  };

  return {
    __,
    isKey,
    locale,
  };
};

export default useLocale;
