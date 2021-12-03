import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import {
  MASK_ZIP_CODE,
  US_STATES,
  COUNTRIES,
} from "@dgn-src-ui/config/constants";
import isInternationalCode from "@dgn-src-ui/util/isInternationalCode";
import Grid from "@material-ui/core/Grid";
import TextField from "@dgn-src-ui/core/TextField";
import Select from "@dgn-src-ui/core/Select";
import Option from "@dgn-src-ui/core/Option";
import HiddenInput from "@dgn-src-ui/core/Input/HiddenInput";

const Address = ({ useFullName, useCountryCode, ...props }) => {
  const { defaultValues } = useFormContext();
  const [isInternationalAddress, setIsInternationalAddress] = React.useState(
    isInternationalCode(defaultValues.countryCode)
  );

  const onAddressChange = (e) => {
    setIsInternationalAddress(e.target.value !== "US");
  };

  return (
    <div {...props}>
      <Grid container spacing={1}>
        {useFullName && (
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              id="name"
              defaultValue=""
              maxLength="200"
            />
          </Grid>
        )}
        {!useFullName && (
          <>
            <Grid item xs={12}>
              <TextField
                name="firstName"
                label="First Name"
                id="firstName"
                defaultValue=""
                maxLength="50"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="lastName"
                label="Last Name"
                id="lastName"
                defaultValue=""
                maxLength="100"
              />
            </Grid>
          </>
        )}
        {useCountryCode && (
          <Grid item xs={12}>
            <Select
              id="countryCode"
              name="countryCode"
              label="Country/Region"
              onChange={onAddressChange}
              defaultValue="US"
            >
              {COUNTRIES.map((country, index) => {
                return (
                  <Option value={country.code} key={`country-${index}`}>
                    {country.name}
                  </Option>
                );
              })}
            </Select>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            name="line1"
            label="Street Address"
            id="streetAddress"
            defaultValue=""
            maxLength="75"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="line2"
            id="streetAddress2"
            label="Apt/Suite/Floor (Optional)"
            maxLength="75"
          />
        </Grid>
        {isInternationalAddress && (
          <Grid item xs={12}>
            <TextField
              name="line3"
              id="streetAddress3"
              label="Address 3 (Optional)"
              maxLength="75"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            name="city"
            label="City"
            id="city"
            defaultValue=""
            maxLength="50"
          />
        </Grid>
        {!isInternationalAddress && (
          <>
            <Grid item xs={6}>
              <Select id="state" name="state" label="State">
                {US_STATES.map((state, index) => {
                  return (
                    <Option value={state.abbreviation} key={index}>
                      {state.name}
                    </Option>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="zip"
                label="ZIP Code"
                id="zip"
                maskProps={{
                  mask: MASK_ZIP_CODE,
                }}
              />
            </Grid>
          </>
        )}
        {isInternationalAddress && (
          <>
            <Grid item xs={6}>
              <TextField name="province" label="Province" id="province" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="postalCode"
                label="Postal Code"
                id="postalCode"
              />
            </Grid>
          </>
        )}
        <HiddenInput name="addressId" id="addressId" label="Address ID" />
      </Grid>
    </div>
  );
};

Address.propTypes = {
  /**
   * If set to true, outputs the full name field. If false it
   * outputs the first name and last name fields broken up
   */
  useFullName: PropTypes.bool,
  /**
   * If set to true, outputs the country code field. If false
   * it hides the field entirely
   */
  useCountryCode: PropTypes.bool,
};

Address.defaultProps = {
  useFullName: true,
  useCountryCode: true,
};

export default Address;
