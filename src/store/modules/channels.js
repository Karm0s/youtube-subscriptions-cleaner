const state = {
  channels: [],
  channelsToDelete: [],
  itemsPerPage: String,
  nextPageToken: "",
  prevPageToken: "",
  totalChannelsNumber: 0,

  index: 0,
  size: 50
};

const getters = {
  // getChannels: state =>
  //   state.channels.slice(state.index, state.index + state.size),
  getChannels: state => state.channels,

  getChannelsToDelete: state => state.channelsToDelete,

  channelsAvailible: state => state.index + state.size >= state.channels.length,

  getItemPerPage: state => state.itemsPerPage,
  getTotalChannelsNumber: state => state.totalChannelsNumber,

  getIndex: state => state.index,
  getSize: state => state.size
};

const actions = {
  loadChannels({ commit, state, rootState }) {
    let gapi = rootState.gapi.gapi;
    let requestParams = {
      part: "id, contentDetails, snippet",
      mine: true,
      maxResults: state.size,
      pageToken: state.nextPageToken,
      order: state.channelsOrder
    };

    let request = gapi.client.youtube.subscriptions.list(requestParams);
    return request.then(res => {
      let data = res.result;
      commit("setNextPageToken", data.nextPageToken);
      commit("setTotalChannelsNumber", data.pageInfo.totalResults);

      // Populating channelsList
      let channelsList = [];
      for (let i = 0; i < data.items.length; i++) {
        let item = data.items[i];
        channelsList.push({
          id: item.id,
          channelName: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
          checked: false
        });
      }
      commit("pushNewChannels", channelsList);
    });
  },
  updateIndex({ commit, state }) {
    commit("setIndex", state.index + state.size);
  },
  extractSubscriptionsToDelete({ commit, state }) {
    let channelsToDelete = state.channels.filter(channel => channel.checked);
    commit("setChannelsToDelete", channelsToDelete);
  },
  deleteSubscriptions({ commit, state, rootState }) {
    console.log("here");
    let ids = state.channelsToDelete.map(channel => channel.id);

    let gapi = rootState.gapi.gapi;

    let batch = gapi.client.newBatch();

    for (let id of ids) {
      let request = gapi.client.youtube.subscriptions.delete({
        id
      });
      batch.add(request);
    }
    batch.then(() => {});
  }
};

const mutations = {
  setGapi: (state, value) => (state.gapi = value),
  setNextPageToken: (state, value) => (state.nextPageToken = value),
  setPrevPageToken: (state, value) => (state.prevPageToken = value),
  setTotalChannelsNumber: (state, value) => (state.totalChannelsNumber = value),

  setIndex: (state, value) => (state.index = value),
  setSize: (state, value) => (state.size = value),

  pushNewChannels: (state, newChannels) => state.channels.push(...newChannels),

  setChannelsToDelete: (state, channels) => (state.channelsToDelete = channels)
};

export default {
  state,
  getters,
  actions,
  mutations
};
