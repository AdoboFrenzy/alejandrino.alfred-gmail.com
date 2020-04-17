import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";

import CartItem from "../../models/cartItem";

const initialState = {
  items: {},
  totalSum: 0,
};

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      let updateOrNewCartItem;
      var { id, title, price } = actions.product;

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
      let updatedCartItem;
      var { id, title, price } = actions.product;
      const newSum = state.totalSum - price;

      if (state.items[id].quantity > 1) {
        const { quantity, productTitle, productCost, totalCost } = state.items[
          id
        ];

        updatedCartItem = new CartItem(
          quantity - 1,
          productTitle,
          productCost,
          totalCost - productCost
        );

        return {
          ...state,
          items: { ...state.items, [id]: updatedCartItem },
          totalSum: newSum < 0 ? 0 : newSum,
        };
      } else {
        const updatedItems = { ...state.items };
        delete updatedItems[id];

        return {
          ...state,
          items: updatedItems,
          totalSum: newSum < 0 ? 0 : newSum,
        };
      }

    case ADD_ORDER:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
