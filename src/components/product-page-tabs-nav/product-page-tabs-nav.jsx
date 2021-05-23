import React from "react";
import PropTypes from "prop-types";

import ProductPageTabsNavItem from "../product-page-tabs-nav-item/product-page-tabs-nav-item";

const ProductPageTabsNav = (props) => {
  const {tabs, activeTab, onActiveTabChange} = props;

  return (
    <nav className="product-card__tabs-nav tabs-nav">
      <ul className="tabs-nav__list">
        {
          tabs.map((tab) =>
            <ProductPageTabsNavItem
              key={tab}
              isActive={activeTab === tab}
              onActiveTabChange={(evt) => {
                evt.preventDefault();
                onActiveTabChange(tab);
              }}
              tabName={tab}
            />
          )
        }
      </ul>
    </nav>
  );
};

ProductPageTabsNav.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
};

export default ProductPageTabsNav;
