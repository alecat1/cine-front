import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { Cookies } from "react-cookie";
import Router from "next/router";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import axios from "axios";
import swal from "sweetalert";
import "./policies.css";
const cookies = new Cookies();
import Page from "react-page-loading";
import Global from "../../global";

const animatedComponents = makeAnimated();

class Policies extends Component {
  state = {
    policies: [],
    status: null,
    data: [],
    policategory: [],
    loading: true,
  };

  setPor = async (e) => {
    var aux = await e.target;
    const datos = await {
      language: "en-por",
      lob: "CQC",
    };
    await axios.post(Global.url + "politicas", datos).then(async (res) => {
      await this.setState({
        policies: res.data,
        status: "success",
      });
    });

    let elements = await document.getElementsByClassName("flag-icon-lang");
    for (var i = 0; i < elements.length; i++) {
      if (await elements[i].classList.contains("flag-icon-lang-sel")) {
        await elements[i].classList.remove("flag-icon-lang-sel");
      }
    }

    await aux.classList.add("flag-icon-lang-sel");
    let perro = await [];
    await this.state.policies.forEach((element) => {
      if (perro.indexOf(element[3]) == -1) {
        perro.push(element[3]);
      }
    });
    await this.setState({
      policategory: perro,
    });
    if (document.getElementsByClassName(" css-1uccc91-singleValue").length > 0) {
      document.getElementsByClassName(" css-1uccc91-singleValue")[0].innerText = await "Select All";
    }
  };
  setEs = async (e) => {
    var aux = await e.target;
    const datos = {
      language: "en-es",
      lob: "CQC",
    };
    await axios.post(Global.url + "politicas", datos).then(async (res) => {
      await this.setState({
        policies: res.data,
        status: "success",
      });
    });

    let elements = await document.getElementsByClassName("flag-icon-lang");
    for (var i = 0; i < elements.length; i++) {
      if (await elements[i].classList.contains("flag-icon-lang-sel")) {
        await elements[i].classList.remove("flag-icon-lang-sel");
      }
    }

    await aux.classList.add("flag-icon-lang-sel");
    let perro = await [];
    await this.state.policies.forEach((element) => {
      if (perro.indexOf(element[3]) == -1) {
        perro.push(element[3]);
      }
    });
    await this.setState({
      policategory: perro,
    });
    if (document.getElementsByClassName(" css-1uccc91-singleValue").length > 0) {
      document.getElementsByClassName(" css-1uccc91-singleValue")[0].innerText = await "Select All";
    }
  };
  async componentDidMount() {
    let auxload = true;
    async function onPingCall() {
      const token = await cookies.get("token");
      try {
        const res = await axios.post(Global.url + "home", {
          headers: {
            "access-token": token,
            "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR",
          },
        });
        auxload = false;
      } catch (err) {
        swal("Session Expired", "Please sign-in again", "warning");
        await Router.push("/index");
      }
    }
    await onPingCall();
    this.setState({
      loading: auxload,
    });
  }

  renderPolicy = (policy) => {
    const { search } = this.state;
    return policy;
  };

  componentWillMount() {
    this.onLoad();
    this.getPolicies();
  }
  getPolicies = async () => {
    const datos = {
      language: "en-es",
      lob: "CQC",
    };
    await axios.post(Global.url + "politicas", datos).then((res) => {
      this.setState({
        policies: res.data,
        status: "success",
      });
    });

    document.getElementsByClassName("flag-icon-lang")[0].classList.add("flag-icon-lang-sel");

    let perro = [];
    this.state.policies.forEach((element) => {
      if (perro.indexOf(element[3]) == -1) {
        perro.push(element[3]);
      }
    });
    this.setState({
      policategory: perro,
    });
  };

  onchange = async (e) => {
    await this.setState({ search: e.target.value });
    async function refresh() {
      for (var i = 0; i < document.getElementsByClassName("card-body").length; i++) {
        if (document.getElementsByClassName("card-body")[i].childElementCount < 1) {
          document.getElementsByClassName("card-body")[i].parentElement.parentElement.style = await "display:none";
        } else {
          document.getElementsByClassName("card-body")[i].parentElement.parentElement.style = await "display:block";
        }
      }
    }
    await refresh();
  };

  onLoad = (e) => {
    this.setState({ search: " " });
  };

