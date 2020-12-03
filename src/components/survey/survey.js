import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl, Container, Card } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./survey.css";
import Global from "../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class survey extends Component {
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
    } else if (rol == 1) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else {
      return (
        <div className="containertitulo">
          <Container className="margin--container-adminm">
            <Col lg={12} xl={12}>
              <iframe src="https://script.google.com/macros/s/AKfycbzU_WvvoJEfzYqrnPoN7HUK69cmp2rD2ZC2afUKCQfZdCu0HYFA/exec?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">
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

export default survey;
