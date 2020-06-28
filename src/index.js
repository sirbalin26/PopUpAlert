import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

const PressBtn = () => {
  let btn;
  if (confirm("Adaugat!")) {
    btn = "Ok";
  } else {
    btn = "Anuleaza";
  }
  document.getElementById("root").innerHTML = btn;
};
