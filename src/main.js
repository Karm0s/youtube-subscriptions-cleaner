import Vue from 'vue';
import App from './App.vue';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import vuetify from './plugins/vuetify';

import VueMobileDetection from 'vue-mobile-detection';

import './assets/css/tailwind.css';


Vue.config.productionTip = false

Vue.use(VueMobileDetection);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
