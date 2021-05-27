import React from "react";
import CharacteristicsList from "../characteristics-list/characteristics-list";
import {ProductTab} from "../../constants";
import ProductPageTabsNav from "../product-page-tabs-nav/product-page-tabs-nav";
import ProductReviewsList from "../product-reviews-list/product-reviews-list";
import ProductContacts from "../product-contacts/product-contacts";
import PropTypes from "prop-types";
import characteristicsProp from "../pages/product-page/characteristics.prop";
import withProductPageTabs from "../../hocs/with-active-tab/with-active-tab";

const ProductPageTabs = (props) => {
  const {tabs, activeTab, characteristics, onActiveTabChange} = props;

  let tabContent;
  switch (activeTab) {
    case ProductTab.CHARACTERISTICS:
      tabContent = <CharacteristicsList characteristics={characteristics}/>;
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
      <ProductPageTabsNav tabs={tabs} activeTab={activeTab} onActiveTabChange={onActiveTabChange}/>
      {tabContent}
    </div>
  );
};

ProductPageTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  characteristics: PropTypes.arrayOf(characteristicsProp),
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired
};

export default withProductPageTabs(ProductPageTabs);
