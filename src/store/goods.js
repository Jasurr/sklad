export default {
  state: {
    goods: [],
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
    insGood({ commit }, payload) {
      const id = Math.random();
        commit("insGood", {
          ...payload,
          id
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
    getData(state) {
      return state.goods;
    },
    visible(state) {
      return state.visible;
    },
    loading(state) {
      return state.loading;
    }
  }
};
