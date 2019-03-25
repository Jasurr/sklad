export default {
  state: {
    goods: []
  },
  mutations: {
    update(state, payload) {
      state.goods = [...state.goods.filter(q => q.id !== payload.id), payload];
    },
    insGood(state, payload) {
      state.goods.push(payload);
    },
    removeGood(state, payload) {
      let newGoods = state.goods.filter(q => q.id !== payload.id);
      state.goods = newGoods;
    }
  },
  actions: {
    insGood({ commit, getters }, payload) {
      const employee = getters.currentUser;
      const id = Math.random();
      commit("insGood", {
        ...payload,
        id,
        employee
      });
    },
    update({ commit }, payload) {
      commit("update", payload);
    },
    removeGood({ commit }, payload) {
      commit("removeGood", payload);
    }
  },
  getters: {
    getData(state, getters) {
      return state.goods.filter(q => q.employee === getters.currentUser);
    },
    visible(state) {
      return state.visible;
    },
    loading(state) {
      return state.loading;
    }
  }
};
