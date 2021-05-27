import PropTypes from "prop-types";

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
});
