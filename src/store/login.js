export default {
  state: {
    user: [
      {
        username: "admin@mail.ru",
        password: "password"
      }
    ],
    message: "",
    isUser: false
  },
  mutations: {
    error(state, message) {
      state.error = message;
    },
    login(state, payload) {
      state.user = payload;
    },
    registration(state, user) {
      state.user.push(user);
    },
    clearError(state) {
      state.error = null;
    },
    userLogined(state, payload) {
      state.isUser = payload;
    }
  },
  actions: {
    login({ commit, getters }, payload) {
      commit("clearError");

      getters.userLogin.forEach(item => {
        if (
          item.username === payload.username &&
          item.password === payload.password
        ) {
          commit("userLogined", true);
        } else {
          commit("error", "Wrong user name or password");
        }
      });
    },
    logout({ commit }) {
      commit("userLogined", false);
    },
    clearError({ commit }) {
      commit("clearError");
    },
    registration({ commit, getters }, user) {
      commit("clearError");
      getters.userLogin.forEach(item => {
        if (item.username !== user.username) {
          commit("registration", user);
          commit("userLogined", true);
        } else {
          commit("error", "This email exists, Please enter other email");
        }
      });
    }
  },
  getters: {
    userLogin(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
    isUserLogined(state) {
      return state.isUser;
    }
  }
};
