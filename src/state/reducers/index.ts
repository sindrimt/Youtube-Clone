import { combineReducers } from "redux";

import { users, url } from "./users";

// Combines the reducers
export default combineReducers({ users, url });

// Exports the combined reducers with type combineReducers or any
export type State = ReturnType<typeof combineReducers | any>;
