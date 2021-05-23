import React from "react";
import PropTypes from "prop-types";

const ProductPageTabsNavItem = (props) => {
  const {isActive, onActiveTabChange, tabName} = props;

  return (
    <li className={`tabs-nav__item ${isActive ? `tabs-nav__item--active` : ``}`}>
      <a href="#" className="tabs-nav__item-link" onClick={onActiveTabChange}>{tabName}</a>
    </li>
  );
};

ProductPageTabsNavItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  tabName: PropTypes.string.isRequired
};

export default ProductPageTabsNavItem;
