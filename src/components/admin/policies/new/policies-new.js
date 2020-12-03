import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./policies-new.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class policiesNew extends Component {
  state = {
    policies: [],
    selectedFile: null,
    selectValue: "",
    optionsLang: [],
    policie: {},
    status: "",
    rol: 0,
    id_db: null,
    loading: true,
    selectLob: "",
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

  componentWillMount() {
    this.getPolicies();
  }

  getPolicies = async () => {
    await axios.post(Global.url + "politicasall").then(async (res) => {
      await this.setState({
        policy: res.data,
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
  callThisLob = (e) => {
    this.setState({ selectLob: e.value, optionsLang: [] });

    if (e.value == "CCM") {
      this.setState({
        optionsLang: [
          { id: 1, value: "en-en", label: "en-en" },
          { id: 2, value: "en-es", label: "en-es" },
          { id: 3, value: "en-por", label: "en-por" },
        ],
      });
    } else {
      this.setState({
        optionsLang: [
          { id: 1, value: "en-es", label: "en-es" },
          { id: 2, value: "en-por", label: "en-por" },
        ],
      });
    }
  };

  titleRef = React.createRef();
  playbookRef = React.createRef();
  policyRef = React.createRef();
  subpolicyRef = React.createRef();
  decisionRef = React.createRef();
  tagRef = React.createRef();
  languageRef = React.createRef();
  keywordRef = React.createRef();

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };
  sendpolicy = (e) => {
    e.preventDefault();
    if (
      this.titleRef.current.value !== "" &&
      this.titleRef.current.value !== "" &&
      this.playbookRef.current.value !== "" &&
      this.policyRef.current.value !== "" &&
      this.subpolicyRef.current.value !== "" &&
      this.decisionRef.current.value !== "" &&
      this.tagRef.current.value !== "" &&
      this.keywordRef.current.value !== "" &&
      this.state.selectValue !== "" &&
      this.state.selectLob !== "" &&
      this.state.selectedFile == null
    ) {
      this.state.policy = {
        title: this.titleRef.current.value,
        playbook: this.playbookRef.current.value,
        policy: this.policyRef.current.value,
        subpolicy: this.subpolicyRef.current.value,
        decision: this.decisionRef.current.value,
        tag: this.tagRef.current.value,
        keyword: this.keywordRef.current.value,
        language: this.state.selectValue,
        users_id: this.state.id_db,
        lob: this.state.selectLob,
        estado: 1,
      };
      axios.post(Global.url + "adminpoliticas", this.state.policy).then((res) => {
        if (res.status == 200) {
          this.setState({
            status: "success",
          });
          swal("Good job!", "The policy has been inserted succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
          swal("Error!", "The policy has not been inserted. Try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else if (
      this.state.selectedFile !== null &&
      this.titleRef.current.value == "" &&
      this.titleRef.current.value == "" &&
      this.playbookRef.current.value == "" &&
      this.policyRef.current.value == "" &&
      this.subpolicyRef.current.value == "" &&
      this.decisionRef.current.value == "" &&
      this.tagRef.current.value == "" &&
      this.keywordRef.current.value == "" &&
      this.state.selectValue == "" &&
      this.state.selectLob == ""
    ) {
      if (this.state.selectedFile.size !== 0) {
        const data = new FormData();
        data.append("file", this.state.selectedFile);
        axios.post(Global.url + "exceltopol/" + this.state.id_db, data).then((res) => {
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
      let listLanguage = [];
      let uniqueLanguage = [];
      var options = [
        { id: 1, value: "en-es", label: "en-es" },
        { id: 2, value: "en-por", label: "en-por" },
      ];
      var options2 = [
        { id: 1, value: "CCM", label: "CCM" },
        { id: 2, value: "CQC", label: "CQC" },
      ];

      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Add New Policy</h1>
            </Col>
          </Row>
          <div className="container-card-from-policies-new">
            <form onSubmit={this.sendpolicy}>
              <Row className="mx-auto mt-3">
                <Col lg={4} xl={4}>
                  <label htmlFor="basic-url">Policy</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type policy" aria-label="Username" aria-describedby="basic-addon1" ref={this.policyRef} />
                  </InputGroup>
                </Col>
                <Col lg={4} xl={4}>
                  <label htmlFor="basic-url">Sub Policy</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type Sub policy" ref={this.subpolicyRef} />
                  </InputGroup>
                </Col>
                <Col lg={4} xl={4}>
                  <label htmlFor="basic-url">Title</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the title policy" aria-label="Username" aria-describedby="basic-addon1" ref={this.titleRef} />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mx-auto mt-2">
                <Col lg={4} xl={4}>
                  <label htmlFor="basic-url">Decision</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type Decision" aria-label="Username" aria-describedby="basic-addon1" ref={this.decisionRef} />
                  </InputGroup>
                </Col>
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">Tag</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type Tag" aria-label="Username" aria-describedby="basic-addon1" ref={this.tagRef} />
                  </InputGroup>
                </Col>
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">Keyword</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type Keyword" aria-label="Username" aria-describedby="basic-addon1" ref={this.keywordRef} />
                  </InputGroup>
                </Col>
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">LOB</label>
                  <Select options={options2} styles={this.customStyles} placeholder={<div>Select the language</div>} onChange={this.callThisLob} />
                </Col>
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">Language</label>
                  <Select options={this.state.optionsLang} styles={this.customStyles} placeholder={<div>Select the language</div>} onChange={this.callThis} />
                </Col>
              </Row>
              <Row className="mx-auto mt-2">
                <Col lg={6} xl={6}>
                  <div>
                    <label htmlFor="basic-url">Playbook</label>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows="4" placeholder="Please type the Playbook" ref={this.playbookRef} />
                    </Form.Group>
                  </div>
                </Col>
                <Col lg={6} xl={6}>
                  <Form>
                    <div className="form-group files-policies-new">
                      <label>Upload Your File </label>
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

export default policiesNew;
