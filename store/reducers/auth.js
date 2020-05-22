import { SIGNUP, LOGIN } from "../actions/auth";

const initialState = {
  email: "",
  password: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return;

    default:
      return state;
  }
};

export default authReducer;
