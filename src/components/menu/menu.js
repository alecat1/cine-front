import React, { Component } from "react";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./menu.css";
import Global from "../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import Local from "../../local";
import LocalQA from "../../localQA";

class Menu extends Component {
  state = {
    rol: 0,
    loading: true,
    dataLang: {},
  };

  async componentDidMount() {
    let auxload = true;
    let auxrol = 1;
    const language = await cookies.get("language");
    if(language==undefined){
      Router.push("/index");
    }
    async function onPingCall() {
      const token = await cookies.get("token");
      if (token != undefined) {
        var decoded = jwtDecode(token);
      }
      try {
        const res = await axios.post(Global.url + "home", {
          headers: {
            "access-token": token,
            "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR",
          },
        });

        if (token != undefined) {
          auxrol = await decoded.role;
        }
        auxload = await false;
      } catch (err) {}
    }
    let dataToT = {};
    await axios.get(Global.url + "multi-language").then((res) => {
      dataToT = res.data;
    });
    let auxData = await dataToT[language];
    await onPingCall();
    this.setState({
      dataLang: auxData,
      loading: auxload,
      rol: auxrol,
    });
  }

  cookiesRemover = () => {
    if (cookies.get("token") != undefined) {
      cookies.remove("token");
    }
    if (cookies.get("token", { path: "/" }) != undefined) {
      cookies.remove("token", { path: "/" });
    }
    if (cookies.get("token", { path: "/admin/home-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/home-change" });
    }
    if (cookies.get("token", { path: "/admin/material-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/material-change" });
    }

    if (cookies.get("token", { path: "/admin/tips-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/tips-change" });
    }    

    if (cookies.get("token", { path: "/admin/policies-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/policies-change" });
    }
    if (cookies.get("token", { path: "/admin/policies-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/policies-new" });
    }
    if (cookies.get("token", { path: "/admin/glossary-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/glossary-change" });
    }
    if (cookies.get("token", { path: "/admin/glossary-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/glossary-new" });
    }
    if (cookies.get("token", { path: "/admin/user-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/user-change" });
    }
    if (cookies.get("token", { path: "/admin/register" }) != undefined) {
      cookies.remove("token", { path: "/admin/register" });
    }
    if (cookies.get("token", { path: "/admin/resilience-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/resilience-change" });
    }
    if (cookies.get("token", { path: "/admin/videos-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/videos-new" });
    }
    if (cookies.get("token", { path: "/admin/videos-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/videos-change" });
    }
    if (cookies.get("token", { path: "/admin/cultural-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/cultural-new" });
    }
    if (cookies.get("token", { path: "/admin/cultural-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/cultural-change" });
    }
    if (cookies.get("token", { path: "/cultural/mexico" }) != undefined) {
      cookies.remove("token", { path: "/cultural/mexico" });
    }
    if (cookies.get("token", { path: "/cultural/argentina" }) != undefined) {
      cookies.remove("token", { path: "/cultural/argentina" });
    }
    if (cookies.get("token", { path: "/cultural/chile" }) != undefined) {
      cookies.remove("token", { path: "/cultural/chile" });
    }
    if (cookies.get("token", { path: "/cultural/brasil" }) != undefined) {
      cookies.remove("token", { path: "/cultural/brasil" });
    }
    if (cookies.get("token", { path: "/policies/ccm" }) != undefined) {
      cookies.remove("token", { path: "/policies/ccm" });
    }
    if (cookies.get("token", { path: "/policies/cqc" }) != undefined) {
      cookies.remove("token", { path: "/policies/cqc" });
    }
    if (cookies.get("token", { path: "/admin" }) != undefined) {
      cookies.remove("token", { path: "/admin" });
    }
    if (cookies.get("token", { path: "/glossary" }) != undefined) {
      cookies.remove("token", { path: "/glossary" });
    }
    if (cookies.get("token", { path: "/home" }) != undefined) {
      cookies.remove("token", { path: "/home" });
    }
    if (cookies.get("token", { path: "/index" }) != undefined) {
      cookies.remove("token", { path: "/index" });
    }
    if (cookies.get("token", { path: "/material" }) != undefined) {
      cookies.remove("token", { path: "/material" });
    }

    if (cookies.get("token", { path: "/tips" }) != undefined) {
      cookies.remove("token", { path: "/tips" });
    }    

    if (cookies.get("token", { path: "/resilience" }) != undefined) {
      cookies.remove("token", { path: "/resilience" });
    }
    if (cookies.get("token", { path: "/statistics" }) != undefined) {
      cookies.remove("token", { path: "/statistics" });
    }
    if (cookies.get("token", { path: "/surveyCE" }) != undefined) {
      cookies.remove("token", { path: "/surveyCE" });
    }
    if (cookies.get("token", { path: "/surveyMD" }) != undefined) {
      cookies.remove("token", { path: "/surveyMD" });
    }
    if (cookies.get("token", { path: "/videos" }) != undefined) {
      cookies.remove("token", { path: "/videos" });
    }
    if (cookies.get("token", { path: "/news" }) != undefined) {
      cookies.remove("token", { path: "/news" });
    }
  };

  submenu = () => {
    var content = document.getElementById("training-des-menu");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  };

  openNav() {
    let element = document.getElementById("hover-menu");
    element.classList.add("overlay-menu");
  }
  closeNav() {
    let element = document.getElementById("hover-menu");
    element.classList.remove("overlay-menu");
  }

