export default {
  state: {
    user: [
      {
        email: "ad@mail.ru",
        password: "password"
      }
    ],
    currentUser: "",
    message: "",
    isUser: false,
    error: ""
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
    },
    currentUser(state, payload) {
      state.currentUser = payload;
    }
  },
  actions: {
    login({ commit, getters }, payload) {
      commit("clearError");
      if (
        getters.userLogin.filter(
          q => q.email === payload.email && q.password === payload.password
        ).length > 0
      ) {
        commit("userLogined", true);
        commit("currentUser", payload.email);
      } else {
        commit("error", "Wrong email or password");
      }
    },
    logout({ commit }) {
      commit("userLogined", false);
    },
    clearError({ commit }) {
      commit("clearError");
    },
    registration({ commit, getters }, user) {
      commit("clearError");
      if (getters.userLogin.filter(q => q.email === user.email).length === 0) {
        commit("currentUser", user.email);
        commit("registration", user);
        commit("userLogined", true);
      } else {
        commit("error", "This email exists, Please enter other email");
      }
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
    },
    currentUser(state) {
      return state.currentUser;
    }
  }
};
