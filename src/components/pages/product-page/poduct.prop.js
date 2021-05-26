import PropTypes from "prop-types";

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  creditStart: PropTypes.number,
  isNewModel: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  characteristics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  images: PropTypes.arrayOf(PropTypes.shape({
    middle: PropTypes.string.isRequired,
    middle2x: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    preview2x: PropTypes.string.isRequired,
  })),
});
