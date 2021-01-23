<template>
  <!-- model用于和表单input框进行绑定 -->
  <!-- rules用于提交操作验证规则对象的设定 -->
  <div class="login-wrap">
      <h3 class="login-title" style="line-height:8rem">注册账号</h3>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="formtable">

       <el-divider><i class="el-icon-user"></i></el-divider>
      <el-form-item prop="username" >
        <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="用户名"></el-input>
      </el-form-item>
       <el-divider><i class="el-icon-unlock"></i></el-divider>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="regist" round plain size="mini">确定</el-button>
        <el-button type="primary" @click="tohome" round plain size="mini">使用账号密码登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

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
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
    };
  },
  methods: {
    tohome() {
      this.$router.push('/login')
    },
    regist(){
        // 提交至api
        this.$message.success("注册成功，请到登录界面进行登录")
    }
  },

};
</script>