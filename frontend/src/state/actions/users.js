import * as api from "../../axios/axios.js";

// Action creators

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUrl = () => async (dispatch) => {
  try {
    const action = { type: "GET_URL", payload: "" };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const changeUrl = (url) => async (dispatch) => {
  try {
    const action = { type: "CHANGE_URL", payload: url };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
