import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

import CartItem from "../../models/cartItem";

const initialState = {
  items: {},
  totalSum: 0,
};

const cartReducer = (state = initialState, actions) => {
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

    case REMOVE_FROM_CART:
      // console.log(actions.product);
      console.log("removing " + actions.product.title);
      return state;

    default:
      return state;
  }
};

export default cartReducer;
