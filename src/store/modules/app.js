const state = {
  currentComponent: "GoogleAuth"
};

const getters = {
  getCurrentComponent: (state) => state.currentComponent,
};

const actions = {
  updateCurrentComponent ({ commit }, componentName){
    commit('setCurrentComponent', componentName);
  }
};

const mutations = {
  setCurrentComponent: (state, value) => state.currentComponent = value,
};

export default {
  state,
  getters,
  actions,
  mutations
};
