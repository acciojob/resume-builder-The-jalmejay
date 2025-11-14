import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store/store";
import { Provider } from "react-redux";
import 'regenerator-runtime/runtime';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// clears local storage when Cypress test runner loads the app
if (window.Cypress) {
  localStorage.clear();
}
