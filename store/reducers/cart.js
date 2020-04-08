import CartItem from "../../models/cartItem";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //   console.log("adding to cart!");
      //   const selectedProduct = action.product;

      //   const { id, title, price } = selectedProduct;

      //   if (!!state.items[id]) {
      //   } else {
      //     const newCartItem = new CartItem(1, title, price, price);

      //     const result = { ...state, [id]: { newCartItem } };
      //     console.log(result);
      //     return;
      //   }

      return state;

    default:
      return state;
  }
};
