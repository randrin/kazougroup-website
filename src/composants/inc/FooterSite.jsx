import React, { useState } from "react";
import { Link } from "react-router-dom";

const FooterSite = () => {
  const [currentDate, setCurrentDate] = useState(new Date().getFullYear());
  const [createdDate, setCreatedDate] = useState(2021);
  return (
    <div className="kazougroup-footer-wrapper">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="widget">
                <div className="foot-logo">
                  <div className="logo">
                    <a href="index-2.html" title="">
                      <img src="/assets/images/logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    The trio took this simple idea and built it into the world’s
                    leading carpooling platform.
                  </p>
                </div>
                <ul className="location">
                  <li>
                    <i className="ti-map-alt kazougroup-footer-icon"></i>
                    <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                  </li>
                  <li>
                    <i className="ti-mobile kazougroup-footer-icon"></i>
                    <p>+1-56-346 345</p>
                  </li>
                </ul>
                <br />
                <div className="widget-title">
                  <h4>Follow Us On</h4>
                </div>
                <ul className="kazougroup-footer-list-social">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="kazougroup-footer-social-icon kazougroup-btn-facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="kazougroup-footer-social-icon kazougroup-btn-twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="kazougroup-footer-social-icon kazougroup-btn-instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="widget">
                <div className="widget-title">
                  <h4>Compagny</h4>
                </div>
                <ul className="list-style">
                  <li>
                    <a href="/about">about us</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="widget">
                <div className="widget-title">
                  <h4>Our Services</h4>
                </div>
                <ul className="list-style">
                  <li>
                    <a href="#">Service 1</a>
                  </li>
                  <li>
                    <a href="#">Service 2</a>
                  </li>
                  <li>
                    <a href="#">Service 3</a>
                  </li>
                  <li>
                    <a href="#">Service 4</a>
                  </li>
                  <li>
                    <a href="#">Service 5</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="widget">
                <div className="widget-title">
                  <h4>Customers</h4>
                </div>
                <ul className="list-style">
                  <li>
                    <a href="#">Invite Friends</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="widget">
                <div className="widget-title">
                  <h4>Support & Socials</h4>
                </div>
                <ul className="list-style">
                  <li>
                    <a href="#" title="">
                      <i className="ti-help kazougroup-footer-icon"></i> Support
                      & Help
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="ti-comments kazougroup-footer-icon"></i>{" "}
                      Community & Social
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="ti-location-pin kazougroup-footer-icon"></i>{" "}
                      Where to find us
                    </a>
                  </li>
                </ul>
                <br />
                <div className="widget-title">
                  <h4>Download Apps</h4>
                </div>
                <ul className="colla-apps">
                  <li>
                    <a href="https://play.google.com/store?hl=en" title="">
                      <i className="fa fa-android"></i>android
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/lae/ios/app-store/" title="">
                      <i className="ti-apple"></i>iPhone
                    </a>
                  </li>
                  <li>
                    <a href="https://www.microsoft.com/store/apps" title="">
                      <i className="fa fa-windows"></i>Windows
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*Footer*/}
      <div className="bottombar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="copyright">
                Copyright ©{" "}
                {currentDate > createdDate ? (
                  <span>
                    {createdDate} - {createdDate}
                  </span>
                ) : (
                  currentDate
                )}{" "}
                - Realized by
                <Link href="/" className="kazougroup-footer-title underline">
                  KazouGroup Srl
                </Link>
                <span className="ml-2"><span className="kazougroup-bullet"></span>All right reserved.</span>
              </span>
              <i>
                <a
                  href="/privacy-policy"
                  className="underline kazougroup-footer-link"
                >
                  Privacy Policy
                </a>
                <span className="kazougroup-bullet"></span>
                <a
                  href="/conditions-terms"
                  className="underline kazougroup-footer-link"
                >
                  Terms & Conditions
                </a>
                <span className="kazougroup-bullet"></span>
                <a href="/cookies" className="underline kazougroup-footer-link">
                  Cookies
                </a>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSite;
