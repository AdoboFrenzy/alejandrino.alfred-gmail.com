import { AsyncStorage } from "react-native";

export const AUTH = "AUTH";
export const LOGOUT = "LOGOUT";

let timer;

export const authenticate = (userId, token, expTime) => (dispatch) => {
  dispatch(setLogoutTimer(expTime));

  dispatch({
    type: AUTH,
    userId,
    token,
  });
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};

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

  const expirationDate = new Date(
    new Date().getTime() + +resData.expiresIn * 1000
  );

  dispatch(
    authenticate(resData.localId, resData.idToken, +resData.expiresIn * 1000)
  );

  saveDataToStorage(resData.idToken, resData.localId, expirationDate);
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

  const expirationDate = new Date(
    new Date().getTime() + +resData.expiresIn * 1000
  );

  dispatch(
    authenticate(resData.localId, resData.idToken, +resData.expiresIn * 1000)
  );

  saveDataToStorage(resData.idToken, resData.localId, expirationDate);
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};
const setLogoutTimer = (expTime) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expTime);
  };
};

const saveDataToStorage = (token, userId, expDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      userId,
      expDate: expDate.toISOString(),
    })
  );
};
