import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./videos-new.css";
import Global from "../../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";
class VideoNew extends Component {
  state = {
    policies: [],
    selectedFile: null,
    selectValue: "",
    nameSelectedFile: null,
    lob: [],
    id: 0,
    labelpdf: "",
    rol: 0,
    loading: true,
    title: [],
    titleupload: [],
    lobupload: [],
    options2: [],
    select: {
      value: null
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
        swal("Session Expired", "Please sign-in again", "warning").then(()=>{
          Router.push("/index");
        })
      }
    }
    await onPingCall();
    this.setState({
      loading: auxload,
      rol: auxrol,
    });

    await axios.post(Global.url + "politicasall").then(async (res) => {
      await this.setState({
        policies: res.data,
        status: "success",
      });
    });
  };

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
      nameSelectedFile:e.target.files[0].name
    });
    if (e.target.files[0] != null)  {
      document.getElementById("button-upload").classList.remove("button-hide");
    }
  };

  changeSelectTitle = (e) => {
    this.setState({ selectValue: e.value });
  };

  setValue = value => {
    this.setState(prevState => ({
      select: {
        ...prevState.select,
        value
      }
    }));
  };

  changeSelectPolicy = async (e) => {
    let listTitle = [];
    let uniqueTitle = [];
    let aux=[];
    let aux1=[];
    this.setState({
      lobupload: e.value,  
      titleupload: null,
    })

    let arraypolicies = await this.state.policies.map((policy) => {
      let json_arr = {};
      json_arr["id_policy"] = policy[0];
      json_arr["title"] = policy[1];
      json_arr["lob"] = policy[9];
      return JSON.parse(JSON.stringify(json_arr));
    });    
    if (document.getElementsByClassName(" css-1uccc91-singleValue")[1]){
      document.getElementsByClassName(" css-1uccc91-singleValue")[1].innerText = "Please select the title of the policy"
    }
    
    for (let index = 0; index < arraypolicies.length; index++) {
      if (arraypolicies[index].lob == e.value) {
        listTitle.push(arraypolicies[index].title)
      }
    }
    
      for (var i = 0; i < listTitle.length; i++) {
        if (uniqueTitle.indexOf(listTitle[i]) === -1) {
          uniqueTitle.push(listTitle[i]);
        }
      }
      aux=[{value:null,label:"Please select the title of the policy",disabled: true}]   
      let ind = 1;
      uniqueTitle.forEach((element) => {
        JSON.parse(aux.push({ value: element, label: element }));
        ind = ind + 1;
      });  
      this.setState({
        options2: aux
      })      
  };

  onChangeButton = (e) => {
    this.setState({
      titleupload:e.value
    })
  };

  onClickUpload = (e) => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("title",this.state.titleupload);
    data.append("lob",this.state.lobupload);
    data.append("language","es");
    if (this.state.titleupload != null && this.state.lobupload.length > 0){
      axios.post(Global.url + "upload-videos/", data).then((res) => {
        if (res.status == 200) {
          swal("Good job!", "The video " + this.state.nameSelectedFile + " has been updated succesfully!", "success").then(function () {
            location.reload();
          });
        } else {
          swal("Error!", "Error with the file, please check and try again", "error");
        }
      });
    }else{
      swal("Warning", "Please complete all fields", "warning");
    }
  };
  
  renderList() {
    const { rol } = this.state;
      if (rol == 0) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    }else if(rol == 1){
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    }else if(rol == 3){
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    }else if(rol == 5){
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    }else if(rol == 6){
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    }else if(rol == 7){
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    }else if(rol == 8){
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else {
      var options1 = [];
      
      let listpolicies = [];   
      let listLob = [];  
      let uniqueTitle = [];   
      let uniqueLob = [];   

      const Arraypolicies = this.state.policies.map((policy) => {
        let json_arr = {};
        json_arr["id_policy"] = policy[0];
        listLob.push(policy[9]);
        return JSON.parse(JSON.stringify(json_arr));
      });
      for (var i = 0; i < listLob.length; i++) {
        if (uniqueLob.indexOf(listLob[i]) === -1) {
          uniqueLob.push(listLob[i]);
        }
      }
      let ind1 = 1;
      uniqueLob.forEach((element) => {
        JSON.parse(options1.push({ value: element, label: element }));
        ind1 = ind1 + 1;
      });         

      return (
        <div className="container-admin">
          <Row className="mx-auto">
            <Col lg={12} xl={12} className="font-h1">
              <h1>Add Videos</h1>
            </Col>
          </Row>
          <Row className="ml-2 mr-2">
            <Col lg={6} xl={6}>
              <Form>
                <div className="form-group files">
                  <label>Upload Your Video </label>
                  <input type="file" className="form-control" onChange={this.onChangeHandler} multiple="" />
                </div>
              </Form>
              <Row>
                <Col>                  
                  <form>
                    <Button id="button-upload" className="button-hide" variant="info" onClick={this.onClickUpload} block>
                      Upload
                    </Button>
                  </form>
                </Col>
              </Row>
            </Col>
            <Col lg={6} xl={6}>
              <p className="description-p">Select the LOB</p>
              <Select options={options1} styles={this.customStyles} placeholder="Select..." onChange={this.changeSelectPolicy} />            
              <p className="description-p">Select the title of the policy to upload video</p>
              <Select options={this.state.options2} styles={this.customStyles} isClearable="true" placeholder={<div>Title Policy</div>} isOptionDisabled={(option) => option.isdisabled} onChange={this.onChangeButton} />
            </Col>
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

export default VideoNew;
