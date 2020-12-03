import React, { Component } from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { Cookies } from 'react-cookie';
import Router from 'next/router';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import axios from 'axios';
import swal from 'sweetalert';
import Moment from 'react-moment';
import './ccm.css';
const cookies = new Cookies();
import Page from 'react-page-loading';
import Global from '../../../global';
import Local from '../../../local';
import TextHighlight from 'react-text-highlight';
import { lang } from 'moment';

const animatedComponents = makeAnimated();
class Ccm extends Component {
  state = {
    policies: [],
    status: null,
    data: [],
    policategory: [],
    loading: true,
    videos: [],
    dataLang: {},
  };

  setPor = async (e) => {
    const { dataLang } = this.state;
    var aux = await e.target;
    const datos = await {
      language: 'en-por',
      lob: 'CCM',
    };
    await axios.post(Global.url + 'politicas', datos).then(async (res) => {
      await this.setState({
        policies: res.data,
        status: 'success',
      });
    });

    let elements = await document.getElementsByClassName('flag-icon-lang');
    for (var i = 0; i < elements.length; i++) {
      if (await elements[i].classList.contains('flag-icon-lang-sel')) {
        await elements[i].classList.remove('flag-icon-lang-sel');
      }
    }

    await aux.classList.add('flag-icon-lang-sel');
    let perro = await [];
    await this.state.policies.forEach((element) => {
      if (perro.indexOf(element[3]) == -1) {
        perro.push(element[3]);
      }
    });
    await this.setState({
      policategory: perro,
    });
    if (document.getElementsByClassName(' css-1uccc91-singleValue').length > 0) {
      document.getElementsByClassName(' css-1uccc91-singleValue')[0].innerText = await dataLang.selectAll;
    }
  };
  setEs = async (e) => {
    const { dataLang } = this.state;
    var aux = await e.target;
    const datos = {
      language: 'en-es',
      lob: 'CCM',
    };
    await axios.post(Global.url + 'politicas', datos).then(async (res) => {
      await this.setState({
        policies: res.data,
        status: 'success',
      });
    });

    let elements = await document.getElementsByClassName('flag-icon-lang');
    for (var i = 0; i < elements.length; i++) {
      if (await elements[i].classList.contains('flag-icon-lang-sel')) {
        await elements[i].classList.remove('flag-icon-lang-sel');
      }
    }

    await aux.classList.add('flag-icon-lang-sel');
    let perro = await [];
    await this.state.policies.forEach((element) => {
      if (perro.indexOf(element[3]) == -1) {
        perro.push(element[3]);
      }
    });
    await this.setState({
      policategory: perro,
    });
    if (document.getElementsByClassName(' css-1uccc91-singleValue').length > 0) {
      document.getElementsByClassName(' css-1uccc91-singleValue')[0].innerText = await dataLang.selectAll;
    }
  };
  setEn = async (e) => {
    const { dataLang } = this.state;
    var aux = await e.target;
    const datos = {
      language: 'en-en',
      lob: 'CCM',
    };
    await axios.post(Global.url + 'politicas', datos).then(async (res) => {
      await this.setState({
        policies: res.data,
        status: 'success',
      });
    });

    let elements = await document.getElementsByClassName('flag-icon-lang');
    for (var i = 0; i < elements.length; i++) {
      if (await elements[i].classList.contains('flag-icon-lang-sel')) {
        await elements[i].classList.remove('flag-icon-lang-sel');
      }
    }

    await aux.classList.add('flag-icon-lang-sel');
    let perro = await [];
    await this.state.policies.forEach((element) => {
      if (perro.indexOf(element[3]) == -1) {
        perro.push(element[3]);
      }
    });
    await this.setState({
      policategory: perro,
    });
    if (document.getElementsByClassName(' css-1uccc91-singleValue').length > 0) {
      document.getElementsByClassName(' css-1uccc91-singleValue')[0].innerText = await dataLang.selectAll;
    }
  };
  async componentDidMount() {
    let auxload = true;
    const language = await cookies.get('language');
    if (language == undefined) {
      Router.push('/index');
    }
    async function onPingCall() {
      const token = await cookies.get('token');
      try {
        const res = await axios.post(Global.url + 'home', {
          headers: {
            'access-token': token,
            'key-token': 'codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR',
          },
        });
        auxload = false;
      } catch (err) {
        if (language == 'en') {
          swal('Session Expired', 'Please sign-in again', 'warning').then(() => {
            Router.push('/index');
          });
        } else if (language == 'es') {
          swal('Sesión expirada', 'Inicie sesión de nuevo', 'warning').then(() => {
            Router.push('/index');
          });
        } else if (language == 'por') {
          swal('Sessão expirada', 'Faça login novamente', 'warning').then(() => {
            Router.push('/index');
          });
        }
      }
    }
    let dataToT = {};
    await axios.get(Global.url + 'multi-language').then((res) => {
      dataToT = res.data;
    });
    let auxData = await dataToT[language];
    await onPingCall();
    this.setState({
      dataLang: auxData,
      loading: auxload,
    });
    try {
      document.addEventListener('keydown', this.onKeyPressed);
    } catch (error) {}
  }

