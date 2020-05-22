export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => async (dispatch) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhVHko5EO114w4UqqW8D9TeRa1IH_JLjA",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const resData = await response.json();

  console.log(resData);

  return dispatch({
    type: SIGNUP,
    email: resData.email,
    userId: resData.localId,
    token: resData.idToken,
    expiresIn: resData.expiresIn,
  });
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhVHko5EO114w4UqqW8D9TeRa1IH_JLjA",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const resData = await response.json();

  console.log(resData);

  return dispatch({
    type: LOGIN,
  });
};
