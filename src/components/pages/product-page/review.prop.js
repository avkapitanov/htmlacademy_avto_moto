import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  dignity: PropTypes.string,
  disadvantages: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number,
  date: PropTypes.object,
});
