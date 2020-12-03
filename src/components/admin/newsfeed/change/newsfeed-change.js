import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./newsfeed-change.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";
import ModalImage from "react-modal-image";

class newsfeedChange extends Component {
  state = {
    news: [],
    selectValue: "",
    selectValue2: "",
    title: "",
    description: "",
    language: "",
    id_news: "",
    control: "",
    img: "",
    newsdele: {},
    newsupdate: {},
    rol: 0,
    id_db: null,
    loading: true,
    prewImage: "",
    selectedFile: null,
  };

  async componentDidMount() {
    let auxload = true;
    let auxrol = 0;
    let auxid = null;
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
          auxid = await decoded.ident;
        }
        auxload = await false;
      } catch (err) {
        swal("Session Expired", "Please sign-in again", "warning").then(() => {
          Router.push("/index");
        });
      }
    }
    await onPingCall();
    this.setState({
      loading: auxload,
      rol: auxrol,
      id_db: auxid,
    });
  }

  componentWillMount() {
    this.getNews();
  }

  getNews = async () => {
    await axios.get(Global.url + "noticias").then(async (res) => {
      await this.setState({
        news: res.data,
        status: "success",
      });
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

  changeSelectNews = async (e) => {
    let ArrayImage = {};
    this.setState({ selectValue: e.value });
    let arraynews = await this.state.news.map((noticias) => {
      let json_arr = {};
      json_arr["id_news"] = noticias.id;
      json_arr["title"] = noticias.title;
      json_arr["description"] = noticias.description;
      json_arr["language"] = noticias.language;
      json_arr["img"] = noticias.img;
      return JSON.parse(JSON.stringify(json_arr));
    });

    await this.state.news.map((noticias) => {
      if (noticias.id == e.id) {
        ArrayImage["id"] = noticias.id;
        ArrayImage["value"] = noticias.title;
        ArrayImage["label"] = noticias.title;
        JSON.parse(JSON.stringify(ArrayImage));
        this.setState({
          prewImage: Global.url + "get-image-noticias/" + ArrayImage.id,
        });
      }
    });

    for (let index = 0; index < arraynews.length; index++) {
      if (arraynews[index].id_news == e.id) {
        if (arraynews[index].language == "es") {
          arraynews[index].language = "Spanish";
        }
        if (arraynews[index].language == "en") {
          arraynews[index].language = "English";
        }
        if (arraynews[index].language == "por") {
          arraynews[index].language = "Portugues";
        }
        await this.setState({
          title: arraynews[index].title,
          description: arraynews[index].description,
          language: arraynews[index].language,
          id_news: arraynews[index].id_news,
          img: arraynews[index].img,
        });
      }
    }
    document.getElementsByClassName("form-control")[0].value = this.state.title;
    document.getElementsByClassName("form-control")[1].value = this.state.description;
  };

  titleRef = React.createRef();
  descriptionRef = React.createRef();

  sendAjax = (e) => {
    e.preventDefault();

    if (this.state.control == 2 && this.state.title !== "") {
      this.state.newsdele = {
        id: this.state.id_news,
      };
      axios.post(Global.url + "delete-noticias", this.state.newsdele).then((res) => {
        if (res.status == 200) {
          this.setState({
            status: "success",
          });
          swal("Good job!", "The news has been deleted succesfully!", "success").then(() => {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
          swal("Error!", "The news has not been deleted. Try again", "error");
        }
      });
    } else if (this.state.control == 1 && this.state.title !== "") {
      if (this.state.selectedFile !== null) {
        const data = new FormData();
        data.append("file", this.state.selectedFile);
        data.append("title", this.titleRef.current.value);
        data.append("description", this.descriptionRef.current.value);
        data.append("language", this.state.language);
        data.append("id", this.state.id_news);
        data.append("img", this.state.img);
        data.append("statusupda", 0);
        axios.post(Global.url + "update-noticias", data).then((res) => {
          if (res.status == 200) {
            this.setState({
              status: "success",
            });
            swal("Good job!", "The news has been updated succesfully!", "success").then(() => {
              location.reload();
            });
          } else {
            this.setState({
              status: "failed",
            });
            swal("Error!", "The news has not been updated. Try again", "error");
          }
        });
      } else {
        this.state.newsupdate = {
          id: this.state.id_news,
          title: this.titleRef.current.value,
          description: this.descriptionRef.current.value,
          language: this.state.language,
          statusupda: 1,
        };
        axios.post(Global.url + "update-noticias", this.state.newsupdate).then((res) => {
          if (res.status == 200) {
            this.setState({
              status: "success",
            });
            swal("Good job!", "The news has been updated succesfully!", "success").then(() => {
              location.reload();
            });
          } else {
            this.setState({
              status: "failed",
            });
            swal("Error!", "The news has not been updated. Try again", "error");
          }
        });
      }
    } else {
      swal("Warning!", "Please, fill all the fields and try again", "warning");
    }
  };

  updatednews = (e) => {
    this.setState({
      control: 1,
    });
  };

  deletenews = (e) => {
    this.setState({
      control: 2,
    });
  };

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  callThis = (e) => {
    this.setState({
      language: e.label,
    });
  };

  handleChange(value) {
    this.setState({ value: value });
  }
  renderList() {
    const { rol } = this.state;
    //0 null, 1 usuario, 2 administrador, 3 trainer, 4 rrhh, 5 staff
    if (rol == 0) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 1) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 4) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 5) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 6) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 7) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 8) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else {
      let listnews = [];
      var options1 = [];
      var options2 = [];
      let json_arr = {};
      var listLanguage = [];
      var uniqueLanguage = [];

      try {
        const Arraynews = this.state.news.map((noticias) => {
          json_arr["id_new"] = noticias.id;
          json_arr["title"] = noticias.title;
          json_arr["description"] = noticias.description;
          json_arr["img"] = noticias.img;
          json_arr["language"] = noticias.language;
          JSON.parse(options1.push({ id: noticias.id, value: noticias.id, label: noticias.title }));
          return JSON.parse(JSON.stringify(json_arr));
        });
      } catch (error) {
        this.setState({
          news: [],
        });
      }

      let ind = 1;
      uniqueLanguage = ["es", "en", "por"];
      uniqueLanguage.forEach((element) => {
        let listnewLanguageLabel = "";
        if (element == "es") {
          listnewLanguageLabel = "Spanish";
        }
        if (element == "en") {
          listnewLanguageLabel = "English";
        }
        if (element == "por") {
          listnewLanguageLabel = "Portugues";
        }
        JSON.parse(options2.push({ value: element, label: listnewLanguageLabel }));
        ind = ind + 1;
      });

      return (
        <div className="container-admin-news">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Modify/Delete News</h1>
            </Col>
          </Row>
          <div className="container-card-from-newsfeed-change">
            <form onSubmit={this.sendAjax}>
              <Row>
                <Col lg={6} xl={6}>
                  <Row className="mx-auto mt-3">
                    <Col lg={5} xl={5}>
                      <label htmlFor="basic-url">Title News</label>
                      <Select options={options1} styles={this.customStyles} placeholder={<div>Select or type the title</div>} onChange={this.changeSelectNews} />
                    </Col>
                    <Col lg={4} xl={4}>
                      <label htmlFor="basic-url">Title</label>
                      <InputGroup className="mb-3">
                        <FormControl placeholder="Please type the title" contentEditable="true" ref={this.titleRef} />
                      </InputGroup>
                    </Col>
                    <Col lg={3} xl={3}>
                      <label htmlFor="basic-url">Language</label>
                      <Select options={options2} styles={this.customStyles} value={{ value: this.state.language, label: this.state.language }} placeholder={<div>Language</div>} onChange={this.callThis} />
                    </Col>
                  </Row>
                  <Row className="mx-auto mt-2">
                    <Col lg={12} xl={12}>
                      <div>If you want to highlight a word you must put &lt;b&gt; before and &lt;/b&gt; after it.</div>
                      <div>
                        <label htmlFor="basic-url">Description</label>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control as="textarea" rows="4" placeholder="Please type the description" ref={this.descriptionRef} />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mx-auto mt-2">
                    <Col lg={12} xl={12}>
                      <Form>
                        <div className="form-group files-newsfeed-new">
                          <label>Upload Your Img/Gif</label>
                          <input type="file" className="form-control" onChange={this.onChangeHandler} multiple="" />
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} xl={6} className="mx-auto">
                  <label htmlFor="basic-url">Preview Image</label>
                  <ModalImage className="rounded modal--width-news" small={this.state.prewImage} large={this.state.prewImage} hideDownload={true} alt={this.state.selectTitle} />
                </Col>
              </Row>
              <Row className="mx-auto justify-content-end">
                {this.state.news.length > 0 ? (
                  <Col lg={3} xl={3}>
                    <Button className="button-change" type="submit" variant="primary" onClick={this.updatednews} size="lg" block>
                      Update
                    </Button>
                  </Col>
                ) : null}
                {this.state.news.length > 0 ? (
                  <Col lg={3} xl={3}>
                    <Button className="button-delete" type="submit" onClick={this.deletenews} variant="primary" size="lg" block>
                      Delete
                    </Button>
                  </Col>
                ) : null}
              </Row>
            </form>
          </div>
        </div>
      );
    }
  }

  espacio = () => {
    return (
      <div>
        <Page loader={"comet-spin"} color={"#00cad4"} size={80} duration={0.8}></Page>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default newsfeedChange;
