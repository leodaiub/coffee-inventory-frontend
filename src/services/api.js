import axios from "axios";

const api = axios.create({
  baseURL: "https://coffee-inventory.herokuapp.com/"
});

export default api;
