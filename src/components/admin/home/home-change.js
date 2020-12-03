import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./home-change.css";
import Global from "../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";
class homeChange extends Component {
  state = {
    selectedFile: null,
    id: 0,
    rol: 0,
    loading: true,
  };

  brandColor = "#282828";

  options = [
    { value: "1", label: "Video 1" },
    { value: "2", label: "Video 2" },
    { value: "3", label: "Video 3" },
    { value: "4", label: "Video 4" },
    { value: "5", label: "Video 5" },
    { value: "6", label: "Video 6" },
  ];
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
  async componentDidMount() {
    let auxload = true;
    let auxrol = 1;
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
    });
  }

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  onChangeButton = (e) => {
    this.setState({
      id: e.value,
    });
    if (e.value != null) {
      document.getElementById("button-upload").classList.remove("button-hide");
    }
  };

  onClickHandler = (e) => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios.post(Global.url + "upload-image/" + this.state.id, data).then((res) => {
      if (res.status == 200) {
        swal("Good job!", "The video " + this.state.id + " has been updated succesfully!", "success").then(function () {
          location.reload();
        });
      } else {
        swal("Error!", "The word has not been updated. Try again", "error");
      }
    });
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
      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Media Home</h1>
            </Col>
          </Row>
          <Row className="ml-2 mr-2">
            <Col lg={6} xl={6}>
              <Form>
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" onChange={this.onChangeHandler} multiple="" />
                </div>
              </Form>
            </Col>
            <Col lg={6} xl={6}>
              <p className="description-p">Select a video to modify on the main page. Videos are arranged from left to right</p>
              <Select options={this.options} styles={this.customStyles} placeholder="Select..." onChange={this.onChangeButton} />
              <Row>
                <Col>
                  <form>
                    <Button id="button-upload" className="mt-2 button-hide" variant="success" onClick={this.onClickHandler} block>
                      Update
                    </Button>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
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

export default homeChange;
