import React from "react";
import PropTypes from "prop-types";

const CharacteristicsItem = (props) => {
  const {characteristic} = props;
  const {name, value} = characteristic;

  return (
    <div className="tab-characteristics__item">
      <dt className="tab-characteristics__item-name">{name}</dt>
      <dd className="tab-characteristics__item-value">{value}</dd>
    </div>
  );
};

CharacteristicsItem.propTypes = {
  characteristic: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default CharacteristicsItem;
