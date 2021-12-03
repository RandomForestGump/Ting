import React from "react";
import combine from "@dgn-src-ui/util/combine";
import useConfig from "@dgn-src-ui/hooks/useConfig";
import isInternationalCode from "./isInternationalCode";
import getCountryName from "./getCountryName";

const constructDefaultAddress = ({
  name,
  firstName,
  lastName,
  line1,
  line2,
  line3,
  city,
  state,
  zip,
  countryCode,
}) => {
  let lines = [];
  if (name) {
    lines.push(name);
  }
  if (!name && (firstName || lastName)) {
    lines.push([firstName, lastName].join(" "));
  }
  if (line1) {
    lines.push(line1);
  }
  if (line2) {
    lines.push(line2);
  }
  if (line3) {
    lines.push(line3);
  }
  lines.push([`${city},`, state, zip].join(" "));
  if (isInternationalCode(countryCode)) {
    lines.push(getCountryName(countryCode));
  }
  return <div className={"address"}>{combine(lines)}</div>;
};

export default (address = {}, country) => {
  let config = useConfig();
  country = country ? country : config.country;

  // can make specific address formats here
  switch (country) {
    default:
      return constructDefaultAddress(address);
  }
};
