import React, { Component } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select";
import { Cookies } from "react-cookie";
import axios from "axios";
import Router from "next/router";
import "./user-change.css";
import Global from "../../../global";
var jwtDecode = require("jwt-decode");
const cookies = new Cookies();
import Page from "react-page-loading";
import swal from "sweetalert";

class UserChange extends Component {
  state = {
    users: [],
    user: {},
    selectValue: "",
    selectValue2: "",
    newRole: "",
    ccms: "",
    id_user: "",
    control: "",
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

  componentWillMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const datos = {
      newRole: "",
      ccms: "",
    };
    await axios.get(Global.url + "users", datos).then(async (res) => {
      await this.setState({
        users: res.data,
        status: "success",
      });
    });
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

  changeSelectnewRole = (e) => {
    this.setState({ selectValue: e.label });
  };
  changeSelectUser = async (e) => {
    this.setState({ selectValue: e.value });
    let arrayusers = await this.state.users.map((user) => {
      let json_arr = {};
      json_arr["id_user"] = user[0];
      json_arr["newRole"] = user[5];
      json_arr["ccms"] = user[3];
      return JSON.parse(JSON.stringify(json_arr));
    });
    for (let index = 0; index < arrayusers.length; index++) {
      if (arrayusers[index].id_user == e.id) {
        if (arrayusers[index].newRole == 1) {
          arrayusers[index].newRole = "Standard User";
        }
        if (arrayusers[index].newRole == 2) {
          arrayusers[index].newRole = "Admin User";
        }
        if (arrayusers[index].newRole == 3) {
          arrayusers[index].newRole = "Trainer User";
        }
        if (arrayusers[index].newRole == 4) {
          arrayusers[index].newRole = "HHRR User";
        }
        if (arrayusers[index].newRole == 5) {
          arrayusers[index].newRole = "Staff User";
        } 
        if (arrayusers[index].newRole == 6) {
          arrayusers[index].newRole = "QA";
        }  
        if (arrayusers[index].newRole == 7) {
          arrayusers[index].newRole = "QA Advisor";
        }  
        if (arrayusers[index].newRole == 8) {
          arrayusers[index].newRole = "QA Policy";
        }                 
        await this.setState({
          id_user: arrayusers[index].id_user,
          newRole: arrayusers[index].newRole,
          ccms: arrayusers[index].ccms,
        });
      }
    }
  };

  sendAjax = (e) => {
    e.preventDefault();
    if (this.state.control == 1 && this.state.ccms !== "") {
      this.state.user = {
        ccms: this.state.ccms,
        newRole: this.state.newRole,
      };

      axios.put(Global.url + "users", this.state.user).then((res) => {
        if (res.data) {
          this.setState({
            status: "success",
          });
          swal("Good job!", "Role updated successfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
        }
      });
    } else if (this.state.control == 2 && this.state.ccms !== "") {
      this.state.user = {
        ccms: this.state.ccms,
      };
      axios.post(Global.url + "users", this.state.user).then((res) => {
        if (res.data) {
          this.setState({
            status: "success",
          });
          swal("Good job!", "User delete successfully!", "success").then(function () {
            location.reload();
          });
        } else {
          this.setState({
            status: "failed",
          });
        }
      });
    }
  };

  updateduser = (e) => {
    this.setState({
      control: 1,
    });
  };

  deleteuser = (e) => {
    this.setState({
      control: 2,
    });
  };

  callThis = (e) => {
    this.setState({
      newRole: e.label,
    });
  };

  handleChange(value) {
    this.setState({ value: value });
  }
  renderList() {
    const { rol } = this.state;
    if (rol != 2) {
      swal("Forbidden!", "You are not allowed to view this content.\n Contact your administrator", "warning").then(function () {
        Router.push("/home");
      });
    } else if (rol == 0) {
    } else {
      let listUsers = [];
      let listnewRole = [];

      let uniquenewRole = [];
      var options1 = [];
      var options2 = [];
      const ArrayUsers = this.state.users.map((user) => {
        let json_arr = {};
        json_arr["id_user"] = user[0];
        json_arr["newRole"] = user[5];
        listnewRole.push(user[5]);
        JSON.parse(options1.push({ id: user[0], value: user[0], label: user[3] }));
        return JSON.parse(JSON.stringify(json_arr));
      });

      uniquenewRole = [1,2,3,4,5,6,7,8];
      let ind = 1;
      uniquenewRole.forEach((element) => {
        let listnewRoleLabel = "";
        if (element == 1) {
          listnewRoleLabel = "Standard User";
        }
        if (element == 2) {
          listnewRoleLabel = "Admin User";
        }
        if (element == 3) {
          listnewRoleLabel = "Trainer User";
        }
        if (element == 4) {
          listnewRoleLabel = "HHRR User";
        }
        if (element == 5) {
          listnewRoleLabel = "Staff User";
        } 
        if (element == 6) {
          listnewRoleLabel = "QA";
        }
        if (element == 7) {
          listnewRoleLabel = "QA Advisor";
        } 
        if (element == 8) {
          listnewRoleLabel = "QA Policy";
        }              
        JSON.parse(options2.push({ value: element, label: listnewRoleLabel }));
        ind = ind + 1;
      });

      return (
        <div className="container-admin-user mx-auto">
          <Row className="">
            <Col lg={12} xl={12} className="font-h1-user">
              <h1>Modify/Delete User</h1>
            </Col>
          </Row>
          <div className="container-card-from-user">
            <form onSubmit={this.sendAjax}>
              <Row className="mx-auto mt-3">
                <Col lg={12} xl={12}>
                  <label htmlFor="basic-url">User</label>
                  <Select options={options1} styles={this.customStyles} placeholder={<div>Select or type the user</div>} onChange={this.changeSelectUser} />
                </Col>
                <Col lg={12} xl={12}>
                  <label htmlFor="basic-url">Role</label>
                  <Select options={options2} styles={this.customStyles} value={{ value: this.state.newRole, label: this.state.newRole }} placeholder={<div>Role</div>} onChange={this.callThis} />
                </Col>
              </Row>
              <Row className="mx-auto mt-3">
                <Col lg={6} xl={6}>
                  <Button className="button-change" type="submit" variant="primary" onClick={this.updateduser} size="lg" block>
                    Update
                  </Button>
                </Col>
                <Col lg={6} xl={6}>
                  <Button className="button-delete" type="submit" onClick={this.deleteuser} variant="primary" size="lg" block>
                    Delete
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
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

export default UserChange;
