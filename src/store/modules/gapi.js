const state = {
  gapi: null,
  googleAuth: null,
  authorized: false
};

const getters = {
  isInitialized: state => state.gapi !== null,
  isAuthorized: state => state.authorized
};

const actions = {
  loadGapi({ commit }, vm) {
    vm.$gapi.getGapiClient().then(gapi => {
      let googleAuth = gapi.auth2.getAuthInstance();
      commit("setGapi", gapi);
      commit("setGoogleAuth", googleAuth);
    });
  },
  async googleSignIn({ commit, state }) {
    await state.googleAuth.signIn()
    commit("setAuthorized", true);
  }
};

const mutations = {
  setGapi: (state, value) => (state.gapi = value),
  setGoogleAuth: (state, value) => (state.googleAuth = value),
  setAuthorized: (state, value) => (state.authorized = value)
};

export default {
  state,
  getters,
  actions,
  mutations
};
