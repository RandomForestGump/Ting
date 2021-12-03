import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Paper.module.scss";
import MuiPaper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const Paper = props => {
  const theme = useTheme();
  let {
    backgroundColor = theme.palette.grey[100],
    children,
    action,
    style,
    className,
    ...other
  } = props;

  return (
    <MuiPaper
      className={cx(className, styles.Paper)}
      style={{ ...style, background: backgroundColor }}
      {...other}
    >
      <Container className={styles.Paper__container}>
        <div className={styles.Paper__content}>{children}</div>
        <div className={styles.Paper__action}>{action}</div>
      </Container>
    </MuiPaper>
  );
};

Paper.propTypes = {
  /** Class names for elements of the Paper component */
  className: PropTypes.string,
  /** Optionally set the background color of the paper div */
  backgroundColor: PropTypes.any,
  /** The content of the Paper component */
  children: PropTypes.any.isRequired,
  /** Optionally set an action in this component. Appears in the bottom right of the div */
  action: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.node
  ])
};

export default Paper;
