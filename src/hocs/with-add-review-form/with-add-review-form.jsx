import React, {PureComponent} from "react";
import {DEFAULT_RATING_VALUE_IN_FORM} from "../../constants";

const withAddReviewForm = (Component) => {
  return class WithAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        author: ``,
        dignity: ``,
        disadvantages: ``,
        text: ``,
        rating: DEFAULT_RATING_VALUE_IN_FORM
      };

      this._handleFieldChange = (name, value) => {
        this.setState({[name]: value});
      };
    }

    render() {
      return <Component
        {...this.props}
        formValues = {this.state}
        onFormChange={this._handleFieldChange}
      />;
    }
  };
};

export default withAddReviewForm;
