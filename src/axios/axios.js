import axios from "axios";

const apiUrl = "http://localhost:8000/api";

export const getUser = () =>
  axios
    .get(apiUrl)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const postUser = (postUser) =>
  axios
    .post(apiUrl, postUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
