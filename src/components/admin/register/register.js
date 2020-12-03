import Head from "next/head";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Cookies } from "react-cookie";
import { Formik } from "formik";
import Router from "next/router";
import Link from "next/link";
import Global from "../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";
import "./register.css";

class Register extends Component {

  state = {
    rol: 0,
    loading: true,
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
  }

  renderList = () =>{
    const {rol} = this.state;

    if (rol != 2) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    }
    else if(rol == 0){
    }else{
      const ccmsExpression = new RegExp("");
      const textExpression = new RegExp("^[\\u00F1A-Za-z _]*[\\u00F1A-Za-z][\\u00F1A-Za-z _]*$");
      return (
        <Container className="center-content">
          <Row className="col-8">
            <Col lg={12} xl={12} className="mx-auto">
              <Formik
                initialValues={{
                  ccms: "",
                  name: "",
                  lastname: "",
                  password: "",
                  repassword: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.ccms) {
                    errors.ccms = "CCMS required";
                  } else if (!ccmsExpression.test(values.ccms)) {
                    errors.ccms = "Invalid CCMS";
                  }
                  if (!values.name) {
                    errors.name = "Name required";
                  } else if (!textExpression.test(values.name)) {
                    errors.name = "Invalid Name";
                  }
                  if (!values.lastname) {
                    errors.lastname = "Last Name Required";
                  } else if (!textExpression.test(values.lastname)) {
                    errors.lastname = "Invalid Last Name";
                  }
                  if (values.password.length < 8) {
                    errors.password = "Password must have 8 characters at least";
                  } else if (values.password != values.repassword) {
                    errors.password = "Passwords don't match";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    const datos = {
                      ccms: values.ccms,
                      name: values.name,
                      lastname: values.lastname,
                      password: values.password,
                    };
                    axios
                      .post(Global.url + "signup", datos)
                      .then(function (res) {
                        if (res.status == 205) {
                          swal("Alert!", "User already exist", "warning");
                        } else {
                          swal("Good job!", "Registered user successfully!", "success").then(function () {
                            location.reload();
                          });
                        }
                      })
                      .catch(function (errors) {
                        swal("Error!", "Error try again", "error");
                      });
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
                  <form onSubmit={handleSubmit} autocomplete="off">
                    <Col className="center-text" lg={12} xl={12}>
                      <img className="img-logo-register" src="/assents/images/Icon_Register.png" alt="" />
                    </Col>
                    <Col lg={6} xl={6} className="mx-auto">
                      <input type="text" name="ccms" onChange={handleChange} onBlur={handleBlur} value={values.ccms} className="input-register" placeholder="CCMS" />
                      {errors.ccms && touched.ccms && <div className="error">{errors.ccms}</div>}
                    </Col>
                    <Row>
                      <Col lg={6} xl={6}>
                        <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} className="input-register" placeholder="Name" />
                        {errors.name && touched.name && <div className="error">{errors.name}</div>}
                      </Col>
                      <Col lg={6} xl={6}>
                        <input type="text" name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.lastname} className="input-register" placeholder="Last Name" />
                        {errors.lastname && touched.lastname && <div className="error">{errors.lastname}</div>}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} xl={6}>
                        <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} className="input-register" placeholder="Password" />
                      </Col>
                      <Col lg={6} xl={6}>
                        <input type="password" name="repassword" onChange={handleChange} onBlur={handleBlur} value={values.repassword} className="input-register" placeholder="Confirm Password" />
                      </Col>
                    </Row>
                    {errors.password && touched.password && <div className="error">{errors.password}</div>}
                    <br></br>
                    <Row className="buttons-aling--center">
                      <Col lg={6} xl={6}>
                        <Link href="/admin">
                          <a className="hiperlink-black">Exit</a>
                        </Link>
                      </Col>
                      <Col lg={6} xl={6} className="mx-auto">
                        <button type="submit" className="button-register" disabled={isSubmitting}>
                          Register
                        </button>
                      </Col>
                    </Row>
                  </form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
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

export default Register;
