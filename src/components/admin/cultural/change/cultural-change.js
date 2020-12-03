import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import ModalImage from "react-modal-image";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./cultural-change.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class culturalChange extends Component {
  state = {
    status: null,
    data: [],
    optionsCountry: [],
    optionsTitle: [],
    optionsType: [],
    optionsName: [],
    imgCarousel: [],
    selectimgCarousel: [],
    selectCountry: null,
    selectTitle: null,
    selectName: null,
    selectSectionNumber: null,
    prewImage: null,
    control: null,
    SelectImage: null,
    SelectImageCarousel: null,
    SelectNameCarousel: null,
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
    let Titles = [];
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
    });
  };

  handleChangeCountry = async (e) => {
    let uniqueTitle = [];
    await this.setState({ selectCountry: e.value, optionsTitle: [] });
    await this.state.data.map((element) => {
      if (uniqueTitle.indexOf(element.title) === -1 && e.value == element.country) {
        uniqueTitle.push(element.title);
      }
    });
    this.setState({
      optionsTitle: uniqueTitle.map((item, index) => {
        let json_arr = {};
        json_arr["id"] = index;
        json_arr["value"] = item;
        json_arr["label"] = item;
        return JSON.parse(JSON.stringify(json_arr));
      }),
    });
  };

  handleChangeTitle = async (e) => {
    await this.setState({ selectTitle: e.value, control: null, prewImage: null });
    let ArrayName = [];
    let ArrayImage = {};
    let ArrayImagePrincipal = {};
    let ArrayAux = [];
    let ArrayCarousel = {};
    let ArrayAux2 = [];

    await this.state.data.map((element) => {
      if (e.value == element.title && e.value == element.name && this.state.selectCountry == element.country) {
        this.setState({ selectSectionNumber: element.section });
      }
      if (ArrayName.indexOf(element.name) === -1 && e.value == element.title && e.value !== element.name && this.state.selectCountry == element.country) {
        ArrayImagePrincipal["id"] = element.id;
        ArrayImagePrincipal["value"] = element.name;
        ArrayImagePrincipal["label"] = element.name;
        ArrayName.push(JSON.parse(JSON.stringify(ArrayImagePrincipal)));
        ArrayAux.push(element.type);
        this.setState({ selectSectionNumber: element.section, selectName: element.name });
        this.state.carrousel.map((e) => {
          if (e.carrousel == element.name) {
            ArrayCarousel["id"] = e.id;
            ArrayCarousel["value"] = e.name;
            ArrayCarousel["label"] = e.name;
            ArrayAux2.push(JSON.parse(JSON.stringify(ArrayCarousel)));
          }
        });
      } else if (ArrayName.indexOf(element.name) === -1 && e.value == element.title && e.value == element.name && this.state.selectCountry == element.country) {
        ArrayAux.push(element.type);
        this.state.carrousel.map((e) => {
          if (e.carrousel == element.name) {
            ArrayCarousel["id"] = e.id;
            ArrayCarousel["value"] = e.name;
            ArrayCarousel["label"] = e.name;
            ArrayAux2.push(JSON.parse(JSON.stringify(ArrayCarousel)));
          }
        });
      }
    });
    for (let index = 0; index < ArrayAux.length; index++) {
      if (ArrayAux.length == 2 && ArrayAux[index] == "img") {
        this.setState({ control: "img" });
      } else if (ArrayAux.length == 2 && ArrayAux[index] == "carrousel") {
        this.setState({ control: "carrousel" });
      } else if (ArrayAux.length == 1 && ArrayAux[index] == "titulo") {
        this.setState({ control: "titulo" });
      }
    }
    await this.state.data.map((element) => {
      if (ArrayName.indexOf(element.name) === -1 && e.value == element.title && e.value !== element.name && this.state.selectCountry == element.country) {
        if (this.state.control == "img" || this.state.control == "carrousel") {
          ArrayImage["id"] = element.id;
          ArrayImage["value"] = element.name;
          ArrayImage["label"] = element.name;
          JSON.parse(JSON.stringify(ArrayImage));
          this.setState({
            prewImage: Global.url + "get-image-cultural/" + ArrayImage.id,
          });
        }
      }
    });

    if (e.value !== "Principal") {
      document.getElementsByClassName("form-control")[0].value = e.value;
    }

    await this.setState({
      optionsName: ArrayName,
      optionsNameCarrousel: ArrayAux2,
      imgCarousel: ArrayAux2,
    });
  };

  handleChangeImage = (e) => {
    this.setState({
      control: "img",
      SelectImage: e.id,
      SelectNameCarousel: e.label,
      prewImage: Global.url + "get-image-cultural/" + e.id,
    });
  };

  handleChangeImageCarrousel = (e) => {
    this.setState({
      SelectImageCarousel: e.id,
      prewImage: Global.url + "get-image-carrousel/" + e.id,
    });
  };

  handleUpImage = async (e) => {
    this.setState({
      selectedFile: e.target.files,
    });
    e.target.files.length >= 1 ? document.getElementById("button-update").classList.remove("button-hide") : document.getElementById("button-update").classList.add("button-hide");
  };

  selectedImage = async (e) => {
    const { selectimgCarousel } = this.state;

    if (document.getElementById(e).lastChild.children[0].classList.contains("carousel-selected")) {
      document.getElementById(e).lastChild.children[0].classList.remove("carousel-selected");
      await this.state.imgCarousel.map((element) => {
        if (element.id == e) {
          let index = selectimgCarousel.indexOf(e);
          selectimgCarousel.splice(index, 1);
        }
      });
    } else {
      document.getElementById(e).lastChild.children[0].classList.add("carousel-selected");
      await this.state.imgCarousel.map((element) => {
        if (element.id == e) {
          selectimgCarousel.push(element);
        }
      });
    }
  };

  nombreRef = React.createRef();
  categoryRef = React.createRef();
  descriptionRef = React.createRef();

  HandleUpInfo = (e) => {
    e.preventDefault();
  };

  handleUpdateSection = async (e) => {
    await e.preventDefault();
    if (this.state.control == "titulo") {
      let formData = await {
        country: this.state.selectCountry,
        title: this.nombreRef.current.value,
        section: this.state.selectSectionNumber,
        type: this.state.control,
      };
      await axios.post(Global.url + "update-cultural/", formData).then((res) => {
        if (res.status == 200) {
          swal("Good job!", "The Section has been updated successfully!", "success").then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error with the Section, please check and try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else if (this.state.control !== "titulo" && this.state.selectCountry !== "" && this.state.selectedFile.length == 1) {
      let formData = await new FormData();
      let files = await this.state.selectedFile;
      let auxNames = [];
      for (let i = 0; i < files.length; i++) {
        await formData.append(`file[${i}]`, files[i]);
        await auxNames.push(files[i].name);
      }
      await this.setState({
        nameSelectedFile: auxNames,
      });
      if (this.state.selectSectionNumber == 0) {
        await formData.append("type", this.state.control);
        await formData.append("title", "Principal");
        await formData.append("name", this.state.selectName);
        await formData.append("country", this.state.selectCountry);
        await formData.append("section", this.state.selectSectionNumber);
        await formData.append("id", this.state.SelectImage);
      } else {
        await formData.append("type", this.state.control);
        await formData.append("title", this.nombreRef.current.value);
        await formData.append("name", this.state.selectName);
        await formData.append("country", this.state.selectCountry);
        await formData.append("section", this.state.selectSectionNumber);
        if (this.state.control == "img") {
          await formData.append("id", this.state.SelectImage);
        } else {
          await formData.append("id", this.state.SelectImageCarousel);
          await formData.append("carName", this.state.SelectNameCarousel);
        }
      }
      await axios.post(Global.url + "update-cultural/", formData).then((res) => {
        let auxmsg = res.data.status;
        if (res.status == 200) {
          swal(
            "Good job!",
            "The file " +
              this.state.nameSelectedFile.map((element) => {
                element.name + ",";
              }) +
              " has been updated succesfully!",
            "success"
          ).then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error with the file, please check and try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else {
      swal("Error!", "Error, please check and try again", "error").then(function () {
        location.reload();
      });
    }
  };
  handleDeleteSection = (e) => {
    e.preventDefault();
    if (this.state.selectCountry !== null && this.state.name !== null && this.state.section !== null && this.state.type !== null) {
      let formData = {
        country: this.state.selectCountry,
        name: this.state.selectName,
        section: this.state.selectSectionNumber,
        type: this.state.control,
      };
      axios.post(Global.url + "delete-cultural/", formData).then((res) => {
        if (res.status == 200) {
          swal("Good job!", "The Section has been delete succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error with the Section, please check and try again", "error").then(function () {
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
      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Modify/Delete Cultural</h1>
            </Col>
          </Row>
          <div className="container-card-from-cultural-change">
            <form onSubmit={this.sendAjax}>
              <Row className="mx-auto mt-3 mb-3">
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">Country</label>
                  <Select options={this.state.optionsCountry} styles={this.customStyles} placeholder={<div>Select country</div>} onChange={this.handleChangeCountry} />
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Tittle Section</label>
                  <Select options={this.state.optionsTitle} styles={this.customStyles} placeholder={<div>Select...</div>} onChange={this.handleChangeTitle} />
                </Col>
                {this.state.selectTitle !== "Principal" && this.state.selectTitle !== null ? (
                  <>
                    <Col lg={4} xl={4}>
                      <label htmlFor="basic-url">Name Section</label>
                      <FormControl placeholder="Please type the name" contentEditable="true" ref={this.nombreRef} />
                    </Col>
                    {this.state.control == "carrousel" ? (
                      <Col lg={3} xl={3}>
                        <label htmlFor="basic-url">Imagen</label>
                        <Select options={this.state.optionsNameCarrousel} styles={this.customStyles} placeholder={<div>Select...</div>} onChange={this.handleChangeImageCarrousel} />
                      </Col>
                    ) : null}
                  </>
                ) : this.state.selectTitle == "Principal" && this.state.selectTitle !== null ? (
                  <Col lg={6} xl={6}>
                    <label htmlFor="basic-url">Image</label>
                    <Select options={this.state.optionsName} styles={this.customStyles} placeholder={<div>Select...</div>} onChange={this.handleChangeImage} />
                  </Col>
                ) : null}
              </Row>
              {this.state.control == "img" ? (
                <Row className="mx-auto mt-3">
                  <Col lg={6} xl={6}>
                    <div className="form-group files-cultural-change">
                      <label>Upload Your Picture</label>
                      <input type="file" className="form-control" onChange={this.handleUpImage} />
                    </div>
                  </Col>
                  <Col lg={6} xl={6} className="mx-auto">
                    <label htmlFor="basic-url">Preview Image</label>
                    <ModalImage className="rounded modal--width" small={this.state.prewImage} large={this.state.prewImage} hideDownload={true} alt={this.state.selectTitle} />
                  </Col>
                </Row>
              ) : null}
              {this.state.control == "carrousel" && this.state.SelectImageCarousel !== null ? (
                <Row className="mx-auto mt-3">
                  <Col lg={6} xl={6}>
                    <div className="form-group files-cultural-change">
                      <label>Upload Your Picture</label>
                      <input type="file" className="form-control" onChange={this.handleUpImage} multiple />
                    </div>
                  </Col>
                  <Col lg={6} xl={6}>
                    <label htmlFor="basic-url">Preview Image</label>
                    <ModalImage className="rounded modal--width" small={this.state.prewImage} large={this.state.prewImage} hideDownload={true} alt={this.state.selectTitle} />
                  </Col>
                </Row>
              ) : null}
              <Row className="mx-auto justify-content-end mb-3">
                {this.state.control == "titulo" ? (
                  <Col lg={3} xl={3}>
                    <Button id="button-update" className="button-change" type="submit" variant="primary" onClick={this.handleUpdateSection} size="lg" block>
                      Update
                    </Button>
                  </Col>
                ) : (
                  <Col lg={3} xl={3}>
                    <Button id="button-update" className="button-change button-hide" type="submit" variant="primary" onClick={this.handleUpdateSection} size="lg" block>
                      Update
                    </Button>
                  </Col>
                )}
                {(this.state.selectTitle !== "Principal" && this.state.selectTitle !== null) || (this.state.selectTitle == "Principal" && this.state.SelectImage !== null) ? (
                  <Col lg={3} xl={3}>
                    <Button className="button-delete" type="submit" onClick={this.handleDeleteSection} variant="primary" size="lg" block>
                      Delete Section
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

export default culturalChange;
