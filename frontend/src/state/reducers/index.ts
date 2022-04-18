import { combineReducers } from "redux";

import { users, url, user, subs } from "./users";

// Combines the reducers
export default combineReducers({ users, url, user, subs });

// Exports the combined reducers with type combineReducers or any
export type State = ReturnType<typeof combineReducers | any>;
