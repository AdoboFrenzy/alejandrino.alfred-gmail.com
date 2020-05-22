export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => async (dispatch) => {
  return dispatch({ email, password });
};
