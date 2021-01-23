//axios二次封装
const axios = require("axios");
// Vue.prototype.$axios = axios;
// 设置允许携带cookie访问后端
// axios.defaults.withCredentials = true;
// 获取本地常量,里面存的是基础路径
let url = process.env.VUE_APP_BASE_API;
const request = axios.create({
  // withCredentials: true,
  baseURL: url, //设置基础路径
  timeout: 10000, //设置最大响应时间
  //工作后：设置请求头，设置token。后端才会响应数据
  // headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTIzNDU2IiwiaWF0IjoxNTk1NTI0ODY3LCJleHAiOjE1OTYxMjk2Njd9.4jkcI0DMYv3A1REGXQsJmWtwsxBU7nuRvFO7NJz2pms'}
});

//拦截器

module.exports = request; //request==axios 但是又比axios多了一些基础设置
