import axios from "axios";
import { baseUrl } from "./constants";

const axiosApi = axios.create({
  baseURL: baseUrl,
});

export default axiosApi;