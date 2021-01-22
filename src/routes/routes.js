import React, { Fragment, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import IndexSite from "../composants/IndexSite";
import Error404Site from "../composants/site/pages/Error404Site";

const RoutesSite = (props) => (
  <Fragment>
    <Suspense fallback={"wait"}>
      <Switch>
        <Route exact path="/" component={IndexSite} />
        {/* <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/register" component={withRouter(Register)} />
        <Route exact path="/about/" component={AboutSite} />
        <Route exact path="/faq/" component={withRouter(FaqSite)} />
        <Route exact path="/contact/" component={withRouter(ContactSite)} />*/}
        <Route component={Error404Site} /> 
      </Switch>
    </Suspense>
  </Fragment>
);
export default RoutesSite;
