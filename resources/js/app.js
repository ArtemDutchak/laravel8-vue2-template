import Vue from 'vue';

import store from './store';
import router from './router';
import App from './App';
import {i18n} from './i18n';
import vuetify from './components/plugins/vuetify';

import axios from 'axios';

Vue.prototype.$sendData = function(url, data){
  return new Promise((resolve, reject) => {
    const bodyFormData = new FormData()
    const _token = document.getElementById('csrf_token').content;
    bodyFormData.set('_token', _token)
    for (const key in data) {
      const value = data[key]
      bodyFormData.set(key, value)
    }
    // store.dispatch('start_loading');
    axios({
      method: 'post',
      url: '/' + url,
      crossorigin:true,
      data: bodyFormData,
      dataType: 'json',
      headers: {
        'X-CSRF-TOKEN': _token
      }
    }).then(res => {
      // store.dispatch('stop_loading');
      resolve(res.data)
      return
    })
  })
}

export const bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  vuetify,
  render: h => h(App),
});
