import React, {PureComponent} from "react";

const withModalForm = (Component) => {
  return class WithModalForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isVisibleForm: false
      };

      this._handleModalVisibility = (value) => {
        this.setState(
            {isVisibleForm: value}
        );
      };
    }

    render() {
      const {isVisibleForm} = this.state;

      return <Component
        {...this.props}
        isVisibleForm={isVisibleForm}
        onModalVisibilityChange={this._handleModalVisibility}
      />;
    }
  };
};

export default withModalForm;
