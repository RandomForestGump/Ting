import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import styles from "./IconList.module.scss";

const IconItem = (Item, itemId) => {
  // Allows us to add a class to the component
  let { className, ...other } = Item.props;
  className = cx(className, styles.IconList__item);
  const props = {
    className,
    ...other
  };
  return (
    <Grid item className={styles.IconList__container} key={itemId}>
      {React.cloneElement(Item, props)}
    </Grid>
  );
};

const IconList = props => {
  let { className, size, ...other } = props;
  return (
    <Grid container className={cx(className, styles.IconList)} {...other}>
      {props.children.map((child, index) => IconItem(child, index))}
    </Grid>
  );
};

IconList.propTypes = {
  /** Holds icons */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default IconList;
