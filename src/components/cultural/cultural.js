import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import swal from "sweetalert";
import "./cultural.css";
import Global from "../../global";
const cookies = new Cookies();
import Pages from "react-page-loading";

class Cultural extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pdf: [
      [
        "Cultural Comunication Training México",
        "/assents/content/Cultural Mexico.pdf",
      ],
      [
        "Cultural Comunication Training Chile",
        "/assents/content/Cultural Chile.pdf",
      ],
    ],
    pdflink: "/assents/content/Cultural Mexico.pdf",
    zumscale: 1.0,
    loading: true,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  before = (e) => {
    if (this.state.pageNumber > 1) {
      this.setState({
        pageNumber: this.state.pageNumber - 1,
      });
    }
  };

  next = (e) => {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState({
        pageNumber: this.state.pageNumber + 1,
      });
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
            "key-token":
              "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR",
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

    if (this.state.render != false) {
      setInterval(() => {
        if (document.fullscreen == false) {
          this.setState({ zumscale: 1.0 });
        }
      }, 500);
      document.getElementsByTagName("form")[0].elements[0].checked = true;
    }
  }
  zoom = (e) => {
    var elem = document.getElementById("contenido");

    if (!document.fullscreenElement) {
      this.setState({ zumscale: 1.4 });
      elem.requestFullscreen();
    } else {
      this.setState({ zumscale: 1.0 });
      if (document.exitFullscreen) {
        this.setState({ zumscale: 1.0 });
        document.exitFullscreen();
      }
    }
  };

  selectPDF = (e) => {
    this.setState({ pageNumber: 1 });
    let elements = document.getElementsByClassName("checkbox-label");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].children[0].checked == true) {
        elements[i].children[0].checked = false;
      }
    }
    e.target.checked = true;
    let arr = this.state.pdf;
    arr.forEach((element, index) => {
      if (element[0] == e.target.parentElement.parentElement.innerText) {
        this.setState({
          pdflink: arr[index][1],
        });
      }
    });
  };

  renderList = () => {
    const { pageNumber, numPages, pdf, pdflink, zumscale } = this.state;
    let uniqueCategory = [];
    pdf.forEach((element) => {
      uniqueCategory.push(element[0]);
    });
    let categoryList = uniqueCategory.map((category, i) => {
      return (
        <div className="checkbox-container-material">
          <label className="checkbox-label">
            <input type="checkbox" onClick={this.selectPDF}></input>
            <span className="checkbox-custom rectangular"></span>
          </label>
          <div title={category} className="input-title">
            {category}
          </div>
        </div>
      );
    });
    return (
      <div className="container-cultural">
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={6} xl={6}></Col>
          <Col lg={6} xl={6}></Col>
        </Row>
        <Row className="container-mat">
          <Col lg={12} xl={12}>
            <div className="content-mat">
              <Row>
                <Col lx={7} xl={7}>
                  <div className="content-pdf" id="contenido">
                    <Document
                      className="window-pdf"
                      file={pdflink}
                      onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                      <Page
                        pageNumber={pageNumber}
                        height="680"
                        width="750"
                        scale={zumscale}
                      />
                    </Document>
                    <div className="center-text">
                      <img
                        className="img-size-icon"
                        src="/assents/icons/back.svg"
                        onClick={this.before}
                      ></img>
                      <p className="display-content-mat">
                        Page {pageNumber} of {numPages}
                      </p>
                      <img
                        className="img-size-icon"
                        src="/assents/icons/next.svg"
                        onClick={this.next}
                      ></img>
                      <img
                        className="img-size-icon"
                        src="/assents/icons/fullscreen.svg"
                        onClick={this.zoom}
                      ></img>
                    </div>
                  </div>
                </Col>
                <Col lx={5} xl={5} className="margen-botones">
                  <div className="block-cb-material">
                    <Form>{categoryList}</Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
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

export default Cultural;
