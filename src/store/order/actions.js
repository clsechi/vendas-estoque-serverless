import Vue from 'vue';
import { LocalStorage } from 'quasar';

export const createOrder = async ({ commit }, payload) => {
  const id = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  await Vue.prototype.$firestore.collection('orders').doc(`#${id}`).set(payload);
  commit('addOrderId', id);
};

export const addProduct = async ({ commit }, product) => {
  LocalStorage.get.item('order');

  // if (!order) {
  //   LocalStorage.set('order', {
  //     order: {
  //       items: [product],
  //     },
  //   });
  // } else {
  //   order.items.push(product);
  //   LocalStorage.set('order', order);
  // }

  commit('addProduct', product);
};

export const addClientInfo = async ({ commit }, client) => {
  await Vue.prototype.$firestore.collection('clients').doc(client.email).set(client);
  commit('addClientInfo', client);
};


export const removeProduct = async ({ commit }, productCode) => {
  commit('removeProduct', productCode);
};
