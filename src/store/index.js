import Vue from 'vue';
import Vuex from 'vuex';

import channels from './modules/channels';
import gapi from './modules/gapi';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gapi,
    channels
  }
});