import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { Cookies } from "react-cookie";
import Router from "next/router";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import axios from "axios";
import swal from "sweetalert";
import "./videos.css";
const cookies = new Cookies();
import Page from "react-page-loading";
import Global from "../../global";
import { Player, BigPlayButton } from "video-react";

const animatedComponents = makeAnimated();

class Videos extends Component {
  state = {
    status: null,
    data: [],
    loading: true,
    videos: [],
    urlState: "",
    selectState: "",
    searchState: "",
    dataLang: {},
  };

  async componentDidMount() {
    let auxload = true;
    let auxurl = window.location.search;
    const language = await cookies.get("language");
    if(language==undefined){
      Router.push("/index");
    }
    async function onPingCall() {
      const token = await cookies.get("token");
      try {
        const res = await axios.post(Global.url + "home", {
          headers: {
            "access-token": token,
            "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR",
          },
        });
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
    await axios.get(Global.url + "video").then(async (res) => {
      await this.setState({
        videos: res.data,
        auxvideos: res.data,
      });
    });
    auxload = await false;
    this.setState({
      loading: auxload,
      urlState: auxurl,
      dataLang: auxData,
    });
  }

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
  selectChange = async (e) => {
    const { dataLang } = this.state;
    if (e.value == dataLang.selectAll) {
      await history.pushState(null, "Tiktok Web Site - Videos", "videos");
      await this.setState({
        urlState: "",
        selectState: e.value,
      });
    } else {
      await this.setState({
        selectState: e.value,
      });
    }
  };
  searchChange = async (e) => {
    await this.setState({
      searchState: e.target.value,
    });
  };
  renderList = () => {
    const { dataLang } = this.state;
    const { videos } = this.state;
    const { urlState } = this.state;
    const { selectState } = this.state;
    const { searchState } = this.state;
    var options = [{ value: dataLang.selectAll, label: dataLang.selectAll }];
    var auxVideos = [];
    videos.forEach((element1) => {
      let exist = false;
      let aux = { value: element1.lob, label: element1.lob };
      options.forEach((element2) => {
        if (element2.value == element1.lob) {
          exist = true;
        }
      });
      if (!exist) {
        options.push(aux);
      }
    });
    let selectURL = [];
    let auxUrl = urlState.split("?");
    let regex = /%20/g;
    let regex2 = /%27/g;
    let regexa = /%C3%A1/g;
    let regexe = /%C3%A9/g;
    let regexi = /%C3%AD/g;
    let regexo = /%C3%B3/g;
    let regexu = /%C3%BA/g;
    if (auxUrl[0] == "" && auxUrl[1] == undefined) {
      selectURL = videos;
    } else {
      let auxTitle = auxUrl[1].replace(regex, " ");
      auxTitle = auxTitle.replace(regex2, "'");
      auxTitle = auxTitle.replace(regexa, "á");
      auxTitle = auxTitle.replace(regexe, "é");
      auxTitle = auxTitle.replace(regexi, "í");
      auxTitle = auxTitle.replace(regexo, "ó");
      auxTitle = auxTitle.replace(regexu, "ú");
      videos.forEach((element) => {
        if (element.title == auxTitle) {
          selectURL.push(element);
        }
      });
    }
    let selectArray = [];
    if (selectState == "") {
      selectArray = selectURL;
    } else if (selectState == dataLang.selectAll) {
      selectArray = videos;
    } else {
      selectURL.forEach((element) => {
        if (element.lob == selectState) {
          selectArray.push(element);
        }
      });
    }
    auxVideos = selectArray.filter((element) => {
      return element.title.toLowerCase().indexOf(searchState.toLowerCase()) !== -1;
    });
    return (
      <Container className="container__videos" fluid>
        <Row className="mx-auto">
          <Col lg={6} xl={6}>
            <input className="input__search-videos" id="video_search_bar" placeholder={dataLang.videosSearch} onChange={this.searchChange} />
          </Col>
          <Col lg={6} xl={6}>
            <Select options={options} styles={this.customStyles} placeholder={<div>{dataLang.videosLOB}</div>} onChange={(value) => this.selectChange(value)} />
          </Col>
        </Row>
        <Row className="mx-auto mt-3 mb-5">
          {auxVideos.map((video) => {
            let url = Global.url + "get-video/" + video.id;
            return (
              <Col lg={4} xl={4}>
                <Card className="card__video" key={video.id}>
                  <Player src={url} fluid={false} width={"100%"} height={272}>
                    <BigPlayButton position="center" />
                  </Player>
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <footer className="blockquote-footer">{video.lob}</footer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
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

export default Videos;
