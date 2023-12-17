import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://btbs.ap-southeast-1.elasticbeanstalk.com",
  // baseURL: "https://triptix2.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosClient;