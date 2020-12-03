import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./cultural-new.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class glossaryNew extends Component {
  state = {
    status: null,
    data: [],
    optionsCountry: [],
    optionsType: [],
    numberSection: 0,
    country: "",
    control: null,
    selectedFile: [],
    nameSelectedFile: null,
    rol: 0,
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
        auxload = false;
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
    this.getInfo();
  }

  getInfo = async () => {
    await axios.get(Global.url + "cultural").then(async (res) => {
      await this.setState({
        status: "success",
        data: res.data,
      });
    });
    await axios.get(Global.url + "cultural-carrousel").then(async (res) => {
      await this.setState({
        status: "success",
        carrousel: res.data,
      });
    });
    let Countries = [];
    let ArrayCounstries = this.state.data.map((item) => {
      Countries.push(item.country);
    });
    Countries = Countries.filter((item, index) => Countries.indexOf(item) == index);

    this.setState({
      optionsCountry: Countries.map((item, index) => {
        let json_arr = {};
        json_arr["id"] = index;
        json_arr["value"] = item;
        json_arr["label"] = item;
        return JSON.parse(JSON.stringify(json_arr));
      }),
      optionsType: [
        { id: 0, value: "principal", label: "Principal" },
        { id: 1, value: "none", label: "Main Title" },
        { id: 2, value: "img", label: "Imagen" },
        { id: 3, value: "carousel", label: "Carousel" },
      ],
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

  handleType = (e) => {
    if (e.value == "principal") {
      this.setState({ control: "principal" });
      document.getElementById("button-upload").classList.add("button-hide");
    } else if (e.value == "none") {
      this.setState({ control: "none" });
      document.getElementById("button-upload").classList.remove("button-hide");
    } else if (e.value == "img") {
      this.setState({ control: "img" });
      document.getElementById("button-upload").classList.add("button-hide");
    } else {
      this.setState({ control: "carousel" });
      document.getElementById("button-upload").classList.add("button-hide");
    }
  };

  handleCountry = (e) => {
    let filter = [];
    this.state.data.map((item) => {
      if (item.country == e.value && item.country !== undefined) {
        filter.push(item.section);
      }
    });
    let numeromayor = 0;
    for (let index = 0; index < filter.length; index++) {
      if (filter[index] > numeromayor) {
        numeromayor = filter[index];
      }
    }
    this.setState({
      numberSection: numeromayor + 1,
      country: e.value,
    });
  };

  onChangeHandler = async (e) => {
    if (e.target.files.length >= 1) {
      await this.setState({
        selectedFile: e.target.files,
      });
      document.getElementById("button-upload").classList.remove("button-hide");
    } else {
      document.getElementById("button-upload").classList.add("button-hide");
    }
  };

  numberRef = React.createRef();
  tittleRef = React.createRef();

  handleUpSection = (e) => {
    e.preventDefault();
    if (this.state.control == "none" && this.numberRef.current.value !== "" && this.state.country !== "" && this.tittleRef.current.value !== "") {
      let formData = {
        country: this.state.country,
        title: this.tittleRef.current.value,
        section: this.numberRef.current.value,
        type: this.state.control,
      };
      axios.post(Global.url + "upload-cultural/", formData).then((res) => {
        if (res.status == 200) {
          swal("Good job!", "The Section has been updated succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error with the Section, please check and try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else if (this.state.control == "principal" && this.state.country !== "" && this.state.selectedFile.length >= 1) {
      let formData = new FormData();
      let files = this.state.selectedFile;
      let namesToShow = "";
      for (let i = 0; i < files.length; i++) {
        if (i == 0) {
          namesToShow = files[i].name;
        } else {
          namesToShow = namesToShow + ", " + files[i].name;
        }
        formData.append(`file[${i}]`, files[i]);
      }
      formData.append("type", this.state.control);
      formData.append("country", this.state.country);
      formData.append("section", 0);
      formData.append("title", "Principal");
      axios.post(Global.url + "upload-cultural/", formData).then((res) => {
        if (res.status == 200) {
          swal("Good job!", "The file " + namesToShow + " has been updated succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error with the file, please check and try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else if ((this.state.control == "img" || this.state.control == "carousel") && this.state.country !== "" && this.state.selectedFile.length >= 1 && this.numberRef.current.value !== "" && this.tittleRef.current.value !== "") {
      let formData = new FormData();
      let files = this.state.selectedFile;
      let namesToShow = "";
      for (let i = 0; i < files.length; i++) {
        if (i == 0) {
          namesToShow = files[i].name;
        } else {
          namesToShow = namesToShow + ", " + files[i].name;
        }
        formData.append(`file[${i}]`, files[i]);
      }
      formData.append("type", this.state.control);
      formData.append("country", this.state.country);
      formData.append("section", this.numberRef.current.value);
      formData.append("title", this.tittleRef.current.value);
      axios.post(Global.url + "upload-cultural/", formData).then((res) => {
        if (res.status == 200) {
          swal("Good job!", "The file " + namesToShow + " has been updated succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error with the file, please check and try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else {
      swal("Warning!", "Please, check the fields or the drag and drop and try again", "warning").then(function () {
        location.reload();
      });
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
      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Add New Cultural</h1>
            </Col>
          </Row>
          <div className="container-card-from-cultural-new">
            <form onSubmit={this.sendword}>
              <Row className="mx-auto mt-3">
                <Col lg={4} xl={4}>
                  <label htmlFor="basic-url">Country</label>
                  <Select options={this.state.optionsCountry} styles={this.customStyles} placeholder={<div>Select the country</div>} onChange={this.handleCountry} />
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Type</label>
                  <Select options={this.state.optionsType} styles={this.customStyles} placeholder={<div>Select the type your section</div>} onChange={this.handleType} />
                </Col>
                {this.state.control != "principal" ? (
                  <Col lg={2} xl={2}>
                    <label htmlFor="basic-url">Section</label>
                    <InputGroup className="mb-3">
                      <FormControl type="number" value={this.state.numberSection} placeholder="Number section" aria-label="Username" aria-describedby="basic-addon1" ref={this.numberRef} readOnly />
                    </InputGroup>
                  </Col>
                ) : null}
                {this.state.control != "principal" ? (
                  <Col lg={3} xl={3}>
                    <label htmlFor="basic-url">Tittle Section</label>
                    <InputGroup className="mb-3">
                      <FormControl placeholder="Please type tittle section" aria-label="Username" aria-describedby="basic-addon1" ref={this.tittleRef} />
                    </InputGroup>
                  </Col>
                ) : null}
              </Row>
              {this.state.control == "img" ? (
                <Row className="mx-auto mt-2">
                  <Col lg={6} xl={6}>
                    <div className="form-group files-cultural-new">
                      <label>Upload Your Picture</label>
                      <input type="file" className="form-control" onChange={this.onChangeHandler} />
                    </div>
                  </Col>
                  <Col lg={6} xl={6}>
                    <label htmlFor="basic-url">IMPORTANT</label>
                    <p>Please consider the following information:</p>
                    <p>
                      <b>imagen size 800x600 pixels</b>
                    </p>
                  </Col>
                </Row>
              ) : null}
              {this.state.control == "carousel" ? (
                <Row className="mx-auto mt-2">
                  <Col lg={6} xl={6}>
                    <div className="form-group files-cultural-new">
                      <label>Upload Your Picture</label>
                      <input type="file" className="form-control" onChange={this.onChangeHandler} multiple />
                    </div>
                  </Col>
                  <Col lg={6} xl={6}>
                    <label htmlFor="basic-url">IMPORTANT</label>
                    <p>Please consider the following information:</p>
                    <p>
                      <b>imagen size 800x600 pixels</b>
                    </p>
                  </Col>
                </Row>
              ) : null}
              {this.state.control == "principal" ? (
                <Row className="mx-auto mt-2">
                  <Col lg={6} xl={6}>
                    <div className="form-group files-cultural-new">
                      <label>Upload Your Picture</label>
                      <input type="file" className="form-control" onChange={this.onChangeHandler} />
                    </div>
                  </Col>
                  <Col lg={6} xl={6}>
                    <label htmlFor="basic-url">IMPORTANT</label>
                    <p>Please consider the following information:</p>
                    <p>
                      <b>imagen size 348x298 pixels</b>
                    </p>
                  </Col>
                </Row>
              ) : null}
              <Row className="mx-auto justify-content-end">
                <Col lg={3} xl={3}>
                  <Button id="button-upload" className="button--save-glossary button-hide" type="submit" variant="primary" onClick={this.handleUpSection} size="lg" block>
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

export default glossaryNew;
