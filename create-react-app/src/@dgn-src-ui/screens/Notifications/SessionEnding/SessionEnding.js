import React from "react";
import Typography from "@material-ui/core/Typography";
import CTA from "@dgn-src-ui/core/CTA";
import Button from "@dgn-src-ui/core/Button/Button";
import FullWidthLink from "@dgn-src-ui/core/Link/FullWidthLink/FullWidthLink";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";
import styles from "./SessionEnding.module.scss";
import useIdleTimeout from "@dgn-src-ui/hooks/useIdleTimeout";

const SessionEnding = ({ onCancelClick }) => {
  const { warn, minutes, seconds, resetTimeoutCounter } = useIdleTimeout();

  return (
    <>
      {warn && (
        <div className={styles.Timeout}>
          <NotificationPage heading="Your session is ending in">
            <div className={styles.Timeout__counter}>
              {minutes}:{seconds}
            </div>
            <Typography>
              If your session ends, you'll be logged out and need to start over.
              Would you like continue to your purchase?
            </Typography>
            <CTA>
              <Button onClick={resetTimeoutCounter}>Continue</Button>
              <FullWidthLink onClick={onCancelClick}>
                Cancel and Return to Merchant
              </FullWidthLink>
            </CTA>
          </NotificationPage>
        </div>
      )}
    </>
  );
};

export default SessionEnding;
