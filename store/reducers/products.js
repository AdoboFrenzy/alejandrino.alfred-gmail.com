import { ADD_PRODUCT } from "../actions/products";
import { DELETE_PRODUCT } from "../actions/products";

import PRODUCTS from "../../data/dummy-data";

import Product from "../../models/product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId == "u1"),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { title, imageURL, description, price } = action.newProductInfo;

      console.log(action.newProductInfo);

      const lastProductIdNumber =
        parseInt(
          state.availableProducts[state.availableProducts.length - 1].id.slice(
            1
          )
        ) + 1;

      const newProductId = "p" + lastProductIdNumber;

      const result = new Product(
        newProductId,
        "u1",
        ...Object.values(action.newProductInfo)
      );

      let newProducts = [...state.availableProducts, result];

      let newUserProducts = [...state.userProducts, result];

      return {
        ...state,
        availableProducts: newProducts,
        userProducts: newUserProducts,
      };

    case DELETE_PRODUCT:
      let updatedProducts = [...state.availableProducts].filter(
        (product) => product.id !== action.productId
      );

      let updatedUserProducts = [...state.userProducts].filter(
        (product) => product.id !== action.productId
      );

      return {
        ...state,
        availableProducts: updatedProducts,
        userProducts: updatedUserProducts,
      };

    default:
      return state;
  }
};

export default productsReducer;
