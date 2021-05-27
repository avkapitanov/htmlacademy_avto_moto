import React from "react";
import characteristicsProp from "../pages/product-page/characteristics.prop";

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
  characteristic: characteristicsProp
};

export default CharacteristicsItem;
