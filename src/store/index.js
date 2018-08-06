import Vue from 'vue';
import Vuex from 'vuex';

import product from './product';
import order from './order';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product,
    order,
  },
});

export default store;
