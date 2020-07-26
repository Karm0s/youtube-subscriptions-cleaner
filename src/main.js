import Vue from 'vue';
import App from './App.vue';

import VueGAPI from 'vue-gapi';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import vuetify from './plugins/vuetify';

import VueMobileDetection from 'vue-mobile-detection';

import './assets/css/tailwind.css';


const apiConfig = {
  apiKey: 'AIzaSyD6db60yXZRLlBwiNvAh93Un0beskG6lpk',
  clientId: '512177587596-79ngm7v4tt6ti1kv1c7ao2emm76unn3e.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scopes: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube',
  refreshToken: false
};

Vue.config.productionTip = false

Vue.use(VueMobileDetection);
Vue.use(VueGAPI, apiConfig);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
