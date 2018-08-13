/* eslint-disable */

export const addProduct = async (state, data) => {
  state.order.items.push(data);
};

export const removeProduct = async (state, data) => {
  state.order.items = state.order.items.filter(item => item.code !== data);
};
