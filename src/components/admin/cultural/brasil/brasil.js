import React, { Component } from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import swal from "sweetalert";
import "./brasil.css";
import Global from "../../../global";
const cookies = new Cookies();
import Pages from "react-page-loading";

class Cultural extends Component {
  state = {
    status: null,
    data: [],
    indexT: [],
    principal: [],
    carrousel: [],
    secciones: 0,
    loading: true,
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
      } catch (err) {
        swal("Session Expired", "Please sign-in again", "warning").then(()=>{
          Router.push("/index");
        })
      }
    }
    
    await this.getInfo();
    await onPingCall();    
    auxload = await false;
    await this.setState({
      loading: auxload,
    });    
  }
  /**
   * @desc opens a modal window to display a message
   * @param string $msg - the message to be displayed
   * @return bool - success or failure
   */
  getInfo = async () => {
    await axios.get(Global.url + "cultural").then(async (res) => {
      await this.setState({
        status: "success",
        data: res.data
      });
    });
    await axios.get(Global.url + "cultural-carrousel").then(async (res) => {
      await this.setState({
        status: "success",
        carrousel: res.data
      });
    });
    let auxindex = [];
    let auxData = [];
    let auxContent = [];
    let auxPrincipal = [];
    let auxSection = [];
    let auxSectionL;
    await this.state.data.forEach(element => {
      if(element.type=='titulo' && element.country=='br'){
        auxindex.push(element.name)
      } 
    });
    await this.state.data.forEach((element) => {
      if(element.country=='br'){
        auxData.push(element);
      } 
    });
    await auxData.forEach((element)=>{
      if(element.desde=='contenido'){
        auxContent.push(element);
      }  
    })
    await auxData.forEach((element,index)=>{
      if(index>=2){
        if(element.desde=='principal'){
          auxPrincipal.push(element);
        }  
      }      
    })
    auxSectionL= await auxContent[auxContent.length-1].section;
    for(var i=1; i<=auxSectionL; i++){
      let aux = [];
      await auxContent.forEach((element) => {
        if(element.section==i){
          aux.push(element);
        }
      });
      auxSection.push(aux);
    }
    let auxSection2 = [];
    auxSection.forEach(element => {
      if(element.length!=0){
        auxSection2.push(element)
      }
    });
    await this.setState({
      indexT: auxindex,
      data: auxData,
      principal: auxPrincipal,
      secciones: auxSection2
    });
  };

  renderIndex = () =>{
    const {indexT} = this.state;
    let i = 1;
    var indexR = indexT.map((title)=>{
      let href = "#list-item-"+i;
      i=i+1;
      return(
        <Col lg={6} xl={6}>
          <a className="list-group-item" href={href}>
            {title}
          </a>
        </Col>
      ); 
    })
    return indexR;
  }

  renderSections = () =>{
    const {secciones} = this.state;
    
    var SectionToR = secciones.map((section,idx)=>{     
      let idx2=idx+1;
      let item = "list-item-"+idx2;
      if(section.length==1){
        return(
          <Row className="center-row_block"> 
            <Col lg={12} xl={12}>
              <div id={item} className="cultural__block-tittle2">
                <a className="a-title" href='#content-index'>{section[0].name}</a>
              </div>
            </Col>
          </Row>
        )        
      }else{
        if((section[0].type=='titulo' && section[1].type=='img')){
          let imgSrc = Global.url+"get-image-cultural/"+section[1].id;
          return(
            <Row>
              <Col lg={12} xl={12}>
                <div id={item} className="cultural__block-tittle">
                  <a className="a-title" href='#content-index'>{section[0].name}</a>
                </div>
              </Col>
              <Col lg={12} xl={12} className="text-center">
                <img src={imgSrc} alt="" />
              </Col>
            </Row>
          )          
        }else if((section[1].type=='titulo' && section[0].type=='img')){
          let imgSrc = Global.url+"get-image-cultural/"+section[0].id;
          return(
            <Row>
              <Col lg={12} xl={12}>
                <div id={item} className="cultural__block-tittle" href='content-index'>
                  <a className="a-title" href='#content-index'>{section[1].name}</a>
                </div>
              </Col>
              <Col lg={12} xl={12} className="text-center">
                <img src={imgSrc} alt="" />
              </Col>
            </Row>            
          )
        }else if((section[0].type=='titulo' && section[1].type=='carrousel')){
          return(
            <Row>
              <Col lg={12} xl={12}>
                <div id={item} className="cultural__block-tittle" href='content-index'>
                  <a className="a-title" href='#content-index'>{section[0].name}</a>
                </div>
              </Col>
              <Col lg={12} xl={12}>
                <Carousel>
                  {this.renderCarrousel(section[1].name)}
                </Carousel>
              </Col>            
            </Row>
          )          
        }else if((section[1].type=='titulo' && section[0].type=='carrousel')){
          return(
            <Row>
              <Col lg={12} xl={12}>
                <div id={item} className="cultural__block-tittle" href='content-index'>
                  <a className="a-title" href='#content-index'>{section[1].name}</a>
                </div>
              </Col>
              <Col lg={12} xl={12}>
                <Carousel>
                  {this.renderCarrousel(section[0].name)}
                </Carousel>
              </Col>       
            </Row> 
          )
        }
      }  
    });
    return SectionToR;
  }
  renderPrincipal = () => {
    const {principal} = this.state;
    var principalToR = principal.map((img)=>{
      let imgSrc = Global.url+"get-image-cultural/"+img.id;
      return(
        <Col lg={4} xl={4}>
          <div className="card__category">
            <img src={imgSrc} className="card-img-top" alt="..." />
          </div>
        </Col>
      );
    })

    return principalToR;    
  }
  renderCarrousel = (name) =>{
    const {carrousel} = this.state;
    const toRender = [];
    carrousel.forEach(element => {
      if(element.carrousel==name){
        toRender.push(element)
      }
    });
    var carrouselToR = toRender.map((img)=>{
      let src = Global.url+"get-image-carrousel/"+img.id;
      return (
        <Carousel.Item>
          <img className="d-block w-100" src={src} alt="" />
        </Carousel.Item>
      )
    })

    return carrouselToR;
    
  }
  renderList = () => {
    let srcHeader = Global.url+"get-image-cultural/224";
    let srcFooter = Global.url+"get-image-cultural/225";
    return (
      <Container className="cultural__block-margin">
        <Row>
          <Col lg={12} xl={12}>
            <div className="mx-auto cultural__image">
              <img src={srcHeader} alt="" />
            </div>
          </Col>
          {this.renderPrincipal()}
          <Col lg={12} xl={12}>
            <div className="mx-auto cultural__image">
              <img src={srcFooter} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xl={12}>
            <div id="content-index" className="cultural__block-tittle">
              <h2>Contenido</h2>
            </div>
          </Col>
        </Row>
        <Row  id="list-example" className="list-group list-group-flex">            
          {this.renderIndex()}
        </Row>
          {this.renderSections()}   
      </Container>
    );
  };
  espacio = () => {
    return (
      <div>
        <Pages loader={"comet-spin"} color={"#00cad4"} size={80} duration={0.8}></Pages>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default Cultural;
