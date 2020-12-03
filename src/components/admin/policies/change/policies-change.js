import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./policies-change.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class policiesNew extends Component {
  state = {
    policies: [],
    policy: {},
    selectValue: "",
    selectValue2: "",
    status: "",
    policy: "",
    subpolicy: "",
    title: "",
    decision: "",
    tag: "",
    language: "",
    keyword: "",
    playbook: "",
    id_policy: "",
    control: "",
    optionsLang: [],
    rol: 0,
    id_db: null,
    loading: true,
    lob: "",
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
        swal("Session Expired", "Please sign-in again", "warning");
        await Router.push("/index");
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
    this.getpolicies();
  }

  getpolicies = async () => {
    const datos = {
      id_policy: "",
      policy: "",
      subpolicy: "",
      Title: "",
      decision: "",
      tag: "",
      language: "",
      keyword: "",
      playbook: "",
      language: "",
    };

    await axios.post(Global.url + "politicasall", datos).then(async (res) => {
      await this.setState({
        policies: res.data,
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

  changeSelectLanguage = (e) => {
    this.setState({ selectValue: e.value });
  };
  changeSelectPolicy = async (e) => {
    let arraypolicies = await this.state.policies.map((policy) => {
      let json_arr = {};
      json_arr["id_policy"] = policy[0];
      json_arr["title"] = policy[1];
      json_arr["playbook"] = policy[2];
      json_arr["policy"] = policy[3];
      json_arr["subpolicy"] = policy[4];
      json_arr["decision"] = policy[5];
      json_arr["tag"] = policy[6];
      json_arr["keyword"] = policy[7];
      json_arr["language"] = policy[8];
      json_arr["lob"] = policy[9];
      return JSON.parse(JSON.stringify(json_arr));
    });

    for (let index = 0; index < arraypolicies.length; index++) {
      if (arraypolicies[index].id_policy == e.id) {
        if (arraypolicies[index].lob == "CCM") {
          await this.setState({
            optionsLang: [
              { id: 1, value: "en-en", label: "en-en" },
              { id: 2, value: "en-es", label: "en-es" },
            ],
          });
        } else {
          await this.setState({
            optionsLang: [
              { id: 1, value: "en-es", label: "en-es" },
              { id: 2, value: "en-por", label: "en-por" },
            ],
          });
        }

        await this.setState({
          title: arraypolicies[index].title,
          playbook: arraypolicies[index].playbook,
          policy: arraypolicies[index].policy,
          id_policy: arraypolicies[index].id_policy,
          subpolicy: arraypolicies[index].subpolicy,
          decision: arraypolicies[index].decision,
          tag: arraypolicies[index].tag,
          keyword: arraypolicies[index].keyword,
          language: arraypolicies[index].language,
          lob: arraypolicies[index].lob,
        });
      }
    }
    document.getElementsByClassName("form-control")[0].value = this.state.title;
    document.getElementsByClassName("form-control")[1].value = this.state.policy;
    document.getElementsByClassName("form-control")[2].value = this.state.subpolicy;
    document.getElementsByClassName("form-control")[3].value = this.state.decision;
    document.getElementsByClassName("form-control")[4].value = this.state.tag;
    document.getElementsByClassName("form-control")[5].value = this.state.keyword;
    document.getElementsByClassName("form-control")[6].value = this.state.playbook;
  };

  titleRef = React.createRef();
  policyRef = React.createRef();
  subpolicyRef = React.createRef();
  decisionRef = React.createRef();
  tagRef = React.createRef();
  keywordRef = React.createRef();
  playbookRef = React.createRef();

  sendAjax = (e) => {
    e.preventDefault();

    if (this.state.control == 1 && this.titleRef.current.value !== "") {
      this.state.policy = {
        title: this.titleRef.current.value,
        policy: this.policyRef.current.value,
        subpolicy: this.subpolicyRef.current.value,
        decision: this.decisionRef.current.value,
        tag: this.tagRef.current.value,
        keyword: this.keywordRef.current.value,
        playbook: this.playbookRef.current.value,
        language: this.state.language,
        id: this.state.id_policy,
        users_id: this.state.id_db,
        lob: this.state.lob,
        estado: 2,
      };

      axios.post(Global.url + "adminpoliticas", this.state.policy).then((res) => {
        if (res.data == "Registro modificado") {
          this.setState({
            status: "success",
          });
          swal("Good job!", "The policy has been updated succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
          swal("Error!", "The policy has not been updated. Try again", "error").then(function () {
            location.reload();
          });
        }
      });
    } else if (this.state.control == 2 && this.titleRef.current.value !== "") {
      this.state.policy = {
        id: this.state.id_policy,
        estado: 3,
      };
      axios.post(Global.url + "adminpoliticas", this.state.policy).then((res) => {
        if (res.data == "Registro eliminado") {
          this.setState({
            status: "success",
          });
          swal("Good job!", "The Policy has been deleted succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
          swal("Error!", "The Policy has not been deleted. Try again", "error").then(function () {
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

  updatedpolicy = (e) => {
    this.setState({
      control: 1,
    });
  };

  deletepolicy = (e) => {
    this.setState({
      control: 2,
    });
  };

  callThis = (e) => {
    this.setState({
      language: e.value,
    });
  };
  callThisLob = (e) => {
    this.setState({
      lob: e.value,
    });
  };

  handleChange(value) {
    this.setState({ value: value });
  }
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
      let listpolicies = [];
      let listLanguage = [];
      let uniqueLanguage = [];
      var options1 = [];
      var options2 = [];
      var options3 = [
        { id: 1, value: "CCM", label: "CCM" },
        { id: 2, value: "CQC", label: "CQC" },
      ];
      const Arraypolicies = this.state.policies.map((policy) => {
        let json_arr = {};
        json_arr["id_policy"] = policy[0];
        json_arr["title"] = policy[1];
        json_arr["playbook"] = policy[2];
        json_arr["policy"] = policy[3];
        json_arr["subpolicy"] = policy[4];
        json_arr["decision"] = policy[5];
        json_arr["tag"] = policy[6];
        json_arr["keyword"] = policy[7];
        json_arr["language"] = policy[8];
        json_arr["lob"] = policy[9];
        listLanguage.push(policy[8]);

        JSON.parse(options1.push({ id: policy[0], value: policy[0], label: policy[1] }));
        return JSON.parse(JSON.stringify(json_arr));
      });

      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Modify/Delete Policy</h1>
            </Col>
          </Row>
          <div className="container-card-from-policies-change">
            <form onSubmit={this.sendAjax}>
              <Row className="mx-auto mt-3">
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Title Policy</label>
                  <Select options={options1} styles={this.customStyles} placeholder={<div>Select or type the title policy</div>} onChange={this.changeSelectPolicy} />
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Title Policy</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the Title Policy" contentEditable="true" ref={this.titleRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Policy</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the Policy" contentEditable="true" ref={this.policyRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Sub Policy</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the Sub Policy" contentEditable="true" ref={this.subpolicyRef} />
                  </InputGroup>
                </Col>
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">Decision</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the Decision" contentEditable="true" ref={this.decisionRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Tag</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the Tag" contentEditable="true" ref={this.tagRef} />
                  </InputGroup>
                </Col>
                <Col lg={3} xl={3}>
                  <label htmlFor="basic-url">Keyword</label>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Please type the Keyword" contentEditable="true" ref={this.keywordRef} />
                  </InputGroup>
                </Col>
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">Lob</label>
                  <Select options={options3} styles={this.customStyles} value={{ value: this.state.lob, label: this.state.lob }} placeholder={<div>Language</div>} onChange={this.callThisLob} />
                </Col>
                <Col lg={2} xl={2}>
                  <label htmlFor="basic-url">Language</label>
                  <Select options={this.state.optionsLang} styles={this.customStyles} value={{ value: this.state.language, label: this.state.language }} placeholder={<div>Language</div>} onChange={this.callThis} />
                </Col>
              </Row>
              <Row className="mx-auto mt-1">
                <Col lg={12} xl={12}>
                  <div>
                    <label htmlFor="basic-url">Playbook</label>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows="6" placeholder="Please type the playbook" ref={this.playbookRef} />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row className="mx-auto justify-content-end">
                <Col lg={3} xl={3}>
                  <Button className="button-change" type="submit" variant="primary" onClick={this.updatedpolicy} size="lg" block>
                    Update
                  </Button>
                </Col>
                <Col lg={3} xl={3}>
                  <Button className="button-delete" type="submit" onClick={this.deletepolicy} variant="primary" size="lg" block>
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

export default policiesNew;
