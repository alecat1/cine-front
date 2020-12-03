import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./glossary-new.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class glossaryNew extends Component {
  state = {
    words: [],
    selectedFile: null,
    selectValue: "",
    word: {},
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
  }

  componentWillMount() {
    this.getWords();
  }

  getWords = async () => {
    const datos = {
      name: "",
      category: "",
      country: "",
    };
    await axios.post(Global.url + "diccionario", datos).then(async (res) => {
      await this.setState({
        words: res.data,
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

  callThis = (e) => {
    this.setState({ selectValue: e.value });
  };

  nombreRef = React.createRef();
  categoryRef = React.createRef();
  descriptionRef = React.createRef();

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };
  sendword = (e) => {
    e.preventDefault();
    if (this.nombreRef.current.value !== "" && this.categoryRef.current.value !== "" && this.descriptionRef.current.value !== "" && this.state.selectValue !== "" && this.state.selectedFile == null) {
      this.state.word = {
        name: this.nombreRef.current.value,
        category: this.categoryRef.current.value,
        description: this.descriptionRef.current.value,
        country: this.state.selectValue,
        users_id: this.state.id_db,
        estado: 1,
      };
      axios.post(Global.url + "admindiccionario", this.state.word).then((res) => {
        if (res.status == 200) {
          this.setState({
            status: "success",
          });
          swal("Good job!", "The word has been inserted succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
          swal("Error!", "The word has not been inserted. Try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else if (this.state.selectedFile !== null && this.nombreRef.current.value == "" && this.categoryRef.current.value == "" && this.descriptionRef.current.value == "" && this.state.selectValue == "") {
      if (this.state.selectedFile.size !== 0) {
        const data = new FormData();
        data.append("file", this.state.selectedFile);
        axios.post(Global.url + "exceltodic/" + this.state.id_db, data).then((res) => {
          if (res.status == 200) {
            swal("Good job!", "The file has been updated succesfully!", "success").then(function () {
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
      let listCountry = [];
      let uniqueCountry = [];
      var options = [];
      const ArrayWords = this.state.words.map((word) => {
        return listCountry.push(word[4]);
      });

      for (var i = 0; i < listCountry.length; i++) {
        if (uniqueCountry.indexOf(listCountry[i]) === -1) {
          uniqueCountry.push(listCountry[i]);
        }
      }
      let ind = 1;
      uniqueCountry.forEach((element) => {
        JSON.parse(options.push({ id: ind, value: element, label: element }));
        ind = ind + 1;
      });
      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Add New Word</h1>
            </Col>
          </Row>
          <div className="container-card-from-glossary-new">
            <form onSubmit={this.sendword}>
              <Row className="mx-auto mt-3">
                <Col lg={6} xl={6}>
                  <label htmlFor="basic-url">Word</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type new word" aria-label="Username" aria-describedby="basic-addon1" ref={this.nombreRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Category</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the category" ref={this.categoryRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Country</label>
                  <Select options={options} styles={this.customStyles} placeholder={<div>Select the country</div>} onChange={this.callThis} />
                </Col>
              </Row>
              <Row className="mx-auto mt-2">
                <Col lg={6} xl={6}>
                  <div>
                    <label htmlFor="basic-url">Description</label>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows="6" placeholder="Please type the description" ref={this.descriptionRef} />
                    </Form.Group>
                  </div>
                </Col>
                <Col lg={6} xl={6}>
                  <Form>
                    <div className="form-group files-glossary-new">
                      <label>Upload Your File </label>
                      <input type="file" className="form-control" onChange={this.onChangeHandler} multiple="" />
                    </div>
                  </Form>
                </Col>
              </Row>
              <Row className="mx-auto justify-content-end">
                <Col lg={3} xl={3}>
                  <Button className="button--save-glossary" type="submit" variant="primary" size="lg" block>
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
