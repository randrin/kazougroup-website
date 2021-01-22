import React from "react";
import ReactDOM from "react-dom";
import "./_kazougroup.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RoutesSite from "./routes/routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={RoutesSite} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("kazougroup")
);
