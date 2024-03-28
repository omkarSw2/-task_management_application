import {
  POSTTODOERROR,
  POSTTODOLOADING,
  POSTTODOSUCCESS,
  TODOERROR,
  TODOLOADING,
  TODOSUCCESS,
} from "./todoActionTypes";
import axios from "axios";

const authToken = localStorage.getItem("token") || "";
const headers = {
  Authorization: `Bearer ${authToken}`,
};
export const GETTODOS = () => async (dispatch) => {
  try {
    dispatch({ type: TODOLOADING });
    let res = await axios.get(
      `http://localhost:8080/v1/task/`,

      {
        headers,
      }
    );
    console.log(res.data);
    dispatch({ type: TODOSUCCESS, payload: res.data.tasks });

    console.log("GETTODOS", res);
    return res;
  } catch (error) {
    dispatch({ type: TODOERROR });
    console.log(error.message);
  }
};
export const PostTodos = (obj) => async (dispatch) => {
  try {
    dispatch({ type: POSTTODOLOADING });
    let res = await axios.post(
      `http://localhost:8080/v1/task/addtask`,
      obj,

      {
        headers,
      }
    );
    console.log(res.data);
    dispatch({ type: POSTTODOSUCCESS });

    console.log("GETTODOS", res);
    return res;
  } catch (error) {
    dispatch({ type: POSTTODOERROR });
    console.log(error.message);
  }
};
export const PatchTodos = (_id, obj) => async (dispatch) => {
  try {
    dispatch({ type: POSTTODOLOADING });
    let res = await axios.patch(
      `http://localhost:8080/v1/task/updatetask/${_id}`,
      obj,

      {
        headers,
      }
    );
    console.log(res.data);
    dispatch({ type: POSTTODOSUCCESS });

    console.log("GETTODOS", res);
    return res;
  } catch (error) {
    dispatch({ type: POSTTODOERROR });
    console.log(error.message);
  }
};
export const DeleteTodos = (_id) => async (dispatch) => {
  try {
    dispatch({ type: POSTTODOLOADING });
    let res = await axios.delete(
      `http://localhost:8080/v1/task/deletetask/${_id}`,

      {
        headers,
      }
    );
    console.log(res.data);
    dispatch({ type: POSTTODOSUCCESS });

    console.log("GETTODOS", res);
    return res;
  } catch (error) {
    dispatch({ type: POSTTODOERROR });
    console.log(error.message);
  }
};
