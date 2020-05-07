export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (newProductInfo) => async (dispatch) => {
  // Any async code here !

  const response = await fetch(
    "https://shopappacademind.firebaseio.com/products.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfo),
    }
  );

  const resData = await response.json();

  console.log(resData);

  dispatch({
    type: ADD_PRODUCT,
    newProductInfo: {
      ...newProductInfo,
      id: resData.name,
    },
  });
};

export const editProduct = (editProductInfo) => ({
  type: EDIT_PRODUCT,
  editProductInfo,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId,
});