  handleChange = async (e) => {
    if (e.value == "Select All") {
      let perro = [];
      this.state.policies.forEach((element) => {
        if (perro.indexOf(element[3]) == -1) {
          perro.push(element[3]);
        }
      });
      this.setState({
        policategory: perro,
      });
    } else {
      let arraydum = [];
      arraydum[0] = await e.value;
      await this.setState({
        policategory: arraydum,
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
  renderList = () => {
    if (this.state.policies.length >= 1) {
      let listSubPolicies = [];
      let uniqueSubPolicies = [];
      let ListPolice = [];
      let uniquePolice = [];
      var filteredPolicies = [];
      var options = [];
      const { search, policategory } = this.state;
      const ArrayPolicies = this.state.policies.map((policy) => {
        let json_arr = {};
        json_arr["title"] = policy[1];
        json_arr["playbook"] = policy[2];
        json_arr["policy"] = policy[3];
        ListPolice.push(policy[3]);
        json_arr["subpolicy"] = policy[4];
        json_arr["decision"] = policy[5];
        json_arr["tag"] = policy[6];
        json_arr["keyword"] = policy[7];
        return JSON.parse(JSON.stringify(json_arr));
      });
      var filteredPolicies = [];
      var AuxfilteredPolicies = [];
      var AuxfilteredSubPolicies = [];
      policategory.forEach((element) => {
        filteredPolicies = ArrayPolicies.filter((policy) => {
          if (policy.policy == element) {
            AuxfilteredPolicies.push(policy);
            listSubPolicies.push(policy.subpolicy);
          }
        });
      });

      for (var i = 0; i < ListPolice.length; i++) {
        if (uniquePolice.indexOf(ListPolice[i]) === -1) {
          uniquePolice.push(ListPolice[i]);
        }
      }
      let ind = 0;
      JSON.parse(options.push({ id: ind, value: "Select All", label: "Select All" }));
      ind = ind + 1;
      uniquePolice.forEach((element) => {
        JSON.parse(options.push({ id: ind, value: element, label: element }));
        ind = ind + 1;
      });

      var filteredtittle = AuxfilteredPolicies.filter((policy, index) => {
        if (policy.title.toLowerCase().indexOf(search) === -1) {
        }
        return policy.playbook.toLowerCase().indexOf(search) !== -1 || policy.title.toLowerCase().indexOf(search) !== -1 || policy.tag.toLowerCase().indexOf(search) !== -1;
      });

      for (var i = 0; i < listSubPolicies.length; i++) {
        if (uniqueSubPolicies.indexOf(listSubPolicies[i]) === -1) {
          uniqueSubPolicies.push(listSubPolicies[i]);
        }
      }
      var AcordionPolicies = uniqueSubPolicies.map((poli, i) => {
        var arrsubpoli = [];
        let index = 0;
        var listPolicies = filteredtittle.filter((politica) => {
          if (politica.subpolicy == poli) {
            arrsubpoli[index] = politica;
            index = index + 1;
          }
        });
        return (
          <Card key={i}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={i} className="panel-title">
                {poli}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                {arrsubpoli.map((value, j) => {
                  return (
                    <Row className="border-card">
                      <Col lg={8} xl={8}>
                        <div className="style-poli">
                          <h1>{value.title}</h1>
                          <pre>{value.playbook}</pre>
                        </div>
                      </Col>
                      <Col lg={4} xl={4} className="outerDiv border-card-left">
                        <div className="my-4">
                          <p>
                            <b>Tag: </b>
                            {value.tag}
                          </p>
                        </div>
                        <div>
                          <p>
                            <b>Decision: </b>
                            {value.decision}
                          </p>
                        </div>
                        <div>
                          <p>
                            <b>Keyword: </b>
                            {value.keyword}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      });
      return (
        <Container>
          <Row>
            <Col lg={6} xl={6}>
              <div> </div>
            </Col>
            <Col lg={6} xl={6}>
              <div className="flags-content-langs">
                <img src="/assents/icons/lang/spain.svg" className="flag-icon-lang" onClick={this.setEs}></img>
                <img src="/assents/icons/lang/brazil.svg" className="flag-icon-lang" onClick={this.setPor}></img>
              </div>
            </Col>
          </Row>
          <Row className="container-policies">
            <Col>
              <Row className="align-items-center">
                <Col lg={6} xl={6}>
                  <input className="input-searchBar-policies" id="accordion_search_bar" placeholder="Search a word" onChange={this.onchange} />
                </Col>
                <Col lg={6} xl={6}>
                  <Select options={options} styles={this.customStyles} placeholder={<div>Select or type your Policy</div>} onChange={(value) => this.handleChange(value)} />
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <p className="Disclaimer-Parraf">
                    “La Información contenida en esta página es privilegiada y confidencial. El uso de este contenido tiene exclusivamente la intención de ser usado por personal activo de la campaña
                    Tik Tok. Si usted no está autorizado a visualizar este contenido se le notifica que cualquier distribución no autorizada por cualquier medio está estrictamente prohibida y está
                    bajo protección. Si usted obtuvo acceso a esta página por error, por favor comuníquelo inmediatamente a la persona que le compartió el contenido, por favor elimine esta y cualquier
                    otra copia que le pudiesen haber compartido por error de sus sistemas, así como el URL de acceso.”
                  </p>
                </Col>
              </Row> */}
              <Row>
                <Col lg={12} xl={12}>
                  <div className="content-policies">
                    <Accordion defaultActiveKey="0" className="Accordion-poli">
                      {AcordionPolicies}
                    </Accordion>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    } else if (this.state.policies.length === 0 && this.state.status === "success") {
      return (
        <div>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col lg={6} xl={6}></Col>
            <Col lg={6} xl={6}></Col>
          </Row>
          <Row className="container-words">
            <Col lg={4} xl={4}>
              <Row>
                <Col>
                  <div className="div-margin-top"></div>
                </Col>
                <Col lg={12} xl={12} className="center-elements"></Col>
              </Row>
              <Row>
                <Col lg={12} xl={12}></Col>
              </Row>
            </Col>
            <Col lg={8} xl={8}>
              <h2>No hay politicas</h2>
              <p>Todavia no hay contenido en esta seccion</p>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col lg={6} xl={6}></Col>
            <Col lg={6} xl={6}></Col>
          </Row>
          <Row className="container-words">
            <Col lg={4} xl={4}>
              <Row>
                <Col>
                  <div className="div-margin-top"></div>
                </Col>
                <Col lg={12} xl={12} className="center-elements"></Col>
              </Row>
              <Row>
                <Col lg={12} xl={12}></Col>
              </Row>
            </Col>
            <Col lg={8} xl={8}>
              <h2>Cargando...</h2>
              <p>Espere mientras carga el contenido</p>
            </Col>
          </Row>
        </div>
      );
    }
  };
  espacio = () => {
    return (
      <div>
        <Page loader={"comet-spin"} color={"#ea1d52"} size={80} duration={0.8}></Page>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default Policies;
