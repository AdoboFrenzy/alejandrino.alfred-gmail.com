export const ADD_ORDER = "ADD_ORDER";

export const addToOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: {
      cartItems,
      totalAmount,
    },
  };
};
