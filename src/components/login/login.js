import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Page from "react-page-loading";
import { Formik } from "formik";
import { Cookies } from "react-cookie";
import Router from "next/router";
import Link from "next/link";
import swal from "sweetalert";
import Global from "../../global";
import axios from "axios";
import "./login.css";
const cookies = new Cookies();
class Login extends Component {
  state = {
    lang: "en",
    dataLang: {},
    allLang: [],
    loading: true,
  };
  async componentDidMount() {
    let dataToT = {};
    await axios.get(Global.url + "multi-language").then((res) => {
      dataToT = res.data;
    });
    let auxData = await dataToT;
    await this.setState({
      allLang: auxData,
      dataLang: auxData[this.state.lang],
      loading: false,
    });
  }
  setEs = async () => {
    this.setState({
      lang: "es",
      dataLang: this.state.allLang["es"],
    });
  };
  setEn = async () => {
    this.setState({
      lang: "en",
      dataLang: this.state.allLang["en"],
    });
  };
  setPor = async () => {
    this.setState({
      lang: "por",
      dataLang: this.state.allLang["por"],
    });
  };
  renderList = () => {
    const { lang } = this.state;
    const { dataLang } = this.state;
    if (cookies.get("token") != undefined) {
      cookies.remove("token");
    }
    if (cookies.get("token", { path: "/" }) != undefined) {
      cookies.remove("token", { path: "/" });
    }
    if (cookies.get("token", { path: "/admin/home-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/home-change" });
    }
    if (cookies.get("token", { path: "/admin/material-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/material-change" });
    }
    if (cookies.get("token", { path: "/admin/policies-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/policies-change" });
    }
    if (cookies.get("token", { path: "/admin/policies-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/policies-new" });
    }
    if (cookies.get("token", { path: "/admin/glossary-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/glossary-change" });
    }
    if (cookies.get("token", { path: "/admin/glossary-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/glossary-new" });
    }
    if (cookies.get("token", { path: "/admin/user-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/user-change" });
    }
    if (cookies.get("token", { path: "/admin/register" }) != undefined) {
      cookies.remove("token", { path: "/admin/register" });
    }
    if (cookies.get("token", { path: "/admin/resilience-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/resilience-change" });
    }
    if (cookies.get("token", { path: "/admin/videos-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/videos-new" });
    }
    if (cookies.get("token", { path: "/admin/videos-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/videos-change" });
    }
    if (cookies.get("token", { path: "/admin/cultural-new" }) != undefined) {
      cookies.remove("token", { path: "/admin/cultural-new" });
    }
    if (cookies.get("token", { path: "/admin/cultural-change" }) != undefined) {
      cookies.remove("token", { path: "/admin/cultural-change" });
    }
    if (cookies.get("token", { path: "/cultural/mexico" }) != undefined) {
      cookies.remove("token", { path: "/cultural/mexico" });
    }
    if (cookies.get("token", { path: "/cultural/argentina" }) != undefined) {
      cookies.remove("token", { path: "/cultural/argentina" });
    }
    if (cookies.get("token", { path: "/cultural/chile" }) != undefined) {
      cookies.remove("token", { path: "/cultural/chile" });
    }
    if (cookies.get("token", { path: "/cultural/brasil" }) != undefined) {
      cookies.remove("token", { path: "/cultural/brasil" });
    }
    if (cookies.get("token", { path: "/policies/ccm" }) != undefined) {
      cookies.remove("token", { path: "/policies/ccm" });
    }
    if (cookies.get("token", { path: "/policies/cqc" }) != undefined) {
      cookies.remove("token", { path: "/policies/cqc" });
    }
    if (cookies.get("token", { path: "/admin" }) != undefined) {
      cookies.remove("token", { path: "/admin" });
    }
    if (cookies.get("token", { path: "/glossary" }) != undefined) {
      cookies.remove("token", { path: "/glossary" });
    }
    if (cookies.get("token", { path: "/home" }) != undefined) {
      cookies.remove("token", { path: "/home" });
    }
    if (cookies.get("token", { path: "/index" }) != undefined) {
      cookies.remove("token", { path: "/index" });
    }
    if (cookies.get("token", { path: "/material" }) != undefined) {
      cookies.remove("token", { path: "/material" });
    }
    if (cookies.get("token", { path: "/resilience" }) != undefined) {
      cookies.remove("token", { path: "/resilience" });
    }
    if (cookies.get("token", { path: "/statistics" }) != undefined) {
      cookies.remove("token", { path: "/statistics" });
    }
    if (cookies.get("token", { path: "/surveyCE" }) != undefined) {
      cookies.remove("token", { path: "/surveyCE" });
    }
    if (cookies.get("token", { path: "/surveyMD" }) != undefined) {
      cookies.remove("token", { path: "/surveyMD" });
    }
    if (cookies.get("token", { path: "/videos" }) != undefined) {
      cookies.remove("token", { path: "/videos" });
    }
    if (cookies.get("token", { path: "/news" }) != undefined) {
      cookies.remove("token", { path: "/news" });
    }
    const expression = new RegExp("^[0-9]+$");
    return (
      <>
        <div className="container-banderas">
          <img src="/assents/icons/lang/spain.svg" onClick={this.setEs}></img>
          <img src="/assents/icons/lang/united-states.svg" onClick={this.setEn}></img>
          <img src="/assents/icons/lang/brazil.svg" onClick={this.setPor}></img>
        </div>
        <Container>
          <Row className="center-content">
            <Col lg={5} xl={5} className="mx-auto">
              <Formik
                initialValues={{ ccms: "", password: "" }}
                validate={(values) => {
                  const errors = {};

                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  await setTimeout(async () => {
                    const datos = {
                      ccms: values.ccms,
                      password: values.password,
                    };
                    const datos2 = {
                      username: values.ccms,
                      password: values.password,
                      typeAut: 0,
                    };
                    const url = Global.url + "signin";
                    const auxurl = Global.url + "signingccms";
                    const url2 = "https://ccmsapi.teleperformance.co/login";
                    let ccmsStatus = 0;
                    await axios
                      .post(url2, datos2)
                      .then(async function (res) {
                        let status = await res.data.error.codError;
                        if (status == 0) {
                          ccmsStatus = await 1;
                        } else {
                          ccmsStatus = await 2;
                        }
                      })
                      .catch(function (errors) {
                        Router.push("/index");
                      });
                    if (ccmsStatus == 1) {
                      await axios
                        .post(auxurl, datos)
                        .then(function (res) {
                          if (res.status == 200) {
                            swal({
                              title: dataLang.spandexL,
                              text: dataLang.disclaimerL,
                              className: "swal-wide",
                              button: dataLang.aceptButton,
                              icon: "warning",
                            }).then(async (value) => {
                              if (value == true) {
                                await axios.post(Global.url + "acknowledge", datos).then(async function (res2) {
                                  if ((res2.status = 200)) {
                                    cookies.set("token", res.data);
                                    cookies.set("language", lang);
                                    Router.push("/home");
                                  } else {
                                    Router.push("/index");
                                  }
                                });
                              } else {
                                Router.push("/index");
                              }
                            });
                          } else {
                            swal(dataLang.noLoggin, dataLang.noLoggin2, "error").then(() => {
                              Router.push("/index");
                            });
                          }
                        })
                        .catch(function (errors) {
                          Router.push("/index");
                        });
                    } else if ((ccmsStatus = 2)) {
                      axios
                        .post(url, datos)
                        .then(function (res) {
                          if (res.status == 200) {
                            swal({
                              title: dataLang.spandexL,
                              text: dataLang.disclaimerL,
                              className: "swal-wide",
                              button: dataLang.aceptButton,
                              icon: "warning",
                            }).then(async (value) => {
                              if (value == true) {
                                await axios.post(Global.url + "acknowledge", datos).then(async function (res2) {
                                  if ((res2.status = 200)) {
                                    cookies.set("token", res.data);
                                    cookies.set("language", lang);
                                    Router.push("/home");
                                  } else {
                                    Router.push("/index");
                                  }
                                });
                              } else {
                                Router.push("/index");
                              }
                            });
                          } else {
                            swal(dataLang.noLoggin, dataLang.noLoggin2, "error").then(() => {
                              Router.push("/index");
                            });
                          }
                        })
                        .catch(function (errors) {
                          Router.push("/index");
                        });
                    }
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Col lg={12} xl={12}>
                      <img className="login-icon-width" src="/assents/images/Tiktok_IconLogin.png" alt="" />
                    </Col>
                    <Col lg={12} xl={12}>
                      <input type="text" name="ccms" onChange={handleChange} onBlur={handleBlur} value={values.ccms} className="input-login" placeholder={dataLang.loginUser} autoComplete="false" />
                      {errors.ccms && touched.ccms && <div className="error">{errors.ccms}</div>}
                      <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} className="input-login" placeholder={dataLang.loginPass} />
                      {errors.password && touched.password && <div className="error">{errors.password}</div>}
                    </Col>
                    <Row className="buttons-aling--center mx-auto">
                      <Col lg={12} xl={12}>
                        <button type="submit" className="button-login" disabled={isSubmitting}>
                          {dataLang.loginSignin}
                        </button>
                      </Col>
                    </Row>
                  </form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  espacio = () => {
    return (
      <>
        <Page loader={"comet-spin"} color={"#ea1d52"} size={80} duration={0.8}></Page>
      </>
    );
  };
  render() {
    const { loading } = this.state;
    return <>{loading ? this.espacio() : this.renderList()}</>;
  }
}

export default Login;
