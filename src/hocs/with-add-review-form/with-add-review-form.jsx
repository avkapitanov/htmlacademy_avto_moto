import React, {PureComponent} from "react";
import {DEFAULT_RATING_VALUE_IN_FORM} from "../../constants";

const withAddReviewForm = (Component) => {
  return class WithAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        fields: {
          author: ``,
          dignity: ``,
          disadvantages: ``,
          text: ``,
          rating: DEFAULT_RATING_VALUE_IN_FORM
        },
        touched: {
          author: false,
          text: false
        },
        error: {
          author: false,
          text: false
        }
      };

      this._handleFieldChange = (name, value) => {
        const {fields} = this.state;
        const newFields = Object.assign({}, fields);
        newFields[name] = value;
        this.setState({fields: newFields});
      };

      this._setTouched = (name, value) => {
        const {touched} = this.state;
        const newTouched = Object.assign({}, touched);
        newTouched[name] = value;
        this.setState({touched: newTouched});
      };

      this._setError = (name, value) => {
        const {error} = this.state;
        const newError = Object.assign({}, error);
        newError[name] = value;
        this.setState({error: newError});
      };
    }

    render() {
      return <Component
        {...this.props}
        formValues = {this.state.fields}
        touched = {this.state.touched}
        error = {this.state.error}
        onFormChange={this._handleFieldChange}
        setTouched={this._setTouched}
        setError={this._setError}
      />;
    }
  };
};

export default withAddReviewForm;
