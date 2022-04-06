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
