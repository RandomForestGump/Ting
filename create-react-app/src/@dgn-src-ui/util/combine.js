import React from "react";
import isObject from "@dgn-src-ui/util/isObject";

export default (combine = [], seperator = <br />) => {
  let lines = isObject(combine) ? Object.values(combine) : combine;
  return (
    <>
      {Object.values(lines)
        .map((line, index) => <span key={`combined-${index}`}>{line}</span>)
        .reduce(
          (acc, x, index) =>
            acc === null
              ? [x]
              : [acc, <span key={`seperator-${index}`}>{seperator}</span>, x],
          null
        )}
    </>
  );
};
