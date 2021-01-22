import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

class MultiLanguagesSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLang: localStorage.getItem("i18nextLng"),
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }
  handleChangeLanguage(lang) {
    this.props.i18n.changeLanguage(lang);
    this.setState({ selectLang: lang });
  }

  render() {
    const { selectLang } = this.state;
    return (
      <ul className="kazougroup-multilanguages-wrapper setting-area">
        <li>
          <a href="#" title="Languages" data-ripple="">
            <i className="fa fa-globe"></i>
            {selectLang === "fr" ? (
              <img
                src="/assets/images/flags/fr.png"
                alt="Français"
                className="kazougroup-multilanguages-img"
              />
            ) : selectLang === "en" ? (
              <img
                src="/assets/images/flags/en.png"
                alt="English"
                className="kazougroup-multilanguages-img"
              />
            ) : (
              <img
                src="/assets/images/flags/it.png"
                alt="Italiano"
                className="kazougroup-multilanguages-img"
              />
            )}
          </a>
          <div className="dropdowns languages">
            <a href="#" title="" onClick={() => this.handleChangeLanguage("fr")}>
              <i className="ti-check"></i>French
            </a>
            <a href="#" title="" onClick={() => this.handleChangeLanguage("en")}>
              English
            </a>
            <a href="#" title="" onClick={() => this.handleChangeLanguage("it")}>
              Italian
            </a>
          </div>
        </li>
      </ul>
    );
  }
}

export default withTranslation()(MultiLanguagesSite);
