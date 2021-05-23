import React from "react";
import productProp from "../pages/product-page/poduct.prop";
import {formatPrice} from "../../utils";

const ProductPageInfo = (props) => {
  const {product} = props;
  const {title, price, oldPrice, creditStart} = product;

  return (
    <>
      <h1 className="product-info__title">{title}</h1>
      <div className="product-info__price-wrapper">
        <div className="product-info__price">{formatPrice(price)}</div>
        <div className="product-info__price product-info__price--old">{formatPrice(oldPrice)}</div>
      </div>
      <button className="product-info__order-btn btn">Оставить заявку</button>
      <button className="product-info__credit-btn btn btn--light">{`В кредит от ${formatPrice(creditStart)}`}</button>
    </>
  );
};

ProductPageInfo.propTypes = {
  product: productProp
};

export default ProductPageInfo;
