/* eslint-disable */

export const addProduct = async (state, data) => {
  state.order.items.push(data);
};
