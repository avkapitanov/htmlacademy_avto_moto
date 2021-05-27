import React, {PureComponent} from "react";

const withActiveSlide = (Component) => {
  return class WithActiveSlide extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeSlide: 0,
        maxSlide: 0
      };

      this._handleActiveSlideChange = (evt) => {
        const {activeSlide, maxSlide} = this.state;
        const direction = evt.currentTarget.dataset[`dir`];

        let newValue;
        switch (direction) {
          case `prev`:
            newValue = (activeSlide - 1) < 0 ? 0 : activeSlide - 1;
            break;
          default:
            newValue = (activeSlide + 1) > maxSlide - 1 ? maxSlide : activeSlide + 1;
            break;
        }

        this.setState(
            {activeSlide: newValue}
        );
      };

      this._setMaxSize = (maxSlide) => {
        this.setState(
            {maxSlide}
        );
      };
    }

    render() {
      const {activeSlide} = this.state;

      return <Component
        {...this.props}
        activeSlide={activeSlide}
        onActiveTabChange={this._handleActiveSlideChange}
        onLoadSlider={this._setMaxSize}
      />;
    }
  };
};

export default withActiveSlide;
