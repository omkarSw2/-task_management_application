import { TODOERROR, TODOLOADING, TODOSUCCESS } from "./todoActionTypes";

const initialState = {
  isTodoLoading: false,
  isTodoError: false,
  todos: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TODOLOADING:
      return { ...state, isTodoLoading: true, isTodoError: false, todos: [] };
    case TODOERROR:
      return { ...state, isTodoLoading: false, isTodoError: true, todos: [] };
    case TODOSUCCESS:
      return {
        ...state,
        isTodoLoading: true,
        isTodoError: false,
        todos: payload,
      };

    default:
      return state;
  }
};