  renderAdmin = () => {
    const {dataLang} = this.state;
    return (
      <li className="class-back">
        <a href={Local.url + "admin"}>
          <i className="fas fa-address-card">
            <img src="/assents/icons/id-card-solid.svg" width="30" height="30"></img>
          </i>
          {dataLang.menuAdmin}
        </a>
      </li>
    );
  };

  renderSurveyStaff = () => {
    const {dataLang} = this.state;
    return (
      <a href={Local.url + "surveyCE"}>
        <i className="fas fa-book-reader">
          <img src="/assents/icons/observation.svg" width="30" height="30"></img>
        </i>
        {dataLang.surveyStaff}
      </a>
    );
  };

  renderList = () => {
    const {dataLang} = this.state;
    const { rol } = this.state;
    return (
      <div>
        <div id="hover-menu" className=""></div>
        <div className="Menu">
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <i className="fas fa-bars" id="btn" onClick={this.openNav}>
              <img src="/assents/icons/bars-solid.svg" width="40" height="40" style={{ marginBottom: "20px" }}></img>
              <a href={Local.url + "home"}>
                <img src="/assents/icons/Logo-Home.png" width="320" height="70"></img>
              </a>
            </i>
            <i className="fas fa-times" id="cancel" onClick={this.closeNav}>
              <img src="/assents/icons/times-solid.svg" width="35" height="35"></img>
            </i>
          </label>
          <div className="sidebar hand-cursor">
            <header>
              <img src="/assents/icons/logo-dark-.svg" width="50" height="50"></img>
              <img src="/assents/icons/logo-text-dark.svg" width="50" height="50"></img>
            </header>
            <ul>
              {rol == 2 || rol == 3 || rol == 4 ? this.renderAdmin() : null}
              <div>
              <li className='class-back-QA'>
                <a href={LocalQA.url + "url?tkn="+cookies.get('token')+'&lng='+cookies.get('language')}>
                  <i className='fas fa-spell-check'>
                    <img src='/assents/icons/tik-tok.svg' width='30' height='30'></img>
                  </i>
                  Tiktok QA
                </a>
              </li>
                <li className="dropdown-submenu">
                  <a className="class-back dropdown-toggle">
                    <i className="fas fa-book-reader">
                      <img src="/assents/icons/book-reader-solid.svg" width="30" height="30"></img>
                    </i>
                    {dataLang.menuTraining}
                  </a>
                  <ul className="dropdown-menu">
                  <li className="class-back">
                <a href={Local.url + "glossary"}>
                  <i className="fas fa-spell-check">
                    <img src="/assents/icons/glossary.svg" width="30" height="30"></img>
                  </i>
                  {dataLang.menuGlossary}
                </a>
              </li>
              <li className="dropdown-submenu">
                  <a className="class-back dropdown-toggle">
                    <i className="fas fa-book-reader">
                      <img src="/assents/icons/cultural.svg" width="30" height="30"></img>
                    </i>
                    {dataLang.menuCultural}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="sub-class">
                      <a href={Local.url + "cultural/mexico"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/culmexico.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.culturalMX}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "cultural/argentina"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/culargentina.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.culturalAR}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "cultural/chile"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/culchile.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.culturalCH}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "cultural/brasil"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/culbrasil.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.culturalBR}
                      </a>
                    </li>
                  </ul>
                </li>
                    <li className="sub-class">
                      <a href={Local.url + "statistics"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/esticon.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.menuStatistics}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "material"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/maticon.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.menuMaterial}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "resilience"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/resiliencia.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.menuResilience}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "tips"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/tips.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.menuTips}
                      </a>
                    </li>                    
                  </ul>
                </li>
              </div>
              <div>
                <li className="dropdown-submenu">
                  <a className="class-back dropdown-toggle">
                    <i className="fas fas fa-book">
                      <img src="/assents/icons/book-solid.svg" width="30" height="30"></img>
                    </i>
                    {dataLang.menuPolicies}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="sub-class">
                      <a href={Local.url + "policies/cqc"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/conocimiento.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.policiesCCM}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "policies/ccm"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/libro.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.policiesCQC}
                      </a>
                    </li>
                    <li className="sub-class">
                      <a href={Local.url + "videos"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/youtube.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.policiesVideos}
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
              <div>
                <li className="dropdown-submenu">
                  <a className="class-back dropdown-toggle">
                    <i className="fas fa-book-reader">
                      <img src="/assents/icons/survey.svg" width="30" height="30"></img>
                    </i>
                    {dataLang.menuSurvey}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="sub-class">
                      <a href={Local.url + "surveyMD"}>
                        <i className="fas fa-book-reader">
                          <img src="/assents/icons/survey1.svg" width="30" height="30"></img>
                        </i>
                        {dataLang.suveryModerator}
                      </a>
                    </li>
                    <li className="sub-class">{rol == 2 || rol == 3 || rol == 4 || rol == 5 ? this.renderSurveyStaff() : null}</li>
                  </ul>
                </li>
              </div>
              <li className="class-back">
                <a href={Local.url + "news"}>
                  <i className="fas fa-spell-check">
                    <img src="/assents/icons/spell-check-solid.svg" width="30" height="30"></img>
                  </i>
                  {dataLang.menuNew}
                </a>
              </li>
            
              <li className="class-back">
                <a onClick={this.cookiesRemover} href={Local.url + "index "}>
                  <i className="far fa-arrow-alt-circle-left">
                    <img src="/assents/icons/sign-out-alt-solid.svg" width="30" height="30"></img>
                  </i>
                  {dataLang.menuLogout}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? null : this.renderList()}</div>;
  }
}

export default Menu;
