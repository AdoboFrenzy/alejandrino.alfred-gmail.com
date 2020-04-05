import ADD_TO_CART from "../actions/cart";

import PRODUCTS from "../../data/dummy-data";

const initialState = {
  items: {},
  totalSum: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("adding to cart!");
      const productId = action.id;
      const selectedProduct = PRODUCTS.find(
        (product) => product.id === productId
      );

      const { title, price } = selectedProduct;

      return state;

    default:
      return state;
  }
};
