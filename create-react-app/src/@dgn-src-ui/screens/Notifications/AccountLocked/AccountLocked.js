import React from "react";
import PropTypes from "prop-types";
import useTimer from "@dgn-src-ui/hooks/useTimer";
import Typography from "@material-ui/core/Typography";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import CardLockedIcon from "@dgn-src-ui/core/Icon/CardIcon/CardLockedIcon";
import CTA from "@dgn-src-ui/core/CTA";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";

const AccountLocked = ({
  timeout,
  convertToSeconds,
  onTimeout,
  onCancelClick,
}) => {
  if (convertToSeconds) timeout *= 60;

  let { seconds, minutes, label } = useTimer(timeout, onTimeout);

  return (
    <NotificationPage
      icon={CardLockedIcon}
      heading="You're temporarily locked out"
    >
      <Typography>
        Several incorrect attempts have been made to access this profile. Please
        try again in {minutes}:{seconds} {label}.
      </Typography>
      <CTA>
        <FullWidthLink onClick={onCancelClick}>
          Cancel and Return to Merchant
        </FullWidthLink>
      </CTA>
    </NotificationPage>
  );
};

AccountLocked.propTypes = {
  /** Timeout value in seconds, or minutes if `convertToSeconds` is true */
  timeout: PropTypes.number,
  /** The time passed in is in minutes and needs to be converted into seconds */
  convertToSeconds: PropTypes.bool,
  /** Callback for when the timer reaches 0:00 */
  onTimeout: PropTypes.func,
};

AccountLocked.defaultProps = {
  timeout: 300,
  convertToSeconds: false,
  onTimeout: () => {},
};

export default AccountLocked;
