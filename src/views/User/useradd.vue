<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form-wrap">
    <p class="titleform">添加用户列表</p>
    <el-divider></el-divider>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" prop="realname">
      <el-input v-model="ruleForm.realname"></el-input>
    </el-form-item>
    <el-form-item label="地址" prop="address">
      <el-input v-model="ruleForm.address"></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <!-- <el-form-item label="类型" prop="identity">
    <el-input v-model="ruleForm.identity"></el-input>
    </el-form-item>-->
    <el-form-item label="类型" class="chosecatalog" prop="identity">
      <el-select v-model="ruleForm.identity" placeholder="请选择用户类型">
        <el-option label="普通用户" value="customer"></el-option>
        <el-option label="商家" value="shoper"></el-option>
        <el-option label="管理员" value="admin"></el-option>
      </el-select>
    </el-form-item>
    <!-- 头像上传 -->
    <!-- <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="handleAvatarSuccess"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>-->
    <!-- button按钮 -->
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {useradd} from '../../api/userApi'
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        realname: "",
        password: "",
        address: "",
        phone: "",
        identity: "customer",
        avatar:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        data: new Date()
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        realname: [{ required: true, message: "请输入真实姓名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
        identity: [{ required: true, message: "请选择分类", trigger: "change" }]
      },
      imageUrl: null
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //发送请求，根据返回数据信息进行判断
          useradd(this.ruleForm)
          this.$message({
            message: "修改成功",
            type: "success"
          });
          return;
        } else {
          this.$message({
            message: "添加失败",
            type: "error"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess() {},
    handleAvatarSuccess() {}
  }
};
</script>
<style lang="scss" scoped>
.form-wrap {
  border: 1px solid #333;
  background-color: #f9fafc;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 40px;

  .titleform {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: rgb(8, 8, 8);
    font-weight: 700;
  }
  .el-button {
    margin-right: 40px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    /* position: relative; */
    overflow: hidden;
  }
  .avatar-uploader {
    width: 400px;
    height: 100px;
    margin: 0 auto;
  }
  .el-upload {
    width: 100px;
    height: 100px;
    left: 150px;
  }
  #imgactive {
    width: 100%;
    height: 100%;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .el-upload .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    line-height: 100px;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-row .el-input .el-input-group__append {
    padding: 0 20px;
  }
  .chosecatalog {
    text-align: left;
  }
}
</style>