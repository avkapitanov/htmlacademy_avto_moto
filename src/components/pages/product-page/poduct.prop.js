import PropTypes from "prop-types";

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  creditStart: PropTypes.number,
  isNewModel: PropTypes.bool,
  characteristics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  options: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }))
});
