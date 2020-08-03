const state = {
  channels: [],
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
    };

    let request = gapi.client.youtube.subscriptions.list(requestParams);
    return request.then(res => {
      let data = res.result;
      // this.nextPageToken = response.nextPageToken;
      // this.requestNumberOfItems = response.pageInfo.totalResults;
      // console.log(response);
      commit("setNextPageToken", data.nextPageToken);
      // commit("setPrevPageToken", response.prevPageToken);
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
    // response.execute(response => {
    //   // this.nextPageToken = response.nextPageToken;
    //   // this.requestNumberOfItems = response.pageInfo.totalResults;
    //   // console.log(response);
    //   commit("setNextPageToken", response.nextPageToken);
    //   // commit("setPrevPageToken", response.prevPageToken);
    //   commit("setTotalChannelsNumber", response.pageInfo.totalResults);

    //   // Populating channelsList
    //   let channelsList = [];
    //   for (let i = 0; i < response.items.length; i++) {
    //     let item = response.items[i];
    //     channelsList.push({
    //       id: item.id,
    //       channelName: item.snippet.title,
    //       thumbnail: item.snippet.thumbnails.default.url,
    //       checked: false
    //     });
    //   }
    //   commit("pushNewChannels", channelsList);
    // });
  },
  updateIndex({ commit, state }){
    commit("setIndex", state.index + state.size)
  }
  
};

const mutations = {
  setGapi: (state, value) => (state.gapi = value),
  setNextPageToken: (state, value) => (state.nextPageToken = value),
  setPrevPageToken: (state, value) => (state.prevPageToken = value),
  setTotalChannelsNumber: (state, value) => (state.totalChannelsNumber = value),

  setIndex: (state, value) => (state.index = value),
  setSize: (state, value) => (state.size = value),

  pushNewChannels: (state, newChannels) => state.channels.push(...newChannels)
};

export default {
  state,
  getters,
  actions,
  mutations
};
