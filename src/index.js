import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthConstextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthConstextProvider>
    <App />
  </AuthConstextProvider>,
  document.getElementById("root")
);
