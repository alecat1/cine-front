import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import './bubble.css';
import Local from '../../local';
import Global from '../../global';
import swal from 'sweetalert';
var jwtDecode = require('jwt-decode');
const cookies = new Cookies();

const Bubble = () => {
  const [state, setState] = useState();
  const [params, setParams] = useState();

  useEffect(() => {
    (async () => {
      const token = await cookies.get('token');
      let decoded;
      if (token != undefined) {
        decoded = jwtDecode(token);
        setParams(decoded.id)
      }
      try {
        const res = await axios.post(Global.url + 'home', {
          headers: {
            'access-token': token,
            'key-token': 'codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR',
          },
        });
      } catch (err) {}
      decoded &&
        axios
          .post(Global.url + 'actual-state', {
            ccms: decoded.id,
          })
          .then((res) => {
            res.status === 204 ? setState(true) : setState(false);
          })
          .catch((err) => {
            window.location.reload();
          });
    })();
  }, [state]);

  return state ? (
    <div
      tag='a'
      className='bubble-page rotate-in-center'
      onClick={() => {
        axios
          .post(Global.url + 'delete-state', {
            ccms: params,
          })
          .then(() => {
            let url = Local.url + 'news';
            location.href = url;
          });
      }}
    >
      <p>!!!</p>
    </div>
  ) : null;
};

export default Bubble;
