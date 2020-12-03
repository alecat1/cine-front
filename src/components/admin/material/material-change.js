import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./material-change.css";
import Global from "../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";
class materialChange extends Component {
  state = {
    selectedFile: null,
    nameSelectedFile: null,
    pdfs: [],
    id: 0,
    labelpdf: "",
    rol: 0,
    loading: true,
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

    await axios.post(Global.url + "material").then(async (res) => {
      let aux = [];
      res.data.forEach((element) => {
        JSON.parse(aux.push({ id: element[0], value: element[0], label: element[1] }));
      });
      await this.setState({
        pdfs: aux,
      });
    });
  }

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
      nameSelectedFile: e.target.files[0].name,
    });
    if (e.target.files[0] != null) {
      document.getElementById("button-upload").classList.remove("button-hide");
    }
  };

  onChangeButton = (e) => {
    this.setState({
      id: e.value,
      labelpdf: e.label,
    });
    if (e.value != null) {
      document.getElementById("button-delete").classList.remove("button-hide");
    }
  };

  onClickUpload = (e) => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios.post(Global.url + "upload-pdf-material/", data).then((res) => {
      if (res.status == 200) {
        swal("Good job!", "The file " + this.state.nameSelectedFile + " has been updated succesfully!", "success").then(function () {
          location.reload();
        });
      } else {
        swal("Error!", "Error with the file, please check and try again", "error");
      }
    });
  };
  onClickDelete = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.post(Global.url + "delete-pdf/" + this.state.id).then((res) => {
          if (res.status == 200) {
            swal("Good job!", "The file " + this.state.labelpdf + " has been delete succesfully!", "success").then(function () {
              location.reload();
            });
          } else {
            swal("Error!", "The word has not been updated. Try again", "error");
          }
        });
      } else {
        swal("Your file is safe!");
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
              <h1>Material Training</h1>
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
              <Row>
                <Col>
                  <form>
                    <Button id="button-upload" className="button-hide" variant="info" onClick={this.onClickUpload} block>
                      Upload
                    </Button>
                  </form>
                </Col>
              </Row>
            </Col>
            <Col lg={6} xl={6}>
              <p className="description-p">Select the material you want to delete on the material page.</p>
              <Select options={this.state.pdfs} styles={this.customStyles} placeholder="Select..." onChange={this.onChangeButton} />
              <Row>
                <Col>
                  <form>
                    <Button id="button-delete" className="mt-2 button-hide" variant="danger" onClick={this.onClickDelete} block>
                      Delete
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

export default materialChange;
