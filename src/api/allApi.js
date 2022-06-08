import api from "./api";

const allApi = {
  getAllPhoto: (params) => {
    const url = "/photos";
    return api.get(url, { params });
  },

  getPhoto: (id) => {
    const url = `/products/${id}`;
    return api.get(url);
  },
  getAllCategory: () => {
    const url = "/categorys";
    return api.get(url);
  },
};

export default allApi;
