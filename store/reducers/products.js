import { ADD_PRODUCT } from "../actions/products";
import { DELETE_PRODUCT } from "../actions/products";

import PRODUCTS from "../../data/dummy-data";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId == "u1"),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("product added!");
      return state;

    case DELETE_PRODUCT:
      console.log("deleting product!");
      console.log(action.productId);
      return state;

    default:
      return state;
  }
};

export default productsReducer;
