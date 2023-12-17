import axiosClient from "./customizeAPI";
const configSystemApi = {
  getAll: (params) => {
    const url = "/config-system";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: null, 
      },
    });
  },
};
export default configSystemApi;