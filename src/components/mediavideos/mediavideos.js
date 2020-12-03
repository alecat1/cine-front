import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./mediavideos.css";
import swal from "sweetalert";
import Page from "react-page-loading";
import Global from "../../global";
const cookies = new Cookies();

class MediaVideos extends Component {
  state = {
    loading: true,
    urls: [Global.url + "get-image/1", Global.url + "get-image/2", Global.url + "get-image/3", Global.url + "get-image/4", Global.url + "get-image/5", Global.url + "get-image/6"],
    dataLang: {},
  };

  async componentDidMount() {
    let auxload = true;
    const language = await cookies.get("language");
    if(language==undefined){
      Router.push("/index");
    }
    if(language==undefined){
      Router.push("/index");
    }
    async function onPingCall() {
      const token = await cookies.get("token");
      try {
        const res = await axios.post(Global.url + "home", {
          headers: { "access-token": token, "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR" },
        });
        auxload = false;
      } catch (err) {
        if(language=='en'){
          swal("Session Expired", "Please sign-in again", "warning").then(()=>{Router.push("/index");})
        }else if(language=='es'){
          swal("Sesión expirada", "Inicie sesión de nuevo", "warning").then(()=>{Router.push("/index");})
        }else if(language=='por'){
          swal("Sessão expirada", "Faça login novamente", "warning").then(()=>{Router.push("/index");})
        }
      }
    }
    let dataToT = {};
    await axios.get(Global.url + "multi-language").then((res) => {
      dataToT = res.data;
    });
    let auxData = await dataToT[language];
    await onPingCall();
    this.setState({
      dataLang: auxData,
      loading: auxload,
    });
  }

  renderList = () => {
    const { dataLang } = this.state;
    var homeview = this.state.urls.map((url,index) => {
      return (
        <Col className="static-media mx-auto" key={index} xs={12} sm={12} md={6} lg={4} xl={2}>
          <img src={url} width="100%" height="100%"></img>
        </Col>
      );
    });

    return (
      <Container fluid className="containertitulo">
        <div>
          {dataLang.homeWelcome}
          <Row>{homeview}</Row>
        </div>
      </Container>
    );
  };

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

export default MediaVideos;
