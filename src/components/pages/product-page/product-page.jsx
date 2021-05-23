import React, {useEffect} from "react";
import MainHeader from "../../main-header/main-header";
import MainFooter from "../../main-footer/main-footer";
import ProductPageContainer from "../../product-page-container/product-page-container";
import {getProduct} from "../../../store/selectors";
import {connect} from "react-redux";
import {fetchProduct, fetchReviews} from "../../../store/api-actions";
import PropTypes from "prop-types";
import productProp from "./poduct.prop";

const ProductPage = (props) => {
  const {getProductById, getReviewsForProduct, product} = props;

  useEffect(() => {
    getProductById();
    getReviewsForProduct();
  }, []);

  if (!product) {
    return null;
  }

  return (
    <>
      <MainHeader/>
      <ProductPageContainer product={product}/>
      <MainFooter/>
    </>
  );
};

ProductPage.propTypes = {
  getProductById: PropTypes.func.isRequired,
  getReviewsForProduct: PropTypes.func.isRequired,
  product: productProp
};

const mapStateToProps = (state) => ({
  product: getProduct(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProductById() {
    dispatch(fetchProduct());
  },
  getReviewsForProduct() {
    dispatch(fetchReviews());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
