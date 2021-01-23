<template>
  <!-- model用于和表单input框进行绑定 -->
  <!-- rules用于提交操作验证规则对象的设定 -->
  <div class="login-wrap">
    <h3 class="login-title" style="line-height:8rem">深圳书城系统管理</h3>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="formtable">
      <el-divider>
        <i class="el-icon-user"></i>
      </el-divider>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-divider>
        <i class="el-icon-unlock"></i>
      </el-divider>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="tohome" round plain size="mini">登录</el-button>
        <el-button type="primary" @click="toreg" round plain size="mini">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getGoodList, getGoodId } from "../../api/userApi";

export default {
  name: "index",
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "123123"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    tohome() {
      console.log(this.$refs.ruleForm);

      this.$refs.ruleForm.validate(valid => {
        // valid的值为布尔值
        if (!valid) {
          this.$message.error("信息错误，请重新填写！");
          return;
        } else {
          console.log("拿到接口进行调试");
          // this.$router.push('/home')

          // 可以成功提交，和后台api进行联调
          // login(this.params)
          //   .then(response => {
          //     console.log(response);
          //     let { meta, data } = response.data;
          //     if (meta == 200) {
          //       this.$message.success(meta.msg);
          //       // 记录登录成功的token，前往后台首页
          //       localStorage.setItem("html7csetbtoken", data.token);
          //       this.$router.push("/home");
          //       return;
          //     } else {
          //       this.$message.error(meta.msg);
          //       return;
          //     }
          //   })
          //   .catch(error => {
          //     this.$message.error("系统登录失败");
          //     return;
          //   });
        }
      });
    },
    toreg() {
      this.$router.push("/reg");
    }
  },
  async created() {
    console.log(process.env);
  }
};
</script>

