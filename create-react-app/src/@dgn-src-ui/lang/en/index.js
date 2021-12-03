import errors from "./errors";

const channels = {
  id: "trustedChannels",
  message: "Unknown Channel",
  messages: [
    {
      id: "SMS",
      message: "Text",
    },
    {
      id: "EMAIL_ADDRESS",
      message: "Email",
    },
    {
      id: "OUTBOUND_CALL",
      message: "Call",
    },
    {
      id: "CUSTOMER_SERVICE",
      message: "Customer Service",
    },
  ],
};

export default { errors, channels };
