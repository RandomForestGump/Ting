import React from "react";
import ConfigContext from "@dgn-src-ui/config";

const useConfig = () => {
  const config = React.useContext(ConfigContext);

  return config;
};

export default useConfig;
