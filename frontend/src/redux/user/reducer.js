import {
  USERLOGINERROR,
  USERLOGINLOADING,
  USERLOGINSUCCESS,
  USERSIGNUPERROR,
  USERSIGNUPLOADING,
  USERSIGNUPSUCCESS,
} from "./userActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  token: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERLOGINLOADING:
      return { ...state, isLoading: true, isError: false, token: "" };
    case USERLOGINERROR:
      return { ...state, isLoading: false, isError: true, token: "" };
    case USERLOGINSUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
      };
    case USERSIGNUPLOADING:
      return { ...state, isLoading: true, isError: false };
    case USERSIGNUPERROR:
      return { ...state, isLoading: false, isError: true };
    case USERSIGNUPSUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};
