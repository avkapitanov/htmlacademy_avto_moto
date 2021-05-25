import React from "react";
import reviewProp from "../pages/product-page/review.prop";
import StarRating from "../star-rating/star-rating";
import ReactTimeAgo from "react-time-ago";

const ProductReviewItem = (props) => {
  const {review} = props;
  const {author, date, rating, dignity, disadvantages, text} = review;

  const dignityBlock = dignity ? <div className="product-review__text-block">
    <div className="product-review__text-block-title review-section-title review-section-title--dignity">Достоинства</div>
    <p className="product-review__text-block-content">{dignity}</p>
  </div> : null;

  const disadvantagesBlock = disadvantages ? <div className="product-review__text-block">
    <div className="product-review__text-block-title review-section-title review-section-title--disadvantages">Недостатки</div>
    <p className="product-review__text-block-content">{disadvantages}</p>
  </div> : null;

  return (
    <blockquote className="tab-reviews__item product-review">
      <cite className="product-review__author">{author}</cite>
      {dignityBlock}
      {disadvantagesBlock}
      <div className="product-review__text-block">
        <div className="product-review__text-block-title review-section-title">Комментарий</div>
        <p className="product-review__text-block-content product-review__text-block-content--text">{text}</p>
      </div>
      <StarRating rating={rating} />
      <ReactTimeAgo className="product-review__date" date={date}/>
      <button className="product-review__reply">Ответить</button>
    </blockquote>
  );
};

ProductReviewItem.propTypes = {
  review: reviewProp
};

export default ProductReviewItem;
