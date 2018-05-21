import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { Header } from "../components/header";
import { Filter } from "../components/filter";
import { List } from "../containers/list";

import rootReducer from "../store/reducers";

import "./style.scss";

const appStore = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-content">
        <div className="wrapper-content__sidebar">
          <Filter />
        </div>
        <div className="wrapper-content__content">
          <List {...appStore} />
        </div>
      </div>
    </div>
  );
}

render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("app")
);
