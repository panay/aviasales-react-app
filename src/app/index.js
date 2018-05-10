import React from "react";
import { render } from "react-dom";

import { Header } from "../header";
import { Filter } from "../filter";
import { List } from "../list";

import "./style.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-content">
        <div className="wrapper-content__sidebar">
          <Filter />
        </div>
        <div className="wrapper-content__content">
          <List />
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("app"));
