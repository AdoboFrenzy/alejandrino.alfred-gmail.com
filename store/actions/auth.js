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

  return dispatch({
    type: SIGNUP,
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
    let message = "Something went wrong!";

    const errorResData = await response.json();
    // const errorId = errorResData.error.message;

    const errorCode = errorResData.error.code;

    // console.log(errorResData);

    // if (errorId === "EMAIL_NOT_FOUND" || errorId === "INVALID_EMAIL") {
    //   message = "This is an invalid e-mail!";
    // } else if (errorId === "INVALID_PASSWORD") {
    //   message = "This is an invalid password!";
    // }
    if (errorCode === 400) message = "Invalid Credentials!";

    throw new Error(message);
  }

  const resData = await response.json();

  return dispatch({
    type: LOGIN,
    userId: resData.localId,
    token: resData.idToken,
    expiresIn: resData.expiresIn,
  });
};
