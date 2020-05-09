import { ADD_ORDER, SET_ORDERS } from "../actions/orders";

import Order from "../../models/order";

const initialState = {
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, orders: action.orders };

    case ADD_ORDER:
      const { id, cartItems, totalAmount, date } = action.orderData;

      const newOrder = new Order(id, cartItems, totalAmount, date);

      return { ...state, orders: state.orders.concat(newOrder) };

    default:
      return state;
  }
};

export default ordersReducer;
