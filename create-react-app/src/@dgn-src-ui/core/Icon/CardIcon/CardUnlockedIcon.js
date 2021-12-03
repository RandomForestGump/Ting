import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import styles from "../Icon.module.scss";

const CardUnlockedIcon = props => {
  let { className, ...other } = props;
  return (
    <Icon
      className={cx(className, styles.Icon__Card, styles.Icon__Card__Unlocked)}
      {...other}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="65"
        viewBox="0 0 65 65"
      >
        <g fill="white" fillRule="evenodd">
          <path fill="#FFF" d="M0 0h65v65H0z" />
          <g stroke="#041E42">
            <path d="M41.761 47.5L58.5 26.823V14a3.5 3.5 0 0 0-3.5-3.5H5A3.5 3.5 0 0 0 1.5 14v30A3.5 3.5 0 0 0 5 47.5h36.761zM9 22.5h6a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 29v-4A2.5 2.5 0 0 1 9 22.5z" />
            <path strokeLinecap="square" d="M22.5 27h18" />
          </g>
          <g stroke="#1A587E" transform="translate(41 24)">
            <path d="M4.516 7.5h3.011A4.5 4.5 0 0 1 16.5 8v4.5h3V8a7.5 7.5 0 0 0-14.984-.5z" />
            <rect width="23" height="19" x=".5" y="12.5" rx="4" />
            <path
              strokeLinejoin="round"
              d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-.25v4.5"
            />
          </g>
        </g>
      </svg>
    </Icon>
  );
};

export default CardUnlockedIcon;
