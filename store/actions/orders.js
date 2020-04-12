export const ADD_TO_ORDER = "ADD_TO_ORDER";

export const addToOrder = (cartItems) => {
  return {
    type: ADD_TO_ORDER,
    orderData: {
      cartItems,
    },
  };
};
