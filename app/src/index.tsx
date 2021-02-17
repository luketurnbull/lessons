import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import "./index.css";
import App from "./App";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
