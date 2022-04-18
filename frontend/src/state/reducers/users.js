// Creates reducers for different actions

export const users = (users = [], action) => {
  switch (action.type) {
    case "FETCH__ALL":
      return action.payload;
    case "CREATE":
      return users;
    default:
      return users;
  }
};

export const url = (url = "", action) => {
  switch (action.type) {
    case "GET_URL":
      return action.payload;
    case "CHANGE_URL":
      return action.payload;
    default:
      return url;
  }
};

export const user = (user = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    case "CHANGE_USER":
      return action.payload;
    default:
      return user;
  }
};

export const subs = (subs = {}, action) => {
  switch (action.type) {
    case "SET_SUBSCRIPTIONS":
      return action.payload;
    default:
      return subs;
  }
};
