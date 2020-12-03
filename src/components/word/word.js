import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Cookies } from "react-cookie";
import Router from "next/router";
import axios from "axios";
import "./word.css";
import swal from 'sweetalert';
import Global from "../../global";
const cookies = new Cookies();
import Page from "react-page-loading";
import TextHighlight from 'react-text-highlight';

class Word extends Component {
  state = {
    words: [],
    status: null,
    country: "",
    data: [],
    loading: true,
    dataLang: {},
  };

  setChile = (e) => {
    this.setState({
      country: "chile",
    });
    let elements = document.getElementsByClassName("circle-icon");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("circle-icon-select")) {
        elements[i].classList.remove("circle-icon-select");
      }
    }
    e.target.classList.add("circle-icon-select");
  };

  setArgentina = (e) => {
    this.setState({
      country: "argentina",
    });
    let elements = document.getElementsByClassName("circle-icon");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("circle-icon-select")) {
        elements[i].classList.remove("circle-icon-select");
      }
    }
    e.target.classList.add("circle-icon-select");
  };

  setMexico = (e) => {
    this.setState({
      country: "mexico",
    });
    let elements = document.getElementsByClassName("circle-icon");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("circle-icon-select")) {
        elements[i].classList.remove("circle-icon-select");
      }
    }
    e.target.classList.add("circle-icon-select");
  };

  setBrasil = (e) => {
    this.setState({
      country: "brasil",
    });
    let elements = document.getElementsByClassName("circle-icon");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("circle-icon-select")) {
        elements[i].classList.remove("circle-icon-select");
      }
    }
    e.target.classList.add("circle-icon-select");
  };

  renderWord = (word) => {
    const { search } = this.state;
    return word;
  };

  async componentDidMount() {
    let auxload = true;
    const language = await cookies.get("language");
    if(language==undefined){
      Router.push("/index");
    }
    async function onPingCall() {
      const token = await cookies.get("token");
      try {
        const res = await axios.post(Global.url+"home", {
          headers: { "access-token": token, "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR" },
        });
        auxload = false;
      } catch (err) {
        swal("Session Expired", "Please sign-in again", "warning").then(()=>{
          Router.push("/index");
        })
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

  componentWillMount() {
    this.getWords();
  }
  getWords = async () => {
    const datos = {
      name: "",
      category: "",
      country: "",
    };
    await axios.post(Global.url+"diccionario", datos).then(async (res) => {
      await this.setState({
        words: res.data,
        status: "success",
      });
    });
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  onLoad = (e) => {
    this.setState({ search: "" });
    const ArrCheck2 = [];
    for (
      let i = 0;
      i < document.getElementsByClassName("input-title").length;
      i++
    ) {
      ArrCheck2.push(
        document.getElementsByClassName("input-title")[i].innerText
      );
    }

    this.setState({
      data: ArrCheck2,
    });
  };

  Valcheck = (e) => {
    const ArrCheck = [];
    const ArrCheck2 = [];
    for (
      let i = 0;
      i < document.getElementsByClassName("checkbox-label").length;
      i++
    ) {
      if (
        document.getElementsByClassName("checkbox-label")[i].children[0]
          .checked == true
      ) {
        ArrCheck.push(
          document.getElementsByClassName("input-title")[i].innerText
        );
      }
      ArrCheck2.push(
        document.getElementsByClassName("input-title")[i].innerText
      );
    }
    if (ArrCheck.length == 0) {
      this.setState({
        data: ArrCheck2,
      });
    } else {
      this.setState({
        data: ArrCheck,
      });
    }
  };

  renderList = () => {
    const { dataLang } = this.state;
    if (this.state.words.length >= 1) {
      let listCategory = [];
      let uniqueCategory = [];
      const { search } = this.state;      
      const ArrayWords = this.state.words.map((word) => {
        let json_arr = {};
        json_arr["name"] = word[1];
        json_arr["description"] = word[2];
        json_arr["category"] = word[3];
        listCategory.push(word[3]);
        json_arr["country"] = word[4];
        return JSON.parse(JSON.stringify(json_arr));
      });
      for (var i = 0; i < listCategory.length; i++) {
        if (uniqueCategory.indexOf(listCategory[i]) === -1) {
          uniqueCategory.push(listCategory[i]);
        }
      }
      var filteredCountry = [];
      if (this.state.country != "") {
        if (this.state.country == "mexico") {
          filteredCountry = ArrayWords.filter((word) => {
            return word.country == "Mexico";
          });
        } else if (this.state.country == "argentina") {
          filteredCountry = ArrayWords.filter((word) => {
            return word.country == "Argentina";
          });
        } else if (this.state.country == "chile") {
          filteredCountry = ArrayWords.filter((word) => {
            return word.country == "Chile";
          });
        } else if (this.state.country == "brasil") {
          filteredCountry = ArrayWords.filter((word) => {
            return word.country == "Brasil";
          });
        }
      } else {
        filteredCountry = ArrayWords;
      }
      
      var ArrCategories = [];
      var FilteredCategories = [];

      ArrCategories = this.state.data;

      ArrCategories.forEach((element) => {        
      filteredCountry.filter((category) => {        
          if (category.category == element) {
            FilteredCategories.push(category);
          }
        });
      });

      var filteredWords = FilteredCategories.filter((word) => {
        return word.name.toLowerCase().indexOf(search) !== -1;
      });

      var listWords = filteredWords.map((word) => {
        return (
          <div className="group-words overflow-auto" key={word[0]}>
            <blockquote className="blockquote mb-0">
              {<h4><TextHighlight
                highlight={search}
                text={this.renderWord(word.name)}
              /></h4>}
              {<p>{word.description}</p>}
              {<footer className="blockquote-footer">{word.category}</footer>}
              <hr></hr>
            </blockquote>
          </div>
        );
      });

      let categoryList = uniqueCategory.map((category, i) => {
        return (
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" onClick={this.Valcheck}></input>
              <span className="checkbox-custom rectangular"></span>
            </label>
            <div title={category} className="input-title">
              {category}
            </div>
          </div>
        );
      });

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
              <Row className="text-center">
                <Col>
                  <div className="div-margin-top"></div>
                </Col>
                <Col lg={12} xl={12} className="center-elements">
                  <img
                    src="/assents/icons/flags/Chile.svg"
                    className="circle-icon"
                    onClick={this.setChile}
                  ></img>
                  <img
                    src="/assents/icons/flags/Argentina.svg"
                    className="circle-icon"
                    onClick={this.setArgentina}
                  ></img>
                  <img
                    src="/assents/icons/flags/Mexico.svg"
                    className="circle-icon"
                    onClick={this.setMexico}
                  ></img>
                  <img
                    src="/assents/icons/flags/Brasil.svg"
                    className="circle-icon"
                    onClick={this.setBrasil}
                  ></img>
                </Col>
              </Row>
              <Row>
                <Col lg={12} xl={12}>
                  <div className="block-cb">
                    <Form>{categoryList}</Form>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={8} xl={8}>
              <img
                src="/assents/icons/spell-check-solid.svg"
                style={{ display: "none" }}
                onLoad={this.onLoad}
              ></img>
              <input
                className="input-searchBar"
                placeholder={dataLang.glossarySearch}
                onChange={this.onchange}
              />
              <div className="content-words">{listWords}</div>
            </Col>
          </Row>
        </div>
      );
    } else if (
      this.state.words.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <Container>
          <h2>No hay palabras</h2>
          <p>Todavia no hay contenido en esta seccion</p>
        </Container>
      );
    } else {
      return (
        <div>
          <Page loader={"comet-spin"} color={"#ea1d52"} size={100} duration={0.8}></Page>
        </div>
      );
    }
  };
  espacio = () => {
    return (
      <div>
        <Page
          loader={"comet-spin"}
          color={"#00cad4"}
          size={80}
          duration={0.8}
        ></Page>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default Word;
