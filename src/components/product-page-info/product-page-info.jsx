import React from "react";
import productProp from "../pages/product-page/poduct.prop";
import {formatPrice} from "../../utils";

const ProductPageInfo = (props) => {
  const {product} = props;
  const {title, price, oldPrice, creditStart, options} = product;

  return (
    <>
      <h1 className="product-info__title">{title}</h1>
      <ul className="product-info__options-list">
        {options.map((elem) => (
          <li className={`product-info__options-list-item product-info__options-list-item--${elem.type}`} key={`option-${elem.type}`}>
            {elem.text}
          </li>
        ))}
      </ul>
      <div className="product-info__price-wrapper">
        <div className="product-info__price">{formatPrice(price)}</div>
        <div className="product-info__price product-info__price--old">{formatPrice(oldPrice)}</div>
      </div>
      <div className="product-info__actions">
        <button className="product-info__order-btn btn">Оставить заявку</button>
        <button className="product-info__credit-btn btn btn--light">{`В кредит от ${formatPrice(creditStart)}`}</button>
      </div>
    </>
  );
};

ProductPageInfo.propTypes = {
  product: productProp
};

export default ProductPageInfo;
