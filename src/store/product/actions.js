/* eslint-disable */
import Vue from 'vue';

export const getProducts = async ({ commit }) => {
  const snapshot = await Vue.prototype.$firestore.collection('products').get();
  const result = snapshot.docs.map(doc => doc.data());
  commit('setProducts', result);
};
