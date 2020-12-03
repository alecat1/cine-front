import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./newsfeed-new.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class newsfeedNew extends Component {
  state = {
    newsfeed: [],
    selectedFile: null,
    selectValue: "",
    news: {},
    status: "",
    rol: 0,
    id_db: null,
    loading: true,
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
      } catch (err) {}
    }
    await onPingCall();
    await this.setState({
      loading: auxload,
      rol: auxrol,
      id_db: auxid,
    });
  }

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

  callThis = (e) => {
    this.setState({ selectValue: e.value });
  };

  titleRef = React.createRef();
  descriptionRef = React.createRef();

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  sendnews = (e) => {
    e.preventDefault();
    if (this.titleRef.current.value !== "" && this.descriptionRef.current.value !== "" && this.state.selectValue !== "") {
      if (this.state.selectedFile !== null) {
        const data = new FormData();
        data.append("file", this.state.selectedFile);
        data.append("title", this.titleRef.current.value);
        data.append("description", this.descriptionRef.current.value);
        data.append("language", this.state.selectValue);
        data.append("statusimg", 0);
        axios.post(Global.url + "upload-noticias", data).then((res) => {
          if (res.status == 200) {
            this.setState({
              status: "success",
            });
            swal("Good job!", "The News has been inserted succesfully!", "success").then(function () {
              location.reload();
            });
          } else {
            this.setState({
              status: "failed",
            });
            swal("Error!", "The News has not been inserted. Try again", "error");
          }
        });
      } else {
        this.state.newsfeed = {
          title: this.titleRef.current.value,
          description: this.descriptionRef.current.value,
          language: this.state.selectValue,
          users_id: this.state.id_db,
          statusimg: 1,
        };
        axios.post(Global.url + "upload-noticias", this.state.newsfeed).then((res) => {
          if (res.status == 200) {
            this.setState({
              status: "success",
            });
            swal("Good job!", "The News has been inserted succesfully!", "success").then(function () {
              location.reload();
            });
          } else {
            this.setState({
              status: "failed",
            });
            swal("Error!", "The News has not been inserted. Try again", "error");
          }
        });
      }
    } else {
      this.setState({
        status: "failed",
      });
      swal("Warning!", "Fill all the fields. Try again", "warning");
    }
  };

  renderList() {
    const { rol } = this.state;

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
      let listLanguage = [];
      let uniqueLanguage = [];
      var options = [
        { id: 1, value: "es", label: "Spanish" },
        { id: 2, value: "en", label: "English" },
        { id: 3, value: "por", label: "Portugues" },
      ];

      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Add News</h1>
            </Col>
          </Row>
          <div className="container-card-from-newsfeed-new">
            <form onSubmit={this.sendnews}>
              <Row className="mx-auto mt-3">
                <Col lg={4} xl={4}>
                  <label htmlFor="basic-url">Title</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type title" aria-label="Username" aria-describedby="basic-addon1" ref={this.titleRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Language</label>
                  <Select options={options} styles={this.customStyles} placeholder={<div>Select the language</div>} onChange={this.callThis} />
                </Col>
              </Row>
              <Row className="mx-auto mt-3">
                <Col lg={6} xl={6}>
                  <div>
                    <label htmlFor="basic-url">Description</label>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows="4" placeholder="Please type the Description" ref={this.descriptionRef} />
                    </Form.Group>
                  </div>
                  <div>If you want to highlight a word you must put &lt;b&gt; before and &lt;/b&gt; after it.</div>
                </Col>
                <Col lg={6} xl={6}>
                  <Form>
                    <div className="form-group files-newsfeed-new">
                      <label>Upload Your Img/Gif</label>
                      <input type="file" className="form-control" onChange={this.onChangeHandler} multiple="" />
                    </div>
                  </Form>
                </Col>
              </Row>
              <Row className="mx-auto justify-content-end">
                <Col lg={3} xl={3}>
                  <Button className="button--save-policie" type="submit" variant="primary" size="lg" block>
                    Save
                  </Button>
                </Col>
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

export default newsfeedNew;
