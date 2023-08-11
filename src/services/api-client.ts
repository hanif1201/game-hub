import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4ed30891aed749d6893bb0c327d230c8",
  },
});
