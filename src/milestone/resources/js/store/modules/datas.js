const state = {
  taskArea: {}
};

const getters = {
  getTaskArea(state) {
      return state.taskArea
  }
};

const actions = {
  setTaskArea({commit}, model) {
      commit('setTaskArea', model)
  }
};

const mutations = {
  setTaskArea(state, model) {
      state.taskArea = model
  }
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};