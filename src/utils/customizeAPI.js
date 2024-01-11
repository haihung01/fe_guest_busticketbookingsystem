import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://btbs.ap-southeast-1.elasticbeanstalk.com",
  //baseURL: "https://triptix3.azurewebsites.net",
  // baseURL: "https://triptix2.azurewebsites.net",
  
  headers: {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*'
    }
  },
});

export default axiosClient;