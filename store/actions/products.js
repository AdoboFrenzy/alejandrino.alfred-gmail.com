import Product from "../../models/product";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://shopappacademind.firebaseio.com/products.json"
    );

    if (!response.ok) {
      throw new Error("Error loading from Database!");
    }

    const resData = await response.json();

    console.log(resData);

    const loadedProducts = [];

    for (const key in resData) {
      const { description, imageURL, price, title } = resData[key];

      loadedProducts.push(
        new Product(key, "u1", title, imageURL, description, price)
      );
    }

    dispatch({ type: SET_PRODUCTS, products: loadedProducts });
  } catch (err) {
    // Send to custom analytics server!
    throw err;
  }
};

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
