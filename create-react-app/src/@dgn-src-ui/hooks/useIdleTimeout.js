import React from "react";
import useTimer from "@dgn-src-ui/hooks/useTimer";
import useConfig from "./useConfig";

const useIdleTimeout = () => {
  const { session, screen } = useConfig();
  const onTimeout = session.timeout.onTimeout;
  const secondsBeforeWarning = session.timeout.secondsBeforeWarning;
  const secondsBeforeTimeout = session.timeout.secondsBeforeTimeout;
  const [warn, setWarning] = React.useState(false);

  let {
    seconds,
    minutes,
    timeCounter: timeoutCounter,
    setTimeCounter: setTimeoutCounter,
  } = useTimer(secondsBeforeTimeout, onTimeout);

  if (!warn && secondsBeforeTimeout - timeoutCounter > secondsBeforeWarning) {
    setWarning(true);
  }

  React.useEffect(() => {
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
    ];

    let reset;
    if (!warn) {
      reset = () => {
        setWarning(false);
        setTimeoutCounter(secondsBeforeTimeout);
      };
      for (let i in events) {
        window.addEventListener(events[i], reset);
      }
    }
    return () => {
      for (let i in events) {
        window.removeEventListener(events[i], reset);
      }
    };
  }, [warn, setWarning, setTimeoutCounter, secondsBeforeTimeout]);

  const resetTimeoutCounter = () => {
    setWarning(false);
    setTimeoutCounter(secondsBeforeTimeout);
  };

  return {
    warn,
    minutes,
    seconds,
    timeoutCounter,
    resetTimeoutCounter,
  };
};

export default useIdleTimeout;
