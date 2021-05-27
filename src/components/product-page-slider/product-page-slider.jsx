import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {ReactComponent as NoPhoto} from "../../img/no-photo.svg";
import {ReactComponent as Arrow} from "../../img/icon-slider-arrow.svg";
import withActiveSlide from "../../hocs/with-active-slide/with-active-slide";

const ProductPageSlider = (props) => {
  const {images, title, isNewModel, activeSlide, onActiveTabChange, onLoadSlider} = props;
  const maxSlide = images.length - 1;

  useEffect(() => {
    onLoadSlider(maxSlide);
  }, []);

  if (images.length === 0) {
    return (
      <div className="product-card__slider product-card__slider--empty">
        <NoPhoto/>
      </div>
    );
  }

  const isPrevBtnDisabled = activeSlide === 0;
  const isNextBtnDisabled = activeSlide === maxSlide;

  const newLabel = isNewModel ? <span className="product-card__slider-sticker">New Model</span> : null;

  return (
    <div className="product-card__slider">
      {newLabel}
      <ul className="product-card__slider-list slider-list">
        {images.map((image, i) => (
          <li className={`slider-list__item ${activeSlide === i ? `slider-list__item--active` : ``}`} key={`product-slider-${image.middle}`}>
            <img className="slider-list__image" src={image.middle} srcSet={`${image.middle2x} 2x`} width="600" height="375" alt={`Фото товара ${title} ${(i + 1)}`} />
          </li>
        ))}
      </ul>

      <div className="product-card__slider-nav-wrapper">
        <button className="product-card__slider-btn btn-slider-nav" onClick={onActiveTabChange} data-dir="prev" disabled={isPrevBtnDisabled} aria-label="Предыдущий слайд">
          <Arrow className={`btn-slider-nav__icon btn-slider-nav__icon--prev ${isPrevBtnDisabled ? `btn-slider-nav__icon--disabled` : ``}`}/>
        </button>
        <ul className="product-card__slider-nav slider-nav-list">
          {images.map((image, i) => (
            <li className="slider-nav-list__item" key={`product-slider-nav-${image.preview}`}>
              <img className="slider-nav-list__image" src={image.preview} srcSet={`${image.preview2x} 2x`} width="128" height="80" alt={`Превью фото товара ${title} ${(i + 1)}`} />
            </li>
          ))}
        </ul>
        <button className="product-card__slider-btn btn-slider-nav" onClick={onActiveTabChange} data-dir="next" disabled={isNextBtnDisabled} aria-label="Следующий слайд">
          <Arrow className={`btn-slider-nav__icon btn-slider-nav__icon--next ${isNextBtnDisabled ? `btn-slider-nav__icon--disabled` : ``}`}/>
        </button>
      </div>
    </div>
  );
}
;

ProductPageSlider.propTypes =
  {
    activeSlide: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isNewModel: PropTypes.bool,
    onActiveTabChange: PropTypes.func.isRequired,
    onLoadSlider: PropTypes.func.isRequired,
    images:
      PropTypes.arrayOf(PropTypes.shape({
        middle: PropTypes.string.isRequired,
        middle2x: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        preview2x: PropTypes.string.isRequired,
      }))
  }
;

export default withActiveSlide(ProductPageSlider);
