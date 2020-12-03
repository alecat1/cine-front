import React, { Component } from "react";
import {Row, Col, Form } from "react-bootstrap";
import { Document, Page } from 'react-pdf'
import { Cookies } from 'react-cookie';
import Router from 'next/router';
import axios from "axios";
var jwtDecode = require("jwt-decode");
import swal from 'sweetalert';
import "./resilience.css";
const cookies = new Cookies();
import Global from '../../global';
import Pages from 'react-page-loading';

class Resilience extends Component {
  
  state = {
    numPages: null,
    pageNumber: 1,
    pdf: [],
    pdflink: null,
    pdfid: null,
    zumscale: 1.0,
    loading: true,
    dataLang: {},
  }
    
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  before = (e)=>{
    if(this.state.pageNumber>1){
      this.setState({
        pageNumber: this.state.pageNumber-1
      });
    }    
  }

  next = (e)=>{
    if(this.state.pageNumber<this.state.numPages){
      this.setState({
        pageNumber: this.state.pageNumber+1
      });    
    }  
  }
  async componentDidMount() {
    let auxload = true;
    let auxrol = 1;
    const language = await cookies.get("language");
    if(language==undefined){
      Router.push("/index");
    }
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
      loading: auxload,
      rol: auxrol,
      dataLang: auxData,
    })
    const datos = {
      role: this.state.rol
    };
    await axios.post(Global.url+"rs",datos).then(async (res) => {
      let aux = []
      res.data.forEach(element => {
        aux.push(element[1]);
      });
      let aux2 = [];
      res.data.forEach(element => {
        aux2.push(element[0]);
      });
      await this.setState({
        pdf: aux,
        pdflink: aux2,
        pdfid: aux2[0]
      });
    });
    
    if(this.state.render!=false){
      setInterval(() => {      
      if (document.fullscreen==false){
          this.setState({zumscale: 1.0})
        }
      }, 500);
      try {        
        document.getElementsByTagName("form")[0].elements[0].checked = true
      } catch (error) {
        swal("Error!", "Error with the file", "error");
      }
    }
    
  }
  zoom = (e)=>{
    var elem= document.getElementById("contenido");
    
    if (!document.fullscreenElement){
      this.setState({zumscale: 1.4})
      elem.requestFullscreen();
    }else{
      this.setState({zumscale: 1.0})
      if (document.exitFullscreen) {
        this.setState({zumscale: 1.0})
        document.exitFullscreen(); 
      }
    }
  }

  selectPDF = async (e) =>{   
    this.setState({pageNumber: 1})
    let elements = document.getElementsByClassName("checkbox-label");
    for(var i = 0; i<elements.length;i++){  
      if(elements[i].children[0].checked == true){
        elements[i].children[0].checked = false;
      }
    }  
    e.target.checked = true;
    await this.setState({
      pdfid: this.state.pdflink[e.target.id]
    });
  }

  renderList = () =>{
    const { dataLang } = this.state;
    const {pageNumber, numPages, pdf, pdflink, zumscale, pdfid} = this.state;    
    let uniqueCategory = [];
    const { rol } = this.state;
    let splitC = [];
    pdf.forEach(element => {
        splitC = element.split('.');
        uniqueCategory.push(splitC[0]);
    });
    
    let categoryList = uniqueCategory.map((category,i) => {
      return (
          <div className="checkbox-container-rs">
            <label className="checkbox-label">
              <input id={i} type="checkbox" onClick={this.selectPDF}></input>
              <span className="checkbox-custom rectangular"></span>
            </label>
            <div title={category} className="input-title-rs">{category}</div>
          </div>
      );
    });
    return (     
      <div className="container-material">
        <Row>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col lg={6} xl={6}>
            </Col>
            <Col lg={6} xl={6}>
            </Col>
        </Row>
        <Row className="container-mat">
          <Col lg={12} xl={12}>
            <div className="content-mat" >
              <Row>
                <Col lx={7} xl={7}>
                  <div className="content-pdf-rs" id="contenido">
                      <Document className="window-pdf" file={Global.url+"get-pdf/"+pdfid} onLoadSuccess={this.onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber}  height="680" width="700" scale={zumscale}/>
                      </Document>
                      <div className = "center-text">
                        <img className="img-size-icon" src="/assents/icons/back.svg" onClick={this.before}></img>                 
                        <p className="display-content-mat">{dataLang.pageLabel} {pageNumber} {dataLang.ofLabel} {numPages}</p>
                        <img className="img-size-icon" src="/assents/icons/next.svg" onClick={this.next}></img>
                        <img className="img-size-icon" src="/assents/icons/fullscreen.svg" onClick={this.zoom}></img>
                      </div>                  
                    </div> 
                </Col>  
                <Col lx={5} xl={5} className="margen-botones">
                  <div className="block-cb-material-rs"><Form>{categoryList}</Form></div>
                </Col>                
              </Row>
            </div>
          </Col>
        </Row>          
      </div>
    );
  }
  espacio = () => {
    return (
      <div>
        <Pages
          loader={"comet-spin"}
          color={"#00cad4"}
          size={80}
          duration={0.8}
        ></Pages>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default Resilience;
