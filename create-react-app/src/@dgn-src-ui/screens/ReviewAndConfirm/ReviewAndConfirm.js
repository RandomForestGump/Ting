import React, { useState } from "react";
import PropTypes from "prop-types";
import combine from "@dgn-src-ui/util/combine";
import addressify from "@dgn-src-ui/util/addressify";
import PersonIcon from "@material-ui/icons/Person";
import HiddenInput from "@dgn-src-ui/core/Input/HiddenInput";
import Typography from "@material-ui/core/Typography";
import { DefaultTheme as theme } from "@dgn-src-ui/config/styles";
import ActionMenu from "@dgn-src-ui/core/ActionMenu";
import Button from "@dgn-src-ui/core/Button/Button";
import Card from "@dgn-src-ui/core/Card/Card";
import CardArt from "@dgn-src-ui/core/CardArt/CardArt";
import Carousel from "@dgn-src-ui/core/Carousel";
import Checkbox from "@dgn-src-ui/core/Checkbox";
import CTA from "@dgn-src-ui/core/CTA";
import Disclaimer from "@dgn-src-ui/core/Disclaimer";
import { FullWidthLink, GlobalLink } from "@dgn-src-ui/core/Link";
import Form from "@dgn-src-ui/core/Form/Form";
import Link from "@dgn-src-ui/core/Link";
import Paper from "@dgn-src-ui/core/Paper";
import Tooltip from "@dgn-src-ui/core/Tooltip/Tooltip";
import FormErrorAlert from "@dgn-src-ui/core/FormErrorAlert";
import { SRCLogo } from "@dgn-src-ui/core/Icon";
import { Container } from "@material-ui/core";
import styles from "./ReviewAndConfirm.module.scss";
import ManageCardsMenu from "./CardMenu";
import FormContent from "@dgn-src-ui/core/FormContent";

const makeAddressSlides = (addresses) => {
  return addresses.map((address) => {
    return makeAddressSlide(address);
  });
};

const makeAddressSlide = (address) => {
  return (
    <Paper
      className={styles.ReviewAndConfirm__paper}
      elevation={0}
      square
      backgroundColor={theme.palette.grey[100]}
    >
      {addressify(address)}
    </Paper>
  );
};

const ReviewAndConfirm = ({
  addresses,
  card: cardConfig,
  selectedShippingAddressId,
  rememberUser,
  form,
  onCancelClick,
  onProfileMenuItemClick,
  onManageCardsMenuItemClick,
  onShippingMenuItemClick,
}) => {
  // Create slides for our shipping address carousel
  let slides = makeAddressSlides(addresses);
  let { image: cardImageSr, ...cardInfo } = cardConfig;

  const [shippingAddressId, setShippingAddressId] = useState(
    addresses[0] ? addresses[0].addressId : null
  );

  const setAddressId = (addressIndex) => {
    if (addressIndex !== false)
      setShippingAddressId(addresses[addressIndex].addressId);
  };

  const getAddress = (id) => {
    return addresses.find((address) => address.addressId === id);
  };

  // All screens have *at least* the "Add Shipping" option in the menu
  let shippingMenuOptions = [
    {
      href: "#",
      text: "Add Shipping Address",
      value: "addShippingAddress",
    },
  ];

  // If there are any addresses, give them an edit option
  if (addresses.length) {
    let selectedAddress = getAddress(shippingAddressId);
    shippingMenuOptions.push(
      {
        href: "#",
        text: "Edit Shipping Address",
        value: "editShippingAddress",
        data: {
          address: selectedAddress,
        },
      },
      {
        href: "#",
        text: "Delete Shipping Address",
        value: "deleteShippingAddress",
        data: {
          address: selectedAddress,
        },
      }
    );
  }

  cardInfo.lastFour = `Ending in ${cardInfo.lastFour}`;

  return (
    <Container>
      <Form
        id="reviewAndConfirm"
        name="ReviewAndConfirm"
        className={styles.ReviewAndConfirm}
        {...form}
      >
        <FormErrorAlert />
        <ActionMenu
          className={styles.ReviewAndConfirm__profile}
          id="profile"
          label={<PersonIcon />}
          color={"secondary"}
          onClick={onProfileMenuItemClick}
        >
          <Link
            align="right"
            href="#"
            className={styles.ReviewAndConfirm__profile_option}
            underline="none"
            onClick={(e) => e.preventDefault()}
            value="signOut"
          >
            <Typography>{cardInfo.contact}</Typography>
            <strong>Sign Out</strong>
          </Link>
        </ActionMenu>
        <Card
          title="Pay With"
          id="manageCards"
          action={
            <ManageCardsMenu
              id="manageCards"
              onClick={onManageCardsMenuItemClick}
              options={[
                {
                  href: "#",
                  text: "Add Card",
                  value: "addCard",
                },
                {
                  href: "#",
                  text: "Switch Card",
                  value: "switchCard",
                },
                {
                  href: "#",
                  text: "Remove Card",
                  value: "removeCard",
                },
              ]}
            />
          }
        >
          <CardArt src={cardImageSr} />
          <Typography variant="body2">{combine(cardInfo)}</Typography>
        </Card>

        <Card
          title="Deliver To"
          fieldName="addressId"
          action={
            <ManageCardsMenu
              id="shippingMenu"
              onClick={onShippingMenuItemClick}
              options={shippingMenuOptions}
            />
          }
        >
          {slides.length > 1 ? (
            <Carousel
              slides={slides}
              onCarouselUpdate={setAddressId}
              index={
                selectedShippingAddressId && slides.length
                  ? addresses.findIndex(
                      (address) =>
                        address.addressId === selectedShippingAddressId
                    )
                  : undefined
              }
            />
          ) : slides[0] ? (
            slides[0]
          ) : (
            <Paper
              className={styles.ReviewAndConfirm__paper}
              elevation={0}
              square
              backgroundColor={theme.palette.grey[100]}
            >
              Please add a new shipping address.
            </Paper>
          )}
        </Card>
        <FormContent>
          <Checkbox
            className={styles.ReviewAndConfirm__checkbox_label}
            name="rememberDevice"
            label="Remember me on this device"
            value={true}
            checked={rememberUser}
          />
          <Tooltip
            title={
              <div>
                <Typography gutterBottom>
                  When selected, this allows faster checkout for any{" "}
                  <SRCLogo inline={true} /> online checkout transactions with
                  your card on this device.
                </Typography>
                <Typography>
                  This option is not recommended for shared devices as it will
                  allow anyone with access to your device to make purchases
                  using your card.
                </Typography>
              </div>
            }
          />
          <Disclaimer>
            <Typography variant="body2">
              By clicking continue, you agree to our{" "}
              <GlobalLink to="terms">Terms &amp; Conditions</GlobalLink> and{" "}
              <GlobalLink to="privacy">Privacy Policy</GlobalLink>.
            </Typography>
          </Disclaimer>
          <HiddenInput
            name="addressId"
            id="addressId"
            label="Shipping Address ID"
            value={shippingAddressId}
          />
        </FormContent>
        <CTA>
          <Button type="submit">Continue</Button>
          <FullWidthLink onClick={onCancelClick}>
            Cancel and Return to Merchant
          </FullWidthLink>
        </CTA>
      </Form>
    </Container>
  );
};

