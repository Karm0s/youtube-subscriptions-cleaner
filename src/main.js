import Vue from 'vue';
import App from './App.vue';

import store from './store';

import VueGAPI from 'vue-gapi';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import vuetify from './plugins/vuetify';

import VueMobileDetection from 'vue-mobile-detection';


const apiConfig = {
  apiKey: 'AIzaSyD6db60yXZRLlBwiNvAh93Un0beskG6lpk',
  clientId: '512177587596-jfuckt2basgvqbui41hvd8fese2baa0c.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: 'https://www.googleapis.com/auth/youtube',
};

Vue.config.productionTip = false

Vue.use(VueMobileDetection);
Vue.use(VueGAPI, apiConfig);

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
