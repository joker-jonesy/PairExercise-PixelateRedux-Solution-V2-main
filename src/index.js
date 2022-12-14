import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.js";
import App from "./components/App.js";

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
