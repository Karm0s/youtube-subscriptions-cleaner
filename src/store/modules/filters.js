const state = {
  channelsPerPage: 5,
  channelsOrder: "unread"
};

const getters = {
  getChannelsPerPage: state => state.channelsPerPage,
  channelsOrder: state => state.channelsOrder
};

const actions = {
  async updateChannelsPerPage({ commit }, value) {
    commit("setChannelsPerPage", value);
  },
  async updateChannelsOrder({ commit }, value) {
    commit("setChannelsOrder", value);
  }
};

const mutations = {
  setChannelsPerPage: (state, value) => (state.channelsPerPage = value),
  setChannelsOrder: (state, value) => (state.channelsOrder = value)
};

export default {
  state,
  getters,
  actions,
  mutations
};
