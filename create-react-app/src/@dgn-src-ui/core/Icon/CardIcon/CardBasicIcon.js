import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import styles from "../Icon.module.scss";

const CardBasicIcon = (props) => {
  let {className, ...other} = props;
  return (
      <Icon className={cx(className, styles.Icon__Card, styles.Icon__Card__Basic)} {...other}>
        <svg 
            viewBox="0 0 58 38" 
            width="58"
            height="38"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" stroke="#041e42">
                <path d="m4 .5a3.5 3.5 0 0 0 -3.5 3.5v30a3.5 3.5 0 0 0 3.5 3.5h50a3.5 3.5 0 0 0 3.5-3.5v-30a3.5 3.5 0 0 0 -3.5-3.5zm4 12h6a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1 -2.5 2.5h-6a2.5 2.5 0 0 1 -2.5-2.5v-4a2.5 2.5 0 0 1 2.5-2.5z"/>
                <path d="m21.5 17h18" strokeLinecap="square"/>
            </g>
        </svg>
      </Icon>
  );
};

export default CardBasicIcon;

