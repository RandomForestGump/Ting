import { boolean } from "@storybook/addon-knobs";

const createOnSubmitHandler = () => {
  const simulateServerError = boolean(
    "Simulate server error on form submission",
    false
  );
  return (data, e, context) => {
    const { setError, formResolver } = context;
    setTimeout(() => {
      if (simulateServerError) {
        setError("form", 10106);
      } else {
        console.log(data);
        alert("Form submit successful");
        formResolver(true);
      }
    }, Math.floor(Math.random() * 2999) + 1000);
  };
};

export default {
  getOnSubmit: () => {
    return createOnSubmitHandler();
  },
};
