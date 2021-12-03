import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import useLocale from "@dgn-src-ui/hooks/useLocale";
import FormHelperText from "@material-ui/core/FormHelperText";
import CardMUI from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import styles from "./Card.module.scss";

/**
 * Card Section
 *
 *
 * @param {*} props
 * @returns React Fragment
 */
const Card = (props) => {
  const { errors } = useFormContext();
  const { __ } = useLocale();

  let { children, className, title, action, fieldName, ...other } = props;

  return (
    <>
      <CardMUI
        raised={true}
        className={cx(
          className,
          styles.card,
          !title && !action && styles.card__noTitle,
          errors[fieldName] && styles.card__invalid
        )}
        elevation={8}
        {...other}
      >
        {(title || action) && (
          <CardHeader
            title={title}
            titleTypographyProps={{ variant: "overline" }}
            action={action}
          />
        )}
        <CardContent className={styles.card__content}>{children}</CardContent>
      </CardMUI>
      {errors[fieldName] && (
        <FormHelperText className={styles.card__validationText}>
          {__({
            ...errors[fieldName],
            key: `errors.fields.${errors[fieldName]?.message?.key}`,
          })}
        </FormHelperText>
      )}
    </>
  );
};

Card.propTypes = {
  /** Class names to give input wrapper */
  className: PropTypes.string,
  /** Title to appear in the CardHeader */
  title: PropTypes.string,
  /** Action Component to appear in the CardHeader */
  action: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.node,
  ]),
  /** Name of a the field that triggers card validation */
  fieldName: PropTypes.string,
};

export default Card;
