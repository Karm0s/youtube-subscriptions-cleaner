import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import gapi from './modules/gapi';
import channels from './modules/channels';
import filters from './modules/filters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    gapi,
    channels,
    filters
  }
});