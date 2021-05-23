import React from "react";
import ProductPage from "../pages/product-page/product-page";
import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
