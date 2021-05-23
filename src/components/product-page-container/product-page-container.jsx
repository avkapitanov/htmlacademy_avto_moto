import React from "react";
import ProductPageSlider from "../product-page-slider/product-page-slider";
import ProductPageTabs from "../product-page-tabs/product-page-tabs";
import {ProductTab} from "../../constants";
import productProp from "../pages/product-page/poduct.prop";
import ProductPageInfo from "../product-page-info/product-page-info";

const ProductPageContainer = (props) => {
  const {product} = props;
  const {images, title, isNewModel} = product;

  return (
    <main className="app__content">
      <section className="product-card container">
        <div className="product-card__info">
          <div className="product-card__left">
            <ProductPageSlider images={images} title={title} isNewModel={isNewModel}/>
          </div>
          <div className="product-card__right product-info">
            <ProductPageInfo product={product}/>
          </div>
        </div>
        <ProductPageTabs tabs={Object.values(ProductTab)} product={product}/>
      </section>
    </main>
  );
};

ProductPageContainer.propTypes = {
  product: productProp
};

export default ProductPageContainer;
