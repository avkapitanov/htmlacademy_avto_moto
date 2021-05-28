import React, {PureComponent} from "react";
import {DEFAULT_RATING_VALUE_IN_FORM} from "../../constants";

const defaultFieldsState = {
  author: ``,
  dignity: ``,
  disadvantages: ``,
  text: ``,
  rating: DEFAULT_RATING_VALUE_IN_FORM
};

const withAddReviewForm = (Component) => {
  return class WithAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        fields: defaultFieldsState,
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

      this._setError = (newError) => {
        this.setState({error: newError});
      };

      this._resetFormValues = () => {
        this.setState({fields: defaultFieldsState});
      };
    }

    render() {
      return <Component
        {...this.props}
        formValues = {this.state.fields}
        error = {this.state.error}
        onFormChange={this._handleFieldChange}
        setError={this._setError}
        onFormSubmit={this._resetFormValues}
      />;
    }
  };
};

export default withAddReviewForm;
