import React, {useState} from "react";
import reviewsProp from "../pages/product-page/reviews.prop";
import ProductReviewItem from "../product-review-item/product-review-item";
import {getReviews} from "../../store/selectors";
import {connect} from "react-redux";
import ProductReviewForm from "../product-review-form/product-review-form";
import {KEY_CODE_FOR_CLOSE_POPUP} from "../../constants";

const ProductReviewsList = (props) => {
  const {reviews} = props;
  const lockClass = `body--lock`;

  const [isVisibleForm, setVisibleForm] = useState(false);

  const body = document.querySelector(`body`);

  const getBodyScrollTop = () => {
    return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
  };

  const existVerticalScroll = () => {
    return document.body.offsetHeight > window.innerHeight;
  };

  const showAddReviewForm = () => {
    setVisibleForm(true);
    window.addEventListener(`keydown`, closeFormByEsc);
    body.dataset.scrollY = getBodyScrollTop();

    if (existVerticalScroll()) {
      body.classList.add(lockClass);
      body.style.top = `-${body.dataset.scrollY}px`;
    }
  };

  const closeFormByEsc = (evt) => {
    if (evt.keyCode === KEY_CODE_FOR_CLOSE_POPUP) {
      evt.preventDefault();
      closeAddReviewForm();
    }
  };

  const closeAddReviewForm = () => {
    setVisibleForm(false);
    window.removeEventListener(`keydown`, closeFormByEsc);

    if (existVerticalScroll()) {
      body.classList.remove(lockClass);
      window.scrollTo(0, body.dataset.scrollY);
    }
  };

  return (
    <>
      <div className="product-card__tabs-content tab-reviews">
        <button className="tab-reviews__btn btn btn--light" onClick={showAddReviewForm}>Оставить отзыв</button>
        {
          reviews.map((review) =>
            <ProductReviewItem review={review} key={review.id}/>
          )
        }
      </div>
      <ProductReviewForm isVisibleForm={isVisibleForm} onCloseFormHandler={closeAddReviewForm}/>
    </>
  );
};

ProductReviewsList.propTypes = {
  reviews: reviewsProp
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

export default connect(mapStateToProps)(ProductReviewsList);
