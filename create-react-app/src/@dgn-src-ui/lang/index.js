import english from "@dgn-src-ui/lang/en";
import espenol from "@dgn-src-ui/lang/es";
import deepmerge from "@dgn-src-ui/util/deepmerge";

export const flatten = (obj, flattenTo = {}, baseKey) => {
  let key = baseKey ? `${baseKey}.${obj.id}` : obj.id;
  flattenTo[key] = obj.message;
  if (obj.messages) {
    obj.messages.forEach((messageObj) => {
      flattenTo = flatten(messageObj, flattenTo, key);
    });
  }
  return flattenTo;
};

export const makeLocale = (lang = "en") => {
  let messages = {
    en: english,
    es: espenol,
  };

  let flattened = {};
  let chosenLang =
    messages[lang] && lang !== "en"
      ? deepmerge(english, messages[lang])
      : english;

  Object.keys(chosenLang).forEach((key) => {
    flattened = {
      ...flattened,
      ...flatten(chosenLang[key]),
    };
  });

  return {
    lang: messages[lang],
    ...messages,
    ...flattened,
  };
};

export default makeLocale;
