import React from "react";
import { Link } from "react-router-dom";

const Error404Site = () => {
  return (
    <div className="container-fluid pdng0 kazougroup-error404-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="error-page">
            <div
              className="bg-image"
              style={{
                backgroundImage: "url(/assets/images/resources/404.jpg)",
              }}
            ></div>
            <div className="error-meta">
              <h1>whoops!</h1>
              <span>we couldn't find that page </span>
              <Link to="/" className="kazougroup-error404-goback">
                <i className="ti-arrow-left kazougroup-error404-left-icon"></i>
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Site;
