import axios from 'axios';

import * as Common from 'assets/js/Common';

//const hostUrl = 'http://192.168.0.125:8292/';
const hostUrl = 'https://extra.ustvina.com/';

export async function sendGet(url, param, cbSuccess) {
  url = hostUrl + url + '?';

  for (let i = 0; i < Object.keys(param).length; i++) {
    url += Object.keys(param)[i] + '=' + Object.values(param)[i] + '&';
  }

  await axios.get(url.slice(0, url.length - 1)).then(res => {
    console.log('SUCCESS');
    cbSuccess(res.data);
  }).catch(res => {
    if (!Common.isEmpty(res.response)) {
      console.log('ERROR');
    }
  });
}