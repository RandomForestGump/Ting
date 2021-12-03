import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import styles from "../Icon.module.scss";

const CardErrorIcon = (props) => {
    let {className, ...other} = props;
  return (
      <Icon className={cx(className, styles.Icon__Card, styles.Icon__Card__Error)} {...other}>
        <svg 
            viewBox="0 0 65 65" 
            width="65"
            height="65"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="white" fillRule="evenodd">
                <path d="m0 0h65v65h-65z" fill="#fff"/>
                <g stroke="#041e42">
                    <path d="m31.446 47.5 27.054-5.903v-27.597a3.5 3.5 0 0 0 -3.5-3.5h-50a3.5 3.5 0 0 0 -3.5 3.5v30a3.5 3.5 0 0 0 3.5 3.5zm-22.446-25h6a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1 -2.5 2.5h-6a2.5 2.5 0 0 1 -2.5-2.5v-4a2.5 2.5 0 0 1 2.5-2.5z"/>
                    <path d="m22.5 27h18" strokeLinecap="square"/>
                </g>
                <g stroke="#ff1610">
                    <path d="m48.03 23.447 16.195 28.961c.512.917.291 2.133-.517 2.745-.297.225-.65.347-1.013.347h-32.39c-1.015 0-1.805-.92-1.805-2.019 0-.379.095-.75.275-1.073l16.195-28.961c.537-.961 1.69-1.246 2.544-.6.208.158.384.363.516.6z"/>
                    <path d="m47.015 47c.852 0 1.544.867 1.544 1.935 0 1.07-.692 1.936-1.544 1.936-.853 0-1.544-.867-1.544-1.936 0-1.068.69-1.935 1.544-1.935zm0-11.613a1.445 1.445 0 0 1 1.441 1.54l-.453 6.826a.99.99 0 0 1 -1.976 0l-.454-6.825a1.445 1.445 0 0 1 1.442-1.54z"/>
                </g>
            </g>
        </svg>
      </Icon>
  );
};

export default CardErrorIcon;

