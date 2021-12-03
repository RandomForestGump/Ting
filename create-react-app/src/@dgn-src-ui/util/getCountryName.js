import { COUNTRIES } from "@dgn-src-ui/config/constants";

export default (countryCode) => {
  return COUNTRIES.find((country) => {
    return country.code === countryCode;
  })?.name;
};
