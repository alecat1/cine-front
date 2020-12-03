import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { Cookies } from "react-cookie";
import Router from "next/router";
import makeAnimated from "react-select/animated";
import Moment from "react-moment";
import Select from "react-select";
import axios from "axios";
import swal from "sweetalert";
const cookies = new Cookies();
import Page from "react-page-loading";
import Global from "../../global";

const animatedComponents = makeAnimated();

class News extends Component {
  state = {
    loading: true,
    data: [],
    status: null,
    filter: [],
    search: "",
    dataLang: {},
  };

  async componentDidMount() {
    let auxload = true;
    let auxurl = window.location.search;
    const language = await cookies.get("language");
    if (language == undefined) {
      Router.push("/index");
    }
    async function onPingCall() {
      const token = await cookies.get("token");
      try {
        const res = await axios.post(Global.url + "home", {
          headers: {
            "access-token": token,
            "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR",
          },
        });
      } catch (err) {
        if (language == "en") {
          swal("Session Expired", "Please sign-in again", "warning").then(() => {
            Router.push("/index");
          });
        } else if (language == "es") {
          swal("Sesión expirada", "Inicie sesión de nuevo", "warning").then(() => {
            Router.push("/index");
          });
        } else if (language == "por") {
          swal("Sessão expirada", "Faça login novamente", "warning").then(() => {
            Router.push("/index");
          });
        }
      }
    }
    let dataToT = {};
    await axios.get(Global.url + "multi-language").then((res) => {
      dataToT = res.data;
    });
    let auxData = await dataToT[language];
    await onPingCall();
    auxload = await false;
    this.setState({
      loading: auxload,
      urlState: auxurl,
      dataLang: auxData,
    });
  }

  bold = async (e) => {

    if (document.getElementsByClassName("description-news")) {
      let auxlength = await document.getElementsByClassName("description-news").length;
      for (let index = 0; index < auxlength; index++) {
        document.getElementsByClassName("description-news")[index].innerHTML = await document.getElementsByClassName("description-news")[index].innerHTML.replace("&lt;b&gt;", "<b>");
        document.getElementsByClassName("description-news")[index].innerHTML = await document.getElementsByClassName("description-news")[index].innerHTML.replace("&lt;/b&gt;", "</b>");
        document.getElementsByClassName("description-news")[index].style.display = 'block'
      }
    }
    
  };
  componentWillMount() {
    this.getInfo();
  }
  getInfo = async () => {
    await axios
      .get(Global.url + "noticias")
      .then(async (res) => {
        let aux = [];
        const language = await cookies.get("language");
        res.data.forEach((element) => {
          if (element.language == language) {
            aux.push(element);
          }
        });
        await this.setState({
          status: "success",
          data: aux,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  handleSearchBar = async (e) => {
    this.setState({
      search: e.target.value,
    });
    let data;
    data = await this.state.data.filter((news) => {
      return news.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      filter: data,
    });
  };

  brandColor = "#282828";

  customStyles = {
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? "#FFF" : styles.color,
      fontFamily: "Sofia Pro Light",
      backgroundColor: state.isSelected ? "#ff004b" : styles.color,
      borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
      "&:hover": {
        color: "#FFF",
        backgroundColor: "#ff004b",
      },
    }),
    control: (base, state) => ({
      ...base,
      fontFamily: "Sofia Pro Light",
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused ? this.brandColor : "#797979",
      "&:hover": {
        borderColor: state.isFocused ? this.brandColor : "#282828",
      },
    }),
  };

  renderList = () => {
    const { dataLang } = this.state;
    return (
      <Container className="mt-5" fluid>
        <Row className="mx-auto">
          <Col lg={12} xl={12} className="text-center">
            <h1>{dataLang.newsTite}</h1>
          </Col>
          <Col lg={12} xl={12}>
            <input className="input__search-news" placeholder={dataLang.newsSearh} onChange={this.handleSearchBar} />
          </Col>
          {this.state.search == ""
            ? this.state.data.map((element) => {
                let url = Global.url + "get-image-noticias/ " + element.id;
                return (
                  <Col lg={12} xl={12} key={element.id} className="no-gutters my-2">
                    <div className="container-cardnews overslowly">
                      <Row className="no-gutters">
                        <Col lg={4} xl={4} className="d-flex justify-content-center">
                          <div className="mx-2 my-2">
                            <img onLoad = {this.bold} src={url} alt="" className="rounded img-thumbnail img-height" />
                          </div>
                        </Col>
                        <Col lg={8} xl={8} className="pl-5 pr-2 py-3 container-new--text">
                          <h2 className="title-news">{element.title}</h2>
                          <pre className="description-news">
                            {element.description}
                          </pre>
                          <footer className="blockquote-footer text-right">
                            <Moment format="D-MMM-YYYY" withTitle>
                              {element.update_at}
                            </Moment>
                          </footer>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })
            : this.state.filter.map((element) => {
                let url = Global.url + "get-image-noticias/ " + element.id;
                return (
                  <Col lg={12} xl={12} className="no-gutters my-2">
                    <div className="container-cardnews">
                      <Row className="no-gutters">
                        <Col lg={4} xl={4} className="d-flex justify-content-center">
                          <div className="mx-2 my-2">
                            <img src={url} alt="" className="rounded img-thumbnail img-height" />
                          </div>
                        </Col>
                        <Col lg={8} xl={8} className="pl-5 pr-2 py-3 container-new--text">
                          <h2 className="title-news">{element.title}</h2>
                          <p>{element.description}</p>
                          <footer className="blockquote-footer text-right">
                            <Moment format="D-MMM-YYYY" withTitle>
                              {element.update_at}
                            </Moment>
                          </footer>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })}
        </Row>
      </Container>
    );
  };
  espacio = () => {
    return (
      <div>
        <Page loader={"comet-spin"} color={"#ea1d52"} size={80} duration={0.8}></Page>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default News;