ReviewAndConfirm.propTypes = {
  /**
   * Array of addresses
   *
   * Name|Description|Default
   * |---|---|---|
   * |addressId|ID of shipping address||
   * |name|Full name of consumer||
   * |firstName|First name of consumer||
   * |lastName|Last name of consumer||
   * |line1|Address line 1 of shipping address||
   * |line2|Address line 2 of shipping address||
   * |line3|Address line 3 of shipping address||
   * |city|City of shipping address||
   * |state|State or province of shipping address||
   * |zip|Zip Code or Postal Code of shipping address||
   */
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      addressId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      line1: PropTypes.string,
      line2: PropTypes.string,
      line3: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  /**
   * Card information object
   *
   * Name|Description|Default
   * |---|---|---|
   * |type|Type of card (e.g. "Discover Card")||
   * |lastFour|Last 4 digits of card, will be transformed to "Ending in {lastFour}"||
   * |contact|Masked email, phone number, or other contact channel||
   * |image|Card art URL||
   */
  card: PropTypes.shape({
    type: PropTypes.string.isRequired,
    lastFour: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    contact: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  /** Sets the address shown in the carousel to the address with this ID. By default it will show the first address in the `addresses` array */
  selectedShippingAddressId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Records if the user wants to be remembered on this device */
  rememberUser: PropTypes.bool,
  /**
   * Callback for when a profile menu item is clicked
   *
   * |Argument|Type|Description
   * |---|---|---|
   * |val|string|Possible values: signOut
   * | e | object| Synthetic click event object
   * | data | object | Additional data
   */
  onProfileMenuItemClick: PropTypes.func.isRequired,
  /**
   * Callback for when a manage cards menu item is clicked
   *
   * |Argument|Type|Description
   * |---|---|---|
   * |val|string|Possible values: addCard\|switchCard\|removeCard
   * | e | object| Synthetic click event object
   * | data | object | Additional data
   */
  onManageCardsMenuItemClick: PropTypes.func.isRequired,
  /**
   * Callback for when a shipping address menu item is clicked
   *
   * |Argument|Type|Description
   * |---|---|---|
   * |val|string|Possible values: addShippingAddress\|editShippingAddress\|deleteShippingAddress
   * | e | object| Synthetic click event object
   * | data | object | Additional data, {address:{address}}
   */
  onShippingMenuItemClick: PropTypes.func.isRequired,
};

ReviewAndConfirm.defaultProps = {
  addresses: [],
  rememberUser: true,
};

export default ReviewAndConfirm;
