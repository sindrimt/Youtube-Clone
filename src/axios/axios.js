import axios from "axios";

const apiUrl = "http://localhost:8000/api/user";

export const getUser = () => axios.get(apiUrl);

export const postUser = (postUser) =>
  axios
    .post(apiUrl, postUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
