import { SIGNUP, LOGIN } from "../actions/auth";

const initialState = {
  email: "",
  password: "",
};

const authReducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case SIGNUP:
      console.log("signing up");
      return state;

    case LOGIN:
      console.log("logging in");
      return state;

    default:
      return state;
  }
};

export default authReducer;
