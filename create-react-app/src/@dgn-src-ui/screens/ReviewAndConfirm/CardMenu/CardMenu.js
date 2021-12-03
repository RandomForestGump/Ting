import React from "react";
import PropTypes from "prop-types";
import styles from "./CardMenu.module.scss";
import ActionMenu from "@dgn-src-ui/core/ActionMenu";
import { Link } from "@material-ui/core";

const ManageCardsMenu = ({ id, label, options, ...props }) => {
  return (
    <ActionMenu
      id={id}
      label={label}
      className={styles.ManageCardMenu}
      {...props}
    >
      {options.map(({ href, text, value, ...other }, index) => (
        <Link
          align="center"
          className={styles.ManageCardMenu__item}
          key={index}
          href={href}
          value={value ? value : null}
          underline="none"
          onClick={e => {
            e.preventDefault();
          }}
          {...other}
        >
          <strong>{text}</strong>
        </Link>
      ))}
    </ActionMenu>
  );
};

ManageCardsMenu.propTypes = {
  /** Holds the menu items that will then get wrapped in MenuItem Compnent */
  options: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.array
  ]).isRequired
};

export default ManageCardsMenu;
