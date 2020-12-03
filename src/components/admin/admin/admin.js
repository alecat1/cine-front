import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl, Container, Card } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./admin.css";
import Global from "../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class glossaryNew extends Component {
  state = {
    loading: true,
    rol: 0,
    id_db: null,
  };

  async componentDidMount() {
    let auxload = true;
    let auxrol = 0;
    let auxid = null;
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
          auxid = await decoded.ident;
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
      id_db: auxid,
    });
  }
  renderRolUser() {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Users</Card.Title>
            <Card.Text>Change role users</Card.Text>
            <Button
              variant="warning"
              className="button--change-admin"
              onClick={() => {
                Router.push("/admin/user-change");
              }}
              block
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  renderRolRegister() {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Card.Text>Register user</Card.Text>
            <Button
              variant="warning"
              className="button--change-admin"
              onClick={() => {
                Router.push("/admin/register");
              }}
              block
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  renderRolResilience = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Resilience</Card.Title>
            <Card.Text>Add or change resilience files</Card.Text>
            <Button
              variant="warning"
              className="button--change-admin"
              onClick={() => {
                Router.push("/admin/resilience-change");
              }}
              block
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolHome = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Home</Card.Title>
            <Card.Text>Add or change home videos</Card.Text>
            <Button
              variant="warning"
              className="button--change-admin"
              onClick={() => {
                Router.push("/admin/home-change");
              }}
              block
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolMaterial = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Material</Card.Title>
            <Card.Text>Add or change material files</Card.Text>
            <Button
              variant="warning"
              className="button--change-admin"
              onClick={() => {
                Router.push("/admin/material-change");
              }}
              block
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolTips = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Daily Tips</Card.Title>
            <Card.Text>Add or change Daily Tips</Card.Text>
            <Button
              variant="warning"
              className="button--change-admin"
              onClick={() => {
                Router.push("/admin/tips-change");
              }}
              block
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolPolicies = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Policies</Card.Title>
            <Card.Text>Add or change policies</Card.Text>
            <Button
              variant="success"
              className="button--add-admin"
              onClick={() => {
                Router.push("/admin/policies-new");
              }}
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="button--aling-admin align-items-end button--change-admin"
              onClick={() => {
                Router.push("/admin/policies-change");
              }}
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolGlossary = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Glossary</Card.Title>
            <Card.Text>Add or change words</Card.Text>
            <Button
              variant="success"
              className="button--add-admin"
              onClick={() => {
                Router.push("/admin/glossary-new");
              }}
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="button--aling-admin align-items-end button--change-admin"
              onClick={() => {
                Router.push("/admin/glossary-change");
              }}
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolCultural = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Cultural Training</Card.Title>
            <Card.Text>Add or change Cultural files</Card.Text>
            <Button
              variant="success"
              className="button--add-admin"
              onClick={() => {
                Router.push("/admin/cultural-new");
              }}
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="button--aling-admin align-items-end button--change-admin"
              onClick={() => {
                Router.push("/admin/cultural-change");
              }}
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolVideos = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Videos</Card.Title>
            <Card.Text>Add or delete Videos</Card.Text>
            <Button
              variant="success"
              className="button--add-admin"
              onClick={() => {
                Router.push("/admin/videos-new");
              }}
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="button--aling-admin align-items-end button--change-admin"
              onClick={() => {
                Router.push("/admin/videos-change");
              }}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderRolNoticias = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Newsfeed</Card.Title>
            <Card.Text>Add or Change News</Card.Text>
            <Button
              variant="success"
              className="button--add-admin"
              onClick={() => {
                Router.push("/admin/newsfeed-new");
              }}
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="button--aling-admin align-items-end button--change-admin"
              onClick={() => {
                Router.push("/admin/newsfeed-change");
              }}
            >
              Change
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  renderDownloadReport = () => {
    return (
      <Col lg={3} xl={3}>
        <Card className="text-center card--animation-admin">
          <Card.Body>
            <Card.Title>Report</Card.Title>
            <Card.Text>Download Report</Card.Text>
            <Button
              variant="warning"
              className="button--aling-admin align-items-end button--change-admin"
              onClick={() => {
                const FileDownload = require("js-file-download");
                axios
                  .get(Global.url + "get-ack")
                  .then(function (res) {
                    FileDownload(res.data, "report.csv");
                  })
                  .catch(function (err) {
                    swal("Error!", "Hubo un error al intentar generar el reporte", "error").then(() => {
                      location.reload();
                    });
                  });
              }}
            >
              Download
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderList() {
    const { rol } = this.state;
    //0 null, 1 usuario, 2 administrador, 3 trainer, 4 rrhh, 5 staff
    if (rol == 0) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 1) {
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
      return (
        <div className="container--admin">
          <Container className="margin--container-admin">
            <Row>
              {rol == 2 || rol == 3 ? this.renderRolHome() : null}
              {rol == 2 || rol == 3 ? this.renderRolMaterial() : null}
              {rol == 2 || rol == 3 ? this.renderRolPolicies() : null}
              {rol == 2 || rol == 3 ? this.renderRolGlossary() : null}
            </Row>
            <Row className="mt-4">
              {rol == 2 || rol == 4 ? this.renderRolResilience() : null}
              {rol == 2 || rol == 3 ? this.renderRolCultural() : null}
              {rol == 2 || rol == 3 ? this.renderRolVideos() : null}
              {rol == 2 || rol == 3 ? this.renderRolNoticias() : null}
            </Row>
            <Row className="mt-4">
              {rol == 2 ? this.renderRolUser() : null}
              {rol == 2 ? this.renderRolRegister() : null}
              {rol == 2 || rol == 3 ? this.renderRolTips() : null}
              {rol == 2 ? this.renderDownloadReport() : null}
            </Row>
          </Container>
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

export default glossaryNew;
