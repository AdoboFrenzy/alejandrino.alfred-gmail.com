export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  newProduct,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId,
});
