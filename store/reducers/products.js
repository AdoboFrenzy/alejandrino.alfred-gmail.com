import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "../actions/products";

import PRODUCTS from "../../data/dummy-data";

import Product from "../../models/product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId == "u1"),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      title = action.newProductInfo.title;
      imageURL = action.newProductInfo.imageURL;
      description = action.newProductInfo.description;
      price = action.newProductInfo.price;

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

    case EDIT_PRODUCT:
      title = action.editProductInfo.title;
      imageURL = action.editProductInfo.imageURL;
      description = action.editProductInfo.description;
      price = action.editProductInfo.price;
      existingId = action.editProductInfo.existingId;

      const availableProductsIndex = state.availableProducts.findIndex(
        (product) => product.id === existingId
      );

      const productIndex = state.userProducts.findIndex(
        (product) => product.id === existingId
      );

      const updatedProduct = new Product(
        existingId,
        state.userProducts[productIndex].id,
        title,
        imageURL,
        description,
        state.userProducts[productIndex].price
      );

      const editedAvailableProducts = [...state.availableProducts];
      editedAvailableProducts[availableProductsIndex] = updatedProduct;

      const editedUserProducts = [...state.userProducts];
      editedUserProducts[productIndex] = updatedProduct;

      return {
        ...state,
        availableProducts: editedAvailableProducts,
        userProducts: editedUserProducts,
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
