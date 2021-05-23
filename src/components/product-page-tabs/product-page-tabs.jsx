import React, {useState} from "react";
import CharacteristicsList from "../characteristics-list/characteristics-list";
import {DEFAULT_PRODUCT_ACTIVE_TAB, ProductTab} from "../../constants";
import ProductPageTabsNav from "../product-page-tabs-nav/product-page-tabs-nav";
import ProductReviewsList from "../product-reviews-list/product-reviews-list";
import ProductContacts from "../product-contacts/product-contacts";
import PropTypes from "prop-types";
import productProp from "../pages/product-page/poduct.prop";

const ProductPageTabs = (props) => {
  const [activeTab, setActiveTab] = useState(DEFAULT_PRODUCT_ACTIVE_TAB);
  const {tabs, product} = props;

  let tabContent;
  switch (activeTab) {
    case ProductTab.CHARACTERISTICS:
      tabContent = <CharacteristicsList characteristics={product.characteristics}/>;
      break;
    case ProductTab.REVIEWS:
      tabContent = <ProductReviewsList/>;
      break;
    case ProductTab.CONTACTS:
      tabContent = <ProductContacts/>;
      break;
  }

  return (
    <div className="product-card__tabs">
      <ProductPageTabsNav tabs={tabs} activeTab={activeTab} onActiveTabChange={setActiveTab}/>
      {tabContent}
    </div>
  );
};

ProductPageTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  product: productProp
};
export default ProductPageTabs;
