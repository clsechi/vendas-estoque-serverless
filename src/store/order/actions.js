/* eslint-disable */
// import Vue from 'vue';

export const addProduct = async ({ commit }, product) => {
  commit('addProduct', product);
};

export const removeProduct = async ({ commit }, productCode) => {
  commit('removeProduct', productCode);
};