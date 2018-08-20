/* eslint-disable */

export const addProduct = async (state, data) => {
  state.order.items.push(data);
};

export const addClientInfo = async (state, data) => {
  Object.assign(state.order, { client: data });
};

export const addOrderId = async (state, data) => {
  Object.assign(state.order, { id: data });
};

export const removeProduct = async (state, data) => {
  state.order.items = state.order.items.filter(item => item.product.code !== data);
};
