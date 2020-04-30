export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (newProductInfo) => ({
  type: ADD_PRODUCT,
  newProductInfo,
});

export const editProduct = (editProductInfo) => ({
  type: EDIT_PRODUCT,
  editProductInfo,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId,
});
