import React, {useEffect, useRef} from "react";
import StarRatingInput from "../star-rating-input/star-rating-input";
import {addReviewToProduct} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import withAddReviewForm from "../../hocs/with-add-review-form/with-add-review-form";

const ProductReviewForm = (props) => {
  const {addReviewElement, isVisibleForm, onCloseFormHandler, formValues, onFormChange, touched, setTouched, error, setError} = props;

  if (!isVisibleForm) {
    return null;
  }

  const nameRef = useRef();

  const isRequiredError = (name) => {
    return touched[name] && formValues[name].length === 0;
  };

  const hasErrors = () => {
    for (const [key] of Object.entries(error)) {
      if (error[key] === true) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (hasErrors()) {
      return;
    }

    const {author, dignity, disadvantages, rating, text} = formValues;
    addReviewElement(author, dignity, disadvantages, rating, text, () => {
      evt.currentTarget.reset();
      onCloseFormHandler();
    });
  };

  const handleFocus = (evt) => {
    const {name} = evt.target;
    setTouched(name, true);
  };

  const handleBlur = (evt) => {
    const {name} = evt.target;
    setError(name, isRequiredError(name));
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    onFormChange(name, value);
    setError(name, isRequiredError(name));
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const errorEmptyField = <span className="review-form__group-error review-form__group-error--active">Пожалуйста, заполните поле</span>;

  return (
    <>
      <form className="tab-reviews__form review-form" onSubmit={handleSubmit}>
        <p className="review-form__title">Оставить отзыв</p>
        <button className="review-form__close" type="button" onClick={onCloseFormHandler} aria-label="Закрыть форму"></button>

        <div className="review-form__fields">
          <fieldset className="review-form__fields-set">
            <p className="review-form__group review-form__group--required">
              <label className="review-form__label visually-hidden" htmlFor="review-name">Имя</label>
              {error.author ? errorEmptyField : null }
              <input className={`review-form__input ${error.author ? `review-form__input--error` : ``}`} id="review-name" type="text" placeholder="Имя" ref={nameRef} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} name="author"/>
            </p>
            <p className="review-form__group">
              <label className="review-form__label visually-hidden" htmlFor="review-dignity">Достоинства</label>
              <input className="review-form__input" id="review-dignity" type="text" placeholder="Достоинства" onChange={handleChange} name="dignity"/>
            </p>
            <p className="review-form__group">
              <label className="review-form__label visually-hidden" htmlFor="review-disadvantages">Недостатки</label>
              <input className="review-form__input" id="review-disadvantages" type="text" placeholder="Недостатки" onChange={handleChange} name="disadvantages"/>
            </p>
          </fieldset>

          <fieldset className="review-form__fields-set review-form__fields-set--right">
            <StarRatingInput onChangeHandler={handleChange}/>

            <p className="review-form__group review-form__group--required review-form__group--text">
              <span className="review-form__group-error">Пожалуйста, заполните поле</span>
              <label className="review-form__label visually-hidden" htmlFor="review-text">Комментарий</label>
              {error.text ? errorEmptyField : null }
              <textarea className={`review-form__textarea ${error.text ? `review-form__textarea--error` : ``}`} id="review-text" placeholder="Комментарий" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} name="text"></textarea>
            </p>
          </fieldset>
        </div>

        <button className="review-form__submit-btn btn" type="submit">Оставить отзыв</button>
      </form>
      <div className="tab-reviews__overlay" onClick={onCloseFormHandler}></div>
    </>
  );
};

ProductReviewForm.propTypes = {
  addReviewElement: PropTypes.func.isRequired,
  onCloseFormHandler: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  isVisibleForm: PropTypes.bool.isRequired,
  formValues: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  setTouched: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addReviewElement(author, dignity, disadvantages, rating, text, callback) {
    dispatch(addReviewToProduct(author, dignity, disadvantages, rating, text, new Date(), callback));
  },
});

export default connect(null, mapDispatchToProps)(withAddReviewForm(ProductReviewForm));
