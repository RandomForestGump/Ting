import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {
  COLOR_SECONDARY,
  COLOR_SECONDARY_CONTRAST,
} from "@dgn-src-ui/config/constants";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import styles from "./ActionMenu.module.scss";

const useStyles = makeStyles({
  MenuList: {
    border: `1px solid ${COLOR_SECONDARY}`,
  },
  MenuListItem: {
    borderColor: COLOR_SECONDARY,
    color: COLOR_SECONDARY,
    p: {
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    "&:hover p,&:focus p": {
      color: COLOR_SECONDARY_CONTRAST,
    },
  },
});

const ActionMenu = (props) => {
  let {
    className,
    label,
    id,
    children,
    onClick: onActionMenuClick,
    dropdownArrow,
    color,
    MenuProps,
    MenuListItemProps,
  } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (value, e, data = {}) => {
    handleClose();
    onActionMenuClick(value, e, data);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    className: MenuListItemClass,
    ...otherListItemProps
  } = MenuListItemProps;

  children = React.Children.toArray(children);

  return (
    <div className={cx(className, styles.ActionMenu)}>
      <Button
        className={styles.ActionMenu__button}
        color={color}
        aria-controls={id}
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        {label}
        {dropdownArrow && (
          <KeyboardArrowDownRoundedIcon
            className={cx(styles.ActionMenu__dropdown_icon, {
              [styles.ActionMenu__dropdown_icon__flipped]: Boolean(anchorEl),
            })}
          />
        )}
      </Button>
      <Menu
        id={id}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={2}
        MenuListProps={{
          disablePadding: true,
          className: classes.MenuList,
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        {...MenuProps}
      >
        {children.map((option, index) => (
          <MenuItem
            className={cx(
              classes.MenuListItem,
              styles.ActionMenu__menu_item,
              MenuListItemClass
            )}
            key={index}
            onClick={(e) =>
              handleMenuItemClick(option.props.value, e, option.props.data)
            }
            {...otherListItemProps}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

ActionMenu.displayName = "Action Menu";

ActionMenu.propTypes = {
  /** Class names to give action menu wrapper */
  className: PropTypes.string,
  /** DOM id property, needed for accessability */
  id: PropTypes.string.isRequired,
  /** What to use as the menu label */
  label: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]),
  /** Holds the menu items */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /** What happens when a menu item is clicked */
  onClick: PropTypes.func,
  /** Whether or not to include the dropdown arrow */
  dropdownArrow: PropTypes.bool,
  /** Set the color of the action menu button/label */
  color: PropTypes.any,
};

ActionMenu.defaultProps = {
  /** Default use the dropdown arrow */
  dropdownArrow: true,
  /** In case they don't need an onclick */
  onClick: () => false,
  /** By Default the button color is secondary */
  color: "secondary",
  MenuListItemProps: {},
};

export default ActionMenu;
