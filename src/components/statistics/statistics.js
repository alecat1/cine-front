import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import swal from "sweetalert";
import Global from "../../global";
import "./statistics.css";
const cookies = new Cookies();
import Page from "react-page-loading";

class Statistics extends Component {
  state = {
    words: [],
    status: null,
    country: [0, 0, 0, 0],
    frames: ["CHL", "ARG", "MEX", "BRA"],
    loading: true,
    dataLang: {},
  };

  async componentDidMount() {
    let auxload = true;
    const language = await cookies.get("language");
    if(language==undefined){
      Router.push("/index");
    }
    async function onPingCall() {
      const token = await cookies.get("token");
      try {
        const res = await axios.post(Global.url+"home", {
          headers: {
            "access-token": token,
            "key-token":
              "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR",
          },
        });
        auxload = false;
      } catch (err) {
        if(language=='en'){
          swal("Session Expired", "Please sign-in again", "warning").then(()=>{Router.push("/index");})
        }else if(language=='es'){
          swal("Sesión expirada", "Inicie sesión de nuevo", "warning").then(()=>{Router.push("/index");})
        }else if(language=='por'){
          swal("Sessão expirada", "Faça login novamente", "warning").then(()=>{Router.push("/index");})
        }
      }
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
    });
  }

  setChile = (e) => {
    if (this.state.country[0] == 0) {
      this.setState({
        country: [
          1,
          this.state.country[1],
          this.state.country[2],
          this.state.country[3],
        ],
        frames: [
          null,
          this.state.frames[1],
          this.state.frames[2],
          this.state.frames[3],
        ],
      });
      document.getElementById("ch").classList.add("circle-icon-stad-s");
    } else {
      this.setState({
        country: [
          0,
          this.state.country[1],
          this.state.country[2],
          this.state.country[3],
        ],
        frames: [
          "CHL",
          this.state.frames[1],
          this.state.frames[2],
          this.state.frames[3],
        ],
      });
      document.getElementById("ch").classList.remove("circle-icon-stad-s");
    }
  };

  setArgentina = (e) => {
    if (this.state.country[1] == 0) {
      this.setState({
        country: [
          this.state.country[0],
          1,
          this.state.country[2],
          this.state.country[3],
        ],
        frames: [
          this.state.frames[0],
          null,
          this.state.frames[2],
          this.state.frames[3],
        ],
      });
      document.getElementById("ar").classList.add("circle-icon-stad-s");
    } else {
      this.setState({
        country: [
          this.state.country[0],
          0,
          this.state.country[2],
          this.state.country[3],
        ],
        frames: [
          this.state.frames[0],
          "ARG",
          this.state.frames[2],
          this.state.frames[3],
        ],
      });
      document.getElementById("ar").classList.remove("circle-icon-stad-s");
    }
  };

  setMexico = (e) => {
    if (this.state.country[2] == 0) {
      this.setState({
        country: [
          this.state.country[0],
          this.state.country[1],
          1,
          this.state.country[3],
        ],
        frames: [
          this.state.frames[0],
          this.state.frames[1],
          null,
          this.state.frames[3],
        ],
      });
      document.getElementById("mx").classList.add("circle-icon-stad-s");
    } else {
      this.setState({
        country: [
          this.state.country[0],
          this.state.country[1],
          0,
          this.state.country[3],
        ],
        frames: [
          this.state.frames[0],
          this.state.frames[1],
          "MEX",
          this.state.frames[3],
        ],
      });
      document.getElementById("mx").classList.remove("circle-icon-stad-s");
    }
  };

  setBrasil = (e) => {
    if (this.state.country[3] == 0) {
      this.setState({
        country: [
          this.state.country[0],
          this.state.country[1],
          this.state.country[2],
          1,
        ],
        frames: [
          this.state.frames[0],
          this.state.frames[1],
          this.state.frames[2],
          null,
        ],
      });
      document.getElementById("br").classList.add("circle-icon-stad-s");
    } else {
      this.setState({
        country: [
          this.state.country[0],
          this.state.country[1],
          this.state.country[2],
          0,
        ],
        frames: [
          this.state.frames[0],
          this.state.frames[1],
          this.state.frames[2],
          "BRA",
        ],
      });
      document.getElementById("br").classList.remove("circle-icon-stad-s");
    }
  };

  renderList = () => {
    const {dataLang} = this.state;
    var { frames } = this.state;
    var countryFilter;
    frames.forEach((element) => {
      if (element != null) {
        if (countryFilter == undefined) {
          countryFilter = element;
        } else {
          countryFilter = countryFilter + "+" + element;
        }
      }
    });
    //Terrorism
    var url1 =
      "https://ourworldindata.org/grapher/fatalities-from-terrorism?tab=chart&time=2007..2017&country=" +
      countryFilter;
    var url2 =
      "https://ourworldindata.org/grapher/terrorism-percent-deaths?tab=chart&country=" +
      countryFilter;
    var url3 =
      "https://ourworldindata.org/grapher/worried-about-terrorism?region=SouthAmerica";
    //Homicides
    var url4 =
      "https://ourworldindata.org/grapher/share-of-deaths-homicides?tab=chart&country=" +
      countryFilter +
      "&region=SouthAmerica";
    var url5 =
      "https://ourworldindata.org/grapher/homicide-rate?region=SouthAmerica";
    var url6 =
      "https://ourworldindata.org/grapher/homicide-deaths-by-age?country=" +
      countryFilter;
    var url7 =
      "https://ourworldindata.org/grapher/homicide-rate-by-age?time=2017&country=CHL" +
      countryFilter;
    //Gender equality
    var url8 =
      "https://ourworldindata.org/grapher/proportion-of-women-in-senior-and-middle-management-positions?tab=chart&time=..2017&country=" +
      countryFilter +
      "&region=SouthAmerica";
    var url9 =
      "https://ourworldindata.org/grapher/firms-with-female-top-manager-of-firms-bars?country=" +
      countryFilter;
    var url10 =
      "https://ourworldindata.org/grapher/womens-economic-opportunity-2012-index?tab=chart&country=" +
      countryFilter;
    var url11 =
      "https://ourworldindata.org/grapher/sex-ratio-by-age?country=" +
      countryFilter;
    var url12 =
      "https://ourworldindata.org/grapher/share-population-female?year=latest&country=" +
      countryFilter;
    //Internet
    var url13 =
      "https://ourworldindata.org/grapher/daily-hours-spent-with-digital-media-per-adult-user";
    var url14 =
      "https://ourworldindata.org/grapher/number-of-internet-users-by-country?region=SouthAmerica";
    var url15 =
      "https://ourworldindata.org/grapher/percentage-of-young-people-engaging-in-social-networking-online?country=" +
      countryFilter;
    var url16 =
      "https://ourworldindata.org/grapher/share-of-individuals-using-the-internet?region=SouthAmerica";
    var url17 =
      "https://ourworldindata.org/grapher/share-of-individuals-using-the-internet?year=latest&region=SouthAmerica";
    //Education
    var url18 =
      "https://ourworldindata.org/grapher/oecd-pisa-test-scores-for-selected-countries-2000-2012?region=SouthAmerica";
    var url19 =
      "https://ourworldindata.org/grapher/government-expenditure-on-education-for-selected-countries?country=" +
      countryFilter;
    var url20 =
      "https://ourworldindata.org/grapher/share-of-education-in-government-expenditure?time=1998..2016&country=" +
      countryFilter;

    return (
      <div className="container-statistics">
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={6} xl={6}></Col>
          <Col lg={6} xl={6}></Col>
        </Row>
        <Row className="container-stad">
          <Col lg={4} xl={4}>
            <Row>
              <Col>
                <div className="div-margin-top"></div>
              </Col>
              <Col lg={12} xl={12} className="center-elements">
                <div>
                  <img
                    id="ch"
                    src="/assents/icons/flags/Chile.svg"
                    className="circle-icon-stad"
                    onClick={this.setChile}
                  ></img>
                </div>
                <div>
                  <img
                    id="ar"
                    src="/assents/icons/flags/Argentina.svg"
                    className="circle-icon-stad"
                    onClick={this.setArgentina}
                  ></img>
                </div>
                <div>
                  <img
                    id="mx"
                    src="/assents/icons/flags/Mexico.svg"
                    className="circle-icon-stad"
                    onClick={this.setMexico}
                  ></img>
                </div>
                <div>
                  <img
                    id="br"
                    src="/assents/icons/flags/Brasil.svg"
                    className="circle-icon-stad"
                    onClick={this.setBrasil}
                  ></img>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xl={8}>
            <div className="content-stad">
              <h4 className="stad-fr center-text">{dataLang.statisticsTerrorism}</h4>
              <iframe className="frame-stad" src={url1}></iframe>
              <iframe className="frame-stad" src={url2}></iframe>
              <iframe className="frame-stad" src={url3}></iframe>
              <h4 className="stad-fr center-text">{dataLang.statisticsHomicides}</h4>
              <iframe className="frame-stad" src={url4}></iframe>
              <iframe className="frame-stad" src={url5}></iframe>
              <iframe className="frame-stad" src={url6}></iframe>
              <iframe className="frame-stad" src={url7}></iframe>
              <h4 className="stad-fr center-text">{dataLang.statisticsGender}</h4>
              <iframe className="frame-stad" src={url8}></iframe>
              <iframe className="frame-stad" src={url9}></iframe>
              <iframe className="frame-stad" src={url10}></iframe>
              <iframe className="frame-stad" src={url11}></iframe>
              <iframe className="frame-stad" src={url12}></iframe>
              <h4 className="stad-fr center-text">{dataLang.statisticsInternet}</h4>
              <iframe className="frame-stad" src={url13}></iframe>
              <iframe className="frame-stad" src={url14}></iframe>
              <iframe className="frame-stad" src={url15}></iframe>
              <iframe className="frame-stad" src={url16}></iframe>
              <iframe className="frame-stad" src={url17}></iframe>
              <h4 className="stad-fr center-text">{dataLang.statisticsEducation}</h4>
              <iframe className="frame-stad" src={url18}></iframe>
              <iframe className="frame-stad" src={url19}></iframe>
              <iframe className="frame-stad" src={url20}></iframe>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  espacio = () => {
    return (
      <div>
        <Page
          loader={"comet-spin"}
          color={"#00cad4"}
          size={80}
          duration={0.8}
        ></Page>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default Statistics;