  renderPolicy = (policy) => {
    const { search } = this.state;
    return policy;
  };

  getVideos = async () => {
    await axios.get(Global.url + 'video').then(async (res) => {
      await this.setState({
        videos: res.data,
      });
    });
  };

  async componentWillMount() {
    await this.onLoad();
    await this.getPolicies();
    await this.getVideos();
  }
  getPolicies = async () => {
    const datos = {
      language: 'en-es',
      lob: 'CCM',
    };
    await axios.post(Global.url + 'politicas', datos).then((res) => {
      this.setState({
        policies: res.data,
        status: 'success',
      });
    });

    let perro = [];
    await this.state.policies.forEach((element) => {
      if (perro.indexOf(element[3]) == -1) {
        perro.push(element[3]);
      }
    });
    await this.setState({
      policategory: perro,
    });
    try {
      await document.getElementsByClassName('flag-icon-lang')[0].classList.add('flag-icon-lang-sel');
    } catch (error) {}
  };

  onchange = async (e) => {
    await this.setState({ search: e.target.value });
    async function refresh() {
      for (var i = 0; i < document.getElementsByClassName('card-body').length; i++) {
        if (document.getElementsByClassName('card-body')[i].childElementCount < 1) {
          document.getElementsByClassName('card-body')[i].parentElement.parentElement.style = await 'display:none';
        } else {
          document.getElementsByClassName('card-body')[i].parentElement.parentElement.style = await 'display:block';
        }
      }
    }
    await refresh();
  };

  onLoad = (e) => {
    this.setState({ search: '' });
  };

  handleChange = async (e) => {
    const { dataLang } = this.state;
    if (e.value == dataLang.selectAll) {
      let perro = [];
      this.state.policies.forEach((element) => {
        if (perro.indexOf(element[3]) == -1) {
          perro.push(element[3]);
        }
      });
      this.setState({
        policategory: perro,
      });
    } else {
      let arraydum = [];
      arraydum[0] = await e.value;
      await this.setState({
        policategory: arraydum,
      });
    }
  };

  brandColor = '#282828';

