import axios from "axios";
axios.defaults.timeout = 100000;
// 请求拦截
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 响应拦截
axios.interceptors.response.use(
  async response => {
      return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
