import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";

const MaskedTextField = ({ inputRef, ...other }) => {
  return (
    <MaskedInput
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      {...other}
      showMask
    />
  );
};

MaskedTextField.displayName = "Masked Text Field";

MaskedTextField.propTypes = {
  /** Mask pattern */
  mask: PropTypes.array.isRequired,
  /** Mask guides (filling characters)*/
  guide: PropTypes.bool,
  /** Bump pre-existing characters or overwrite them */
  keepCharPositions: PropTypes.bool,
  /** Placeholder character when character spot is empty. Guide must be true */
  placeholderChar: PropTypes.string
};

MaskedTextField.defaultProps = {
  guide: false,
  keepCharPositions: false
};

export default MaskedTextField;
