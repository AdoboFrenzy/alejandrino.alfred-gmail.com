import ADD_TO_ORDER from "../actions/orders";

const initialState = {
  items: [],
};

const ordersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_ORDER:
      return state;

    default:
      return state;
  }
};
