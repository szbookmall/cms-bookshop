// 引入axios
import require from "../utils/axios";

// 例：
// 验证用户名
//功能：验证用户名是否存在
// export function getGoodList() {
//     return require.get('/good/goodlist')
// }

// 发送商品列表请求
export function getGoodList(options = {}) {
  let url;
  if (Object.keys(options).length) {
    // console.log("true", Object.keys(options).length);
    url = `/good/goodlist?page=${
      options.page
        ? options.page <= 21
          ? options.page >= 16
            ? options.page
            : 16
          : 21
        : 16
    }&pagesize=20`;
  } else {
    // console.log("else", Object.keys(options).length);
    url = `/good/goodlist`;
  }
  // console.log(url);
  return require.get(url);
}

// 添加商品接口
export function getGoodAdd(options) {
  let params = {
    s_name: options.book_name,
    s_m_price: options.book_price,
    s_s_price: options.book_sales,
    s_author: options.book_author,
    s_press: options.book_merchant,
    f_name: options.catalog,
    s_title: options.book_title,
    data: options.data,
  };
  return require.post(`/good/addgood`, params);
}

// 删除商品接口
export function deleGood(id) {
  return require.delete(`/good/delgood/${id}`);
}
//编辑商品接口
export function reEdit(options) {
  let { _id } = options;
  let body = {
    f_name: options.f_name,
    f_type: options.f_type,
    s_author: options.s_author,
    s_m_price: options.s_m_price,
    s_name: options.s_name,
    s_press: options.s_press,
    s_s_price: options.s_s_price,
    s_title: options.s_title,
  };

  return require.put(`/good/editgoods/${_id}`, body);
}
//获取用户列表信息
export function userlist() {
  return require.get("/backuser/userlist");
}

export function useradd(options) {
  console.log(options);
  // let params = {
  //   address: options.address,
  //   avatar:
  //     "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  //   data: options.data,
  //   identity: options.identity,
  //   password: options.password,
  //   phone: options.phone,
  //   realname: options.realname,
  //   username: options.username,
  // };
  return require.post('/backuser/regin',options);
}

//  default getGoodList

// thisAjax() {
//     const passwordData = this.ruleForm.password;

//     const self = this;
//     //登录接口需要修改，此处为注册的接口
//     const url = "/good/goodlist";
//     fetch(url, {
//       method: "get",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       // body: {
//       //   passwordData,
//       // },
//     }).then(
//       function(response) {
//         //登录后跳转的页面--首页
//         console.log("跳转", response);
//         // this.$router.push("/");
//         // self.$router.replace("/home");
//       },
//       function(error) {
//         alert("请求失败", error);
//       }
//     }
