import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./_kazougroup.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RoutesSite from "./routes/routes";
import "./i18next";

ReactDOM.render(
  <React.StrictMode>
    <Suspense>
      <BrowserRouter>
        <Route component={RoutesSite} />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("kazougroup")
);
