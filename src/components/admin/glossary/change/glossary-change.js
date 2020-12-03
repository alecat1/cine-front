import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./glossary-change.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class glossaryNew extends Component {
  state = {
    words: [],
    word: {},
    selectValue: "",
    selectValue2: "",
    name: "",
    status: "",
    category: "",
    country: "",
    description: "",
    id_word: "",
    control: "",
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

  changeSelectCountry = (e) => {
    this.setState({ selectValue: e.value });
  };
  changeSelectWord = async (e) => {
    this.setState({ selectValue: e.value });
    let arraywords = await this.state.words.map((word) => {
      let json_arr = {};
      json_arr["id_word"] = word[0];
      json_arr["name"] = word[1];
      json_arr["description"] = word[2];
      json_arr["category"] = word[3];
      json_arr["country"] = word[4];
      return JSON.parse(JSON.stringify(json_arr));
    });

    for (let index = 0; index < arraywords.length; index++) {
      if (arraywords[index].id_word == e.id) {
        await this.setState({
          category: arraywords[index].category,
          description: arraywords[index].description,
          country: arraywords[index].country,
          id_word: arraywords[index].id_word,
          name: arraywords[index].name,
        });
      }
    }
    document.getElementsByClassName("form-control")[0].value = this.state.name;
    document.getElementsByClassName("form-control")[1].value = this.state.category;
    document.getElementsByClassName("form-control")[2].value = this.state.description;
  };

  nombreRef = React.createRef();
  categoryRef = React.createRef();
  descriptionRef = React.createRef();

  sendAjax = (e) => {
    e.preventDefault();

    if (this.state.control == 1 && this.nombreRef.current.value !== "") {
      this.state.word = {
        name: this.nombreRef.current.value,
        category: this.categoryRef.current.value,
        description: this.descriptionRef.current.value,
        country: this.state.country,
        id: this.state.id_word,
        users_id: this.state.id_db,
        estado: 2,
      };
      axios.post(Global.url + "admindiccionario", this.state.word).then((res) => {
        if (res.status == 200) {
          this.setState({
            status: "success",
          });
          swal("Good job!", "The word has been updated succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
          swal("Error!", "The word has not been updated. Try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else if (this.state.control == 2 && this.nombreRef.current.value !== "") {
      this.state.word = {
        id: this.state.id_word,
        estado: 3,
      };
      axios.post(Global.url + "admindiccionario", this.state.word).then((res) => {
        if (res.status == 200) {
          this.setState({
            status: "success",
          });
          swal("Good job!", "The word has been deleted succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
          swal("Error!", "The word has not been deleted. Try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else {
      swal("Warning!", "Please, fill all the fields and try again", "warning").then(function () {
        location.reload();
      });
    }
  };

  updatedword = (e) => {
    this.setState({
      control: 1,
    });
  };

  deleteword = (e) => {
    this.setState({
      control: 2,
    });
  };

  callThis = (e) => {
    this.setState({
      country: e.value,
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
      let listWords = [];
      let listCountry = [];
      let uniqueCountry = [];
      var options1 = [];
      var options2 = [];
      const ArrayWords = this.state.words.map((word) => {
        let json_arr = {};
        json_arr["id_word"] = word[0];
        json_arr["name"] = word[1];
        json_arr["description"] = word[2];
        json_arr["category"] = word[3];
        json_arr["country"] = word[4];
        listCountry.push(word[4]);
        JSON.parse(options1.push({ id: word[0], value: word[0], label: word[1] }));
        return JSON.parse(JSON.stringify(json_arr));
      });

      for (var i = 0; i < listCountry.length; i++) {
        if (uniqueCountry.indexOf(listCountry[i]) === -1) {
          uniqueCountry.push(listCountry[i]);
        }
      }
      let ind = 1;
      uniqueCountry.forEach((element) => {
        JSON.parse(options2.push({ value: element, label: element }));
        ind = ind + 1;
      });

      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Modify/Delete Word</h1>
            </Col>
          </Row>
          <div className="container-card-from-glossary-change">
            <form onSubmit={this.sendAjax}>
              <Row className="mx-auto mt-3">
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Word</label>
                  <Select options={options1} styles={this.customStyles} placeholder={<div>Select or type the word</div>} onChange={this.changeSelectWord} />
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Name word</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the name" contentEditable="true" ref={this.nombreRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Category</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the category" contentEditable="true" ref={this.categoryRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Country</label>
                  <Select options={options2} styles={this.customStyles} value={{ value: this.state.country, label: this.state.country }} placeholder={<div>Country</div>} onChange={this.callThis} />
                </Col>
              </Row>
              <Row className="mx-auto mt-2">
                <Col lg={12} xl={12}>
                  <div>
                    <label htmlFor="basic-url">Description</label>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows="6" placeholder="Please type the description" ref={this.descriptionRef} />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row className="mx-auto justify-content-end">
                <Col lg={3} xl={3}>
                  <Button className="button-change" type="submit" variant="primary" onClick={this.updatedword} size="lg" block>
                    Update
                  </Button>
                </Col>
                <Col lg={3} xl={3}>
                  <Button className="button-delete" type="submit" onClick={this.deleteword} variant="primary" size="lg" block>
                    Delete
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
