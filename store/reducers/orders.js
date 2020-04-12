import { ADD_ORDER } from "../actions/orders";

import Order from "../../models/order";

const initialState = {
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const { cartItems, totalAmount } = action.orderData;
      const newOrderDate = new Date();

      const newOrder = new Order(
        newOrderDate.toString(),
        cartItems,
        totalAmount,
        newOrderDate
      );

      return { ...state, orders: state.orders.concat(newOrder) };

    default:
      return state;
  }
};

export default ordersReducer;
