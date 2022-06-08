import api from "./api";

const adminApi = {
  addCategory: (values) => {
    const url = "admin/category";
    return api.post(url, values);
  },

  editCategory: (id, values) => {
    const url = `admin/category/${id}`;
    return api.put(url, values);
  },
  deleteCategory: (id) => {
    const url = `admin/category/${id}`;
    return api.delete(url);
  },
  addPhoto: (values) => {
    const url = "admin/photo";
    return api.post(url, values);
  },

  editPhoto: (id, values) => {
    const url = `admin/photo${id}`;
    return api.put(url, values);
  },
  deletePhoto: (id) => {
    const url = `admin/photo${id}`;
    return api.delete(url);
  },
};

export default adminApi;
