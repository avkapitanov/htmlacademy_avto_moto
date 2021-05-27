import React from "react";
import reviewProp from "../pages/product-page/review.prop";
import StarRating from "../star-rating/star-rating";
import ReactTimeAgo from "react-time-ago";

const getProductReviewTextBlock = (type, title, text) => {
  return (
    <div className="product-review__text-block">
      <div className={`product-review__text-block-title review-section-title review-section-title--${type}`}>{title}</div>
      <p className="product-review__text-block-content">{text}</p>
    </div>
  );
};

const ProductReviewItem = (props) => {
  const {review} = props;
  const {author, date, rating, dignity, disadvantages, text} = review;

  const dignityBlock = dignity ? getProductReviewTextBlock(`dignity`, `Достоинства`, dignity) : null;

  const disadvantagesBlock = disadvantages ? getProductReviewTextBlock(`disadvantages`, `Недостатки`, disadvantages) : null;

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
