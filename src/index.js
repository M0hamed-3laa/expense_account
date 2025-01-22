import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as R } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>

      <R>
        <App />
      </R>
  </React.StrictMode>
);
