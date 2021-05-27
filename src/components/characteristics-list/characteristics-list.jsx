import React from "react";
import PropTypes from "prop-types";
import CharacteristicsItem from "../characteristics-item/characteristics-item";
import characteristicsProp from "../pages/product-page/characteristics.prop";

const CharacteristicsList = (props) => {
  const {characteristics} = props;

  if (characteristics.length === 0) {
    return null;
  }

  return (
    <dl className="product-card__tabs-content tab-characteristics">
      {
        characteristics.map((characteristic) =>
          <CharacteristicsItem characteristic={characteristic} key={`characteristic-${characteristic.name}`}/>
        )
      }
    </dl>
  );
};

CharacteristicsList.propTypes = {
  characteristics: PropTypes.arrayOf(characteristicsProp)
};

export default CharacteristicsList;
