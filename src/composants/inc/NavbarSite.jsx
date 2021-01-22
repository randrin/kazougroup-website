import React, { useState } from "react";
import ProfileUserSite from "./ProfileUserSite";

const NavbarSite = () => {
  const [user, setUser] = useState("");
  return (
    <div className="kazougroup-login-wrapper">
      <div className="responsive-header">
        <div className="mh-head first Sticky">
          <span className="mh-btns-left">
            <a className="" href="#menu">
              <i className="fa fa-align-justify"></i>
            </a>
          </span>
          <span className="mh-text">
            <a href="/" title="">
              <img src="/assets/images/logo.png" alt="KazouGroup Srl" />
            </a>
          </span>
        </div>
        <nav id="menu" className="res-menu">
          <ul>
            <li>
              <span>Home</span>
              <ul>
                <li>
                  <a href="index-2.html" title="">
                    Home Social
                  </a>
                </li>
                <li>
                  <a href="index2.html" title="">
                    Home Social 2
                  </a>
                </li>
                <li>
                  <a href="index-company.html" title="">
                    Home Company
                  </a>
                </li>
                <li>
                  <a href="landing.html" title="">
                    Login page
                  </a>
                </li>
                <li>
                  <a href="logout.html" title="">
                    Logout Page
                  </a>
                </li>
                <li>
                  <a href="newsfeed.html" title="">
                    news feed
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Time Line</span>
              <ul>
                <li>
                  <a href="time-line.html" title="">
                    timeline
                  </a>
                </li>
                <li>
                  <a href="timeline-friends.html" title="">
                    timeline friends
                  </a>
                </li>
                <li>
                  <a href="timeline-groups.html" title="">
                    timeline groups
                  </a>
                </li>
                <li>
                  <a href="timeline-pages.html" title="">
                    timeline pages
                  </a>
                </li>
                <li>
                  <a href="timeline-photos.html" title="">
                    timeline photos
                  </a>
                </li>
                <li>
                  <a href="timeline-videos.html" title="">
                    timeline videos
                  </a>
                </li>
                <li>
                  <a href="fav-page.html" title="">
                    favourit page
                  </a>
                </li>
                <li>
                  <a href="groups.html" title="">
                    groups page
                  </a>
                </li>
                <li>
                  <a href="page-likers.html" title="">
                    Likes page
                  </a>
                </li>
                <li>
                  <a href="people-nearby.html" title="">
                    people nearby
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Account Setting</span>
              <ul>
                <li>
                  <a href="create-fav-page.html" title="">
                    create fav page
                  </a>
                </li>
                <li>
                  <a href="edit-account-setting.html" title="">
                    edit account setting
                  </a>
                </li>
                <li>
                  <a href="edit-interest.html" title="">
                    edit-interest
                  </a>
                </li>
                <li>
                  <a href="edit-password.html" title="">
                    edit-password
                  </a>
                </li>
                <li>
                  <a href="edit-profile-basic.html" title="">
                    edit profile basics
                  </a>
                </li>
                <li>
                  <a href="edit-work-eductation.html" title="">
                    edit work educations
                  </a>
                </li>
                <li>
                  <a href="messages.html" title="">
                    message box
                  </a>
                </li>
                <li>
                  <a href="inbox.html" title="">
                    Inbox
                  </a>
                </li>
                <li>
                  <a href="notifications.html" title="">
                    notifications page
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>forum</span>
              <ul>
                <li>
                  <a href="forum.html" title="">
                    Forum Page
                  </a>
                </li>
                <li>
                  <a href="forums-category.html" title="">
                    Fourm Category
                  </a>
                </li>
                <li>
                  <a href="forum-open-topic.html" title="">
                    Forum Open Topic
                  </a>
                </li>
                <li>
                  <a href="forum-create-topic.html" title="">
                    Forum Create Topic
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Our Shop</span>
              <ul>
                <li>
                  <a href="shop.html" title="">
                    Shop Products
                  </a>
                </li>
                <li>
                  <a href="shop-masonry.html" title="">
                    Shop Masonry Products
                  </a>
                </li>
                <li>
                  <a href="shop-single.html" title="">
                    Shop Detail Page
                  </a>
                </li>
                <li>
                  <a href="shop-cart.html" title="">
                    Shop Product Cart
                  </a>
                </li>
                <li>
                  <a href="shop-checkout.html" title="">
                    Product Checkout
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Our Blog</span>
              <ul>
                <li>
                  <a href="blog-grid-wo-sidebar.html" title="">
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href="blog-grid-right-sidebar.html" title="">
                    Blog with R-Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-grid-left-sidebar.html" title="">
                    Blog with L-Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-masonry.html" title="">
                    Blog Masonry Style
                  </a>
                </li>
                <li>
                  <a href="blog-list-wo-sidebar.html" title="">
                    Blog List Style
                  </a>
                </li>
                <li>
                  <a href="blog-list-right-sidebar.html" title="">
                    Blog List with R-Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-list-left-sidebar.html" title="">
                    Blog List with L-Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-detail.html" title="">
                    Blog Post Detail
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Portfolio</span>
              <ul>
                <li>
                  <a href="portfolio-2colm.html" title="">
                    Portfolio 2col
                  </a>
                </li>
                <li>
                  <a href="portfolio-3colm.html" title="">
                    Portfolio 3col
                  </a>
                </li>
                <li>
                  <a href="portfolio-4colm.html" title="">
                    Portfolio 4col
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Support & Help</span>
              <ul>
                <li>
                  <a href="support-and-help.html" title="">
                    Support & Help
                  </a>
                </li>
                <li>
                  <a href="support-and-help-detail.html" title="">
                    Support & Help Detail
                  </a>
                </li>
                <li>
                  <a href="support-and-help-search-result.html" title="">
                    Support & Help Search Result
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>More pages</span>
              <ul>
                <li>
                  <a href="careers.html" title="">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="career-detail.html" title="">
                    Career Detail
                  </a>
                </li>
                <li>
                  <a href="404.html" title="">
                    404 error page
                  </a>
                </li>
                <li>
                  <a href="404-2.html" title="">
                    404 Style2
                  </a>
                </li>
                <li>
                  <a href="faq.html" title="">
                    faq's page
                  </a>
                </li>
                <li>
                  <a href="insights.html" title="">
                    insights
                  </a>
                </li>
                <li>
                  <a href="knowledge-base.html" title="">
                    knowledge base
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html" title="">
                about
              </a>
            </li>
            <li>
              <a href="about-company.html" title="">
                About Us2
              </a>
            </li>
            <li>
              <a href="contact.html" title="">
                contact
              </a>
            </li>
            <li>
              <a href="contact-branches.html" title="">
                Contact Us2
              </a>
            </li>
            <li>
              <a href="widgets.html" title="">
                Widgts
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/*Responsive Header*/}

      <div className="topbar stick">
        <div className="logo">
          <a title="" href="/">
            <img src="/assets/images/logo.png" alt="Global Investissement" />
          </a>
        </div>

        <div className="top-area">
          <ul className="main-menu">
            <li className="kazougroup-main-menu">
              <a href="/" className="underline">
                Kazou Group
              </a>
            </li>
            <li>
              <a href="#" title="">
                Account & Services
              </a>
              <ul>
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
            </li>
            <li>
              <a href="#" title="">
                Investissements
              </a>
              <ul>
                <li>
                  <a href="#">Investissement 1</a>
                </li>
                <li>
                  <a href="#">Investissement 2</a>
                </li>
                <li>
                  <a href="#">Investissement 3</a>
                </li>
                <li>
                  <a href="#">Investissement 4</a>
                </li>
                <li>
                  <a href="#">Investissement 5</a>
                </li>
                <li>
                  <a href="#">Investissement 6</a>
                </li>
                <li>
                  <a href="#">Investissement 7</a>
                </li>
              </ul>
            </li>
            <li className="kazougroup-main-menu">
              <a href="/faq" className="underline">
                Faqs
              </a>
            </li>
            <li className="kazougroup-main-menu">
              <a href="/contact" className="underline">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="setting-area">
            <li>
              <a href="#" title="Languages" data-ripple="">
                <i className="fa fa-globe"></i>
              </a>
              <div className="dropdowns languages">
                <a href="#" title="">
                  <i className="ti-check"></i>English
                </a>
                <a href="#" title="">
                  Arabic
                </a>
                <a href="#" title="">
                  Dutch
                </a>
                <a href="#" title="">
                  French
                </a>
              </div>
            </li>
          </ul>
          {user ? (
            <ProfileUserSite />
          ) : (
            <>
              <ul className="setting-area">
                <a href="/login" className="kazougroup-btn-login">
                  <i className="ti-user kazougroup-login-left-icon"></i>
                  <span className="mr-1 ml-1">Open Account</span>
                  <i className="ti-arrow-right kazougroup-login-right-icon"></i>
                </a>
              </ul>
            </>
          )}
        </div>
      </div>
      {/*Topbar*/}
    </div>
  );
};

export default NavbarSite;