  customStyles = {
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? '#FFF' : styles.color,
      fontFamily: 'Sofia Pro Light',
      backgroundColor: state.isSelected ? '#ff004b' : styles.color,
      borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
      '&:hover': {
        color: '#FFF',
        backgroundColor: '#ff004b',
      },
    }),
    control: (base, state) => ({
      ...base,
      fontFamily: 'Sofia Pro Light',
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused ? this.brandColor : '#797979',
      '&:hover': {
        borderColor: state.isFocused ? this.brandColor : '#282828',
      },
    }),
  };

  renderList = () => {
    const { dataLang } = this.state;
    if (this.state.policies.length >= 1) {
      let listSubPolicies = [];
      let uniqueSubPolicies = [];
      let uniqueVideos = [];
      let ListPolice = [];
      let uniquePolice = [];
      var filteredPolicies = [];
      var options = [];
      const { search, policategory } = this.state;
      const ArrayPolicies = this.state.policies.map((policy) => {
        let json_arr = {};
        json_arr['title'] = policy[1];
        json_arr['playbook'] = policy[2];
        json_arr['policy'] = policy[3];
        ListPolice.push(policy[3]);
        json_arr['subpolicy'] = policy[4];
        json_arr['decision'] = policy[5];
        json_arr['tag'] = policy[6];
        json_arr['keyword'] = policy[7];
        json_arr['updated'] = policy[10];
        return JSON.parse(JSON.stringify(json_arr));
      });
      var filteredPolicies = [];
      var AuxfilteredPolicies = [];
      var AuxfilteredSubPolicies = [];
      policategory.forEach((element) => {
        filteredPolicies = ArrayPolicies.filter((policy) => {
          if (policy.policy == element) {
            AuxfilteredPolicies.push(policy);
            listSubPolicies.push(policy.subpolicy);
          }
        });
      });

      for (var i = 0; i < ListPolice.length; i++) {
        if (uniquePolice.indexOf(ListPolice[i]) === -1) {
          uniquePolice.push(ListPolice[i]);
        }
      }
      let ind = 0;
      JSON.parse(options.push({ id: ind, value: dataLang.selectAll, label: dataLang.selectAll }));
      ind = ind + 1;
      uniquePolice.forEach((element) => {
        JSON.parse(options.push({ id: ind, value: element, label: element }));
        ind = ind + 1;
      });

      var filteredtittle = AuxfilteredPolicies.filter((policy, index) => {
        return policy.playbook.toLowerCase().indexOf(search.toLowerCase()) !== -1 || policy.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || policy.tag.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

      for (var i = 0; i < listSubPolicies.length; i++) {
        if (uniqueSubPolicies.indexOf(listSubPolicies[i]) === -1) {
          uniqueSubPolicies.push(listSubPolicies[i]);
        }
      }
      var AcordionPolicies = uniqueSubPolicies.map((poli, i) => {
        var arrsubpoli = [];
        let index = 0;
        var listPolicies = filteredtittle.filter((politica) => {
          if (politica.subpolicy == poli) {
            arrsubpoli[index] = politica;
            index = index + 1;
          }
        });

        for (let i = 0; i < this.state.videos.length; i++) {
          if (uniqueVideos.indexOf(this.state.videos[i].title) === -1) {
            uniqueVideos.push(this.state.videos[i].title);
          }
        }
        return (
          <Card key={poli} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey={i} className='panel-title'>
                {poli}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                {arrsubpoli.map((value, j) => {
                  return (
                    <Row className='border-card'>
                      <Col lg={8} xl={8}>
                        <div className='style-poli'>
                          <h1 className='no-sel'>
                            <TextHighlight highlight={search} text={value.title} />
                          </h1>
                          <pre className='no-sel'>
                            <TextHighlight highlight={search} text={value.playbook} />
                          </pre>
                        </div>
                      </Col>
                      <Col lg={4} xl={4} className='outerDiv border-card-left'>
                        <div className='my-4'>
                          <p className='no-sel'>
                            <b>{dataLang.policiesTag}: </b>
                            <TextHighlight highlight={search} text={value.tag} />
                          </p>
                        </div>
                        <div className='no-sel'>
                          <p>
                            <b>{dataLang.policiesDecision}: </b>
                            {value.decision}
                          </p>
                        </div>
                        <div>
                          <p className='no-sel'>
                            <b>{dataLang.policiesKeyword}: </b>
                            {value.keyword}
                          </p>
                        </div>

                        {uniqueVideos &&
                          uniqueVideos.map((video) => {
                            if (video === value.title) {
                              return (
                                <div>
                                  <Button
                                    variant='dark'
                                    className='mb-3'
                                    block
                                    onClick={() => {
                                      let url, win;
                                      url = Local.url + 'videos?' + value.title;
                                      win = window.open(url, '_blank');
                                      win.focus();
                                    }}
                                  >
                                    {dataLang.policiesMedia}
                                  </Button>
                                </div>
                              );
                            }
                          })}
                        <div>
                          <p className='no-sel'>
                            <b>{dataLang.policiesUpdate}: </b>
                            <Moment format='D-MMM-YYYY' withTitle>
                              {value.updated}
                            </Moment>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      });
      return (
        <Container>
          <Row>
            <Col lg={6} xl={6}>
              <div> </div>
            </Col>
            <Col lg={6} xl={6}>
              <div className='flags-content-langs'>
                <img src='/assents/icons/lang/spain.svg' className='flag-icon-lang' onClick={this.setEs}></img>
                <img src='/assents/icons/lang/united-states.svg' className='flag-icon-lang' onClick={this.setEn}></img>
                <img src='/assents/icons/lang/brazil.svg' className='flag-icon-lang' onClick={this.setPor}></img>
              </div>
            </Col>
          </Row>
          <Row className='container-policies'>
            <Col>
              <Row className='align-items-center'>
                <Col lg={6} xl={6}>
                  <input className='input-searchBar-policies' id='accordion_search_bar' placeholder={dataLang.policiesSearch} onChange={this.onchange} />
                </Col>
                <Col lg={6} xl={6}>
                  <Select options={options} styles={this.customStyles} placeholder={<div>{dataLang.policiesSelect}</div>} onChange={(value) => this.handleChange(value)} />
                </Col>
              </Row>
              <Row>
                <Col lg={12} xl={12}>
                  <div className='content-policies'>
                    <Accordion defaultActiveKey='0' className='Accordion-poli'>
                      {AcordionPolicies}
                    </Accordion>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    } else if (this.state.policies.length === 0 && this.state.status === 'success') {
      return (
        <Container>
          <h2>{dataLang.noPolicies}</h2>
          <p>{dataLang.noPolicies2}</p>
        </Container>
      );
    } else {
      return (
        <div>
          <Page loader={'comet-spin'} color={'#ea1d52'} size={100} duration={0.8}></Page>
        </div>
      );
    }
  };
  espacio = () => {
    return (
      <div>
        <Page loader={'comet-spin'} color={'#ea1d52'} size={80} duration={0.8}></Page>
      </div>
    );
  };
  render() {
    const { loading } = this.state;
    return <div>{loading ? this.espacio() : this.renderList()}</div>;
  }
}

export default Ccm;
