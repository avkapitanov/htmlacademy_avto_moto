import React from "react";
import PropTypes from "prop-types";
import CharacteristicsItem from "../characteristics-item/characteristics-item";

const CharacteristicsList = (props) => {
  const {characteristics} = props;

  if (characteristics.length === 0) {
    return null;
  }

  return (
    <dl className="product-card__tabs-content tab-characteristics">
      {
        characteristics.map((characteristic, i) =>
          <CharacteristicsItem characteristic={characteristic} key={`characteristic-${i}`}/>
        )
      }
    </dl>
  );
};

CharacteristicsList.propTypes = {
  characteristics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};

export default CharacteristicsList;
