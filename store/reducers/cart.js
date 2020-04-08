import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalSum: 0,
};

const cartsReducer = (state = initialState, actions) => {
  console.log(actions);

  switch (actions.type) {
    case ADD_TO_CART:
      return state;

    default:
      return state;
  }
};

export default cartsReducer;
