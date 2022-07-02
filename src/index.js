import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root/Root";

// ReactDOM.render(<Root></Root>, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
