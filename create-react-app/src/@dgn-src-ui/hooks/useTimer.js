import React from "react";
import useInterval from "@dgn-src-ui/hooks/useInterval";

const useTimer = (timeout, onTimeout) => {
  const [timeCounter, setTimeCounter] = React.useState(timeout);
  useInterval(
    () => {
      setTimeCounter(timeCounter - 1);
    },
    timeCounter > 0 ? 1000 : null
  );

  let minutes = String(Math.floor(timeCounter / 60));
  let leftoverSeconds = timeCounter % 60;
  let label = minutes > 0 ? "minutes" : "seconds";
  let seconds = String(Math.ceil(leftoverSeconds));
  if (minutes.length === 1) minutes = "0" + minutes;
  if (seconds.length === 1) seconds = "0" + seconds;

  if (timeCounter <= 0) {
    // Throw in an actual JS timeout to pop it to the end of the stack
    // which will allow the screen to render 0:00 first before triggering
    setTimeout(() => {
      onTimeout();
    }, 100);
  }

  return { seconds, minutes, label, timeCounter, setTimeCounter };
};

export default useTimer;
