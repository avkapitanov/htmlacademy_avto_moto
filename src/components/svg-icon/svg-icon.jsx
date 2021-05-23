import React from "react";
import PropTypes from "prop-types";
import sprite from '../../img/sprite.svg';

const SvgIcon = (props) => {
  const {type, width, height, classes} = props;

  return (
    <svg className={classes} width={width} height={height}>
      <use xlinkHref={`${sprite}#${type}`}></use>
    </svg>
  );
};

SvgIcon.defaultProps = {
  classes: ``
};

SvgIcon.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  classes: PropTypes.string,
};

export default SvgIcon;
