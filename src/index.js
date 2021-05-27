import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./store/reducers/root-reducer";
import "./sass/style.scss";
import App from "./components/app/app";

import TimeAgo from "javascript-time-ago";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(ru);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`.app`)
);
