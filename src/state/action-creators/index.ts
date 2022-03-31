import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index"; //Interface

export const setSearchTerm = (url: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: url,
    });
  };
};
export const saveUser = (user: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_USER,
      payload: user,
    });
  };
};
