import { make } from 'vuex-pathify';

const state = {
  drawer: false,
  drawerRight: false,
  loadingPage: false
};

const getters = make.getters(state);
const mutations = make.mutations(state);
const actions = make.actions(state);

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
