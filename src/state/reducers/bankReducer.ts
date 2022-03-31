import { ActionType } from "../action-types/index";
import { Action } from "../actions"; // Interface

const initialState = "";

const reducer = (state: string = initialState, action: Action): string => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return action.payload;
    case ActionType.SAVE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
