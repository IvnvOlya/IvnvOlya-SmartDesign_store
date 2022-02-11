import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReduser from "./reducers";
import initialState from "./store/initialState";

const store = createStore(rootReduser, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
