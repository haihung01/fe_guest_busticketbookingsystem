import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://triptix2.azurewebsites.net",
  // baseURL: "https://triptix2.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosClient;