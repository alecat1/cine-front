import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./videos-change.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";
import { Player, BigPlayButton } from "video-react";

class videosChange extends Component {
  state = {
    policies: [],
    selectedFile: null,
    selectValue: "",
    nameSelectedFile: null,
    lob: [],
    id: 0,
    labelpdf: "",
    videos: [],
    selectState: "",
    idvideos: [],
    namevideos: [],
    rol: 0,
    loading: true,
    title: [],
    titleupload: [],
    lobupload: [],
    options2: [],
    select: {
      value: null,
    },
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

  async componentDidMount() {
    let auxload = true;
    let auxrol = 1;
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
    });

    await axios.get(Global.url + "video").then(async (res) => {
      await this.setState({
        policies: res.data,
        status: "success",
        videos: res.data,
        auxvideos: res.data,
      });
    });
  }

  selectvideo = async (e) => {
    const { idvideos } = this.state;
    const { namevideos } = this.state;
    const { videos } = this.state;
    let auxvideo = idvideos;
    let auxnames = namevideos;
    if (document.getElementById(e).lastChild.children[1].classList.contains("card_video_selected")) {
      await document.getElementById(e).lastChild.children[1].classList.remove("card_video_selected");
      let index = await auxvideo.indexOf(e);
      await auxvideo.splice(index, 1);
      await videos.forEach((element) => {
        if (e == element.id) {
          let index2 = auxnames.indexOf(element.name);
          auxnames.splice(index2, 1);
        }
      });
    } else {
      await document.getElementById(e).lastChild.children[1].classList.add("card_video_selected");
      await auxvideo.push(e);
      await videos.forEach((element) => {
        if (e == element.id) {
          auxnames.push(element.name);
        }
      });
    }
    document.getElementById("button-delete").classList.add("button-visible_admin");

    await this.setState({
      idvideos: auxvideo,
      namevideos: auxnames,
    });
  };

  changeSelectTitle = (e) => {
    this.setState({ selectValue: e.value });
  };

  setValue = (value) => {
    this.setState((prevState) => ({
      select: {
        ...prevState.select,
        value,
      },
    }));
  };

  changeSelectPolicy = async (e) => {
    let listTitle = [];
    let uniqueTitle = [];
    let aux = [];
    let aux1 = [];
    this.setState({
      lobupload: e.value,
      titleupload: null,
    });

    this.state.policies.forEach((element) => {
      if (uniqueTitle.indexOf(element.title) === -1 && e.value == element.lob) {
        uniqueTitle.push(element.title);
      }
    });

    if (document.getElementsByClassName(" css-1uccc91-singleValue")[1]) {
      document.getElementsByClassName(" css-1uccc91-singleValue")[1].innerText = "Please select the title of the policy";
    }

    aux = [{ value: null, label: "Please select the title of the policy", disabled: true }];

    let ind = 1;
    uniqueTitle.forEach((element) => {
      JSON.parse(aux.push({ value: element, label: element }));
      ind = ind + 1;
    });
    this.setState({
      options2: aux,
    });
  };

  onChangeButton = async (e) => {
    await this.setState({
      selectState: e.value,
      idvideos: [],
      namevideos: [],
    });
  };

  onClickDelete = (e) => {
    const data = {
      id: this.state.idvideos,
      name: this.state.namevideos,
    };
    if (this.state.idvideos.length > 0) {
      axios.post(Global.url + "delete-videos/", data).then((res) => {
        if (res.status == 200) {
          swal("Good job!", "The videos has been deleted", "success").then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error. Please try again", "error");
        }
      });
    } else {
      swal("Warning", "Please select at least one video", "warning");
    }
  };

  renderList() {
    var auxVideos = [];
    const { rol } = this.state;
    const { selectState } = this.state;
    if (rol == 0) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 1) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 3) {
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
      var options1 = [];
      let listpolicies = [];
      let listLob = [];
      let uniqueTitle = [];
      let uniqueLob = [];

      this.state.policies.forEach((element) => {
        if (uniqueLob.indexOf(element.lob) === -1) {
          uniqueLob.push(element.lob);
        }
      });

      let ind1 = 1;
      uniqueLob.forEach((element) => {
        JSON.parse(options1.push({ value: element, label: element }));
        ind1 = ind1 + 1;
      });

      this.state.policies.forEach((element) => {
        if (element.title == selectState) {
          auxVideos.push(element);
        }
      });

      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Remove Videos</h1>
            </Col>
          </Row>
          <Row className="mx-auto mt-2">
            <Col lg={3} xl={3}>
              <p className="description-p">Select the LOB</p>
              <Select options={options1} styles={this.customStyles} placeholder="Select..." onChange={this.changeSelectPolicy} />
            </Col>
            <Col lg={6} xl={6}>
              <p className="description-p">Select the title of the policy to delete video</p>
              <Select options={this.state.options2} styles={this.customStyles} isClearable="true" placeholder={<div>Title Policy</div>} isOptionDisabled={(option) => option.isdisabled} onChange={this.onChangeButton} />
            </Col>
            <Col lg={3} xl={3} className="mt-auto">
              <Button id="button-delete" className="button-hide_admin" variant="info" onClick={this.onClickDelete} block>
                Delete Video
              </Button>
            </Col>
          </Row>
          <Row className="mx-auto mt-3 mb-5">
            {auxVideos.map((video) => {
              let url = Global.url + "get-video/" + video.id;
              return (
                <Col className="card_video_disable" lg={4} xl={4} id={video.id} onClick={this.selectvideo.bind(this, video.id)}>
                  <Card className="card__video_admin" key={video.id}>
                    <Player src={url} fluid={false} width={"100%"} height={272}>
                      <BigPlayButton position="center" />
                    </Player>
                    <Card.Body>
                      <Card.Title>{video.title}</Card.Title>
                      {/* <Card.Text>-Lob: {video.lob} \n -Language: {video.language}</Card.Text> */}
                      <footer className="blockquote-footer">{video.lob}</footer>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
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

export default videosChange;
