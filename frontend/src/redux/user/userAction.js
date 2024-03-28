import {
  USERLOGINERROR,
  USERLOGINLOADING,
  USERLOGINSUCCESS,
  USERSIGNUPERROR,
  USERSIGNUPLOADING,
  USERSIGNUPSUCCESS,
} from "./userActionTypes";
import axios from "axios";

// const authToken = localStorage.getItem("token") || "";
// const headers = {
//   Authorization: `Bearer ${authToken}`,
//   Accept: "application/json",
// };

export const LoginUser = (obj) => async (dispatch) => {
  try {
    dispatch({ type: USERLOGINLOADING });
    let res = await axios.post(`http://localhost:8080/v1/users/login`, obj);
    console.log(res.data);
    dispatch({ type: USERLOGINSUCCESS, payload: res.data.accessToken });
    localStorage.setItem("token", res.data.accessToken);

    console.log("LoginUser", res);
    return res;
  } catch (error) {
    dispatch({ type: USERLOGINERROR });
    console.log(error.message);
  }
};
export const SignupUser = (obj) => async (dispatch) => {
  try {
    dispatch({ type: USERSIGNUPLOADING });
    let res = await axios.post(`http://localhost:8080/v1/users/register`, obj);
    console.log(res.data);
    // dispatch({ type: USERSIGNUPSUCCESS, payload: res.data });
    dispatch({ type: USERSIGNUPSUCCESS });
    // localStorage.setItem("token", res.data.access_token);
    console.log("SIGNUP", res);
    return res;
  } catch (error) {
    dispatch({ type: USERSIGNUPERROR });
    console.log(error.message);
  }
};
