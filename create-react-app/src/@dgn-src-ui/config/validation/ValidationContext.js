import React from "react";

const ValidationContext = React.createContext({});

export const ValidationContextProvider = ValidationContext.Provider;
export const ValidationContextConsumer = ValidationContext.Consumer;

export default ValidationContext;
