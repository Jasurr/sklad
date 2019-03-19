import Vue from "vue";
import Vuex from "vuex";
import goods from "./goods";
import VuexPersistence from "vuex-persist";
import login from "./login";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: [goods, login],
  plugins: [new VuexPersistence().plugin]
});
