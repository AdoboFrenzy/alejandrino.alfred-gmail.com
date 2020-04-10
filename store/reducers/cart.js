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
      // console.log(actions.product);
      // console.log("removing " + actions.product.title);

      let updatedCartItem;
      var { id, title, price } = actions.product;

      console.log(id);

      if (state.items[id].quantity > 1) {
        console.log("delete qty > 2");
        // return {
        //   ...state,
        //   items: { ...state.items, [id]: updatedCartItem },
        //   totalSum: state.totalSum - price,
        // };
        return state;
      } else {
        const updatedItems = delete { ...state.items }[id];

        return {
          ...state,
          items: updatedItems,
          totalSum: state.totalSum - price,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
