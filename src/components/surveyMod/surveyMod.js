import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl, Container, Card } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./surveyMod.css";
import Global from "../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class surveyMod extends Component {
  state = {
    loading: true,
    rol: 0,
    id_db: null,
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
    });
  }

  renderList() {
    const { rol } = this.state;
    //0 null, 1 usuario, 2 administrador, 3 trainer, 4 rrhh, 5 staff
    if (rol == 0) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else {
      return (
        <div className="containertitulo">
          <Container className="margin--container-adminmm">
            <Col lg={20} xl={20}>
              <iframe src="https://script.google.com/macros/s/AKfycbyhtocc824KqqoMRxdfMw7nsn1sKZ7XWfPlR6ndGGiSB80RX7jn/exec?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0"> 
                Loading…
              </iframe>
            </Col>
          </Container>
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

export default surveyMod;
