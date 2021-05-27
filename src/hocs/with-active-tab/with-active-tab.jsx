import React, {PureComponent} from "react";
import {DEFAULT_PRODUCT_ACTIVE_TAB} from "../../constants";

const withProductPageTabs = (Component) => {
  return class WithProductPageTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: DEFAULT_PRODUCT_ACTIVE_TAB
      };

      this._handleActiveTabChange = (selectedTab) => {
        this.setState(
            {activeTab: selectedTab}
        );
      };
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        activeTab={activeTab}
        onActiveTabChange={this._handleActiveTabChange}
      />;
    }
  };
};

export default withProductPageTabs;
