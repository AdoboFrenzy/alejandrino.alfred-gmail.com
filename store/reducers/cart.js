import { ADD_TO_CART } from "../actions/cart";

import CartItem from "../../models/cartItem";

const initialState = {
  items: {},
  totalSum: 0,
};

const cartsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      let updateOrNewCartItem;
      const { id, title, price } = actions.product;

      if (!state.items[id]) {
        updateOrNewCartItem = new CartItem(1, title, price, price);
      } else {
        const { quantity, productTitle, productCost, totalCost } = state.items[
          id
        ];
        updateOrNewCartItem = new CartItem(
          quantity + 1,
          productTitle,
          productCost,
          totalCost + productCost
        );
      }

      return {
        ...state,
        items: { ...state.items, [id]: updateOrNewCartItem },
        totalSum: state.totalSum + price,
      };

    default:
      return state;
  }
};

export default cartsReducer;
