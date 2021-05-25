import React, {useState} from "react";
import PropTypes from "prop-types";
import {ReactComponent as NoPhoto} from "../../img/no-photo.svg";
import {ReactComponent as Arrow} from "../../img/icon-slider-arrow.svg";

const ProductPageSlider = (props) => {
  const {images, title, isNewModel} = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const maxSlide = images.length - 1;

  if (images.length === 0) {
    return (
      <div className="product-card__slider product-card__slider--empty">
        <NoPhoto/>
      </div>
    );
  }

  const isPrevBtnDisabled = activeSlide === 0;
  const isNextBtnDisabled = activeSlide === maxSlide;

  const changeActiveSlide = (evt) => {
    const direction = evt.currentTarget.dataset[`dir`];
    switch (direction) {
      case `prev`:
        const preValue = (activeSlide - 1) < 0 ? 0 : activeSlide - 1;
        setActiveSlide(preValue);
        break;
      case `next`:
        const nextValue = (activeSlide + 1) > maxSlide - 1 ? maxSlide : activeSlide + 1;
        setActiveSlide(nextValue);
        break;
    }
  };

  const newLabel = isNewModel ? <span className="product-card__slider-sticker">New Model</span> : null;

  return (
    <div className="product-card__slider">
      {newLabel}
      <ul className="product-card__slider-list slider-list">
        {images.map((image, i) => (
          <li className={`slider-list__item ${activeSlide === i ? `slider-list__item--active` : ``}`} key={`product-slider-${i}`}>
            <img className="slider-list__image" src={image.middle} srcSet={`${image.middle2x} 2x`} width="600" height="375" alt={`Фото товара ${title} ${(i + 1)}`} />
          </li>
        ))}
      </ul>

      <div className="product-card__slider-nav-wrapper">
        <button className="product-card__slider-btn btn-slider-nav" onClick={changeActiveSlide} data-dir="prev" disabled={isPrevBtnDisabled} aria-label="Предыдущий слайд">
          <Arrow className={`btn-slider-nav__icon btn-slider-nav__icon--prev ${isPrevBtnDisabled ? `btn-slider-nav__icon--disabled` : ``}`}/>
        </button>
        <ul className="product-card__slider-nav slider-nav-list">
          {images.map((image, i) => (
            <li className="slider-nav-list__item" key={`product-slider-nav-${i}`}>
              <img className="slider-nav-list__image" src={image.preview} srcSet={`${image.preview2x} 2x`} width="128" height="80" alt={`Превью фото товара ${title} ${(i + 1)}`} />
            </li>
          ))}
        </ul>
        <button className="product-card__slider-btn btn-slider-nav" onClick={changeActiveSlide} data-dir="next" disabled={isNextBtnDisabled} aria-label="Следующий слайд">
          <Arrow className={`btn-slider-nav__icon btn-slider-nav__icon--next ${isNextBtnDisabled ? `btn-slider-nav__icon--disabled` : ``}`}/>
        </button>
      </div>
    </div>
  );
}
;

ProductPageSlider.propTypes =
  {
    activeSlide: PropTypes.number,
    title: PropTypes.string.isRequired,
    isNewModel: PropTypes.bool,
    images:
      PropTypes.arrayOf(PropTypes.shape({
        middle: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
      }))
  }
;

export default ProductPageSlider;
