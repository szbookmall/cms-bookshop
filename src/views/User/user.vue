<template>
  <div style="width: 100%" class="main-box">
    <!-- 搜索内容 -->
    <el-input
      v-model="search"
      placeholder="请输入内容"
      :msg="search"
      ref="searchinput"
      v-on:keyup.enter.native="searchmsg(select, search)"
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="关键字" value="关键字"></el-option>
        <el-option label="用户名" value="用户名"></el-option>
        <el-option label="日期" value="日期"></el-option>
      </el-select>
      <el-button @click="searchmsg(select, search)" icon="el-icon-search" slot="append"></el-button>
    </el-input>
    <!-- 显示表格 -->
    <el-table :data="tableData" border style="width: 100%" highlight-current-row height="600px">
      <el-table-column prop="avatar" label="头像" width="120" align="center">
        <template slot-scope="slot">
          <el-avatar :size="size" :src="slot.row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="data" label="日期" width="120" align="center"></el-table-column>
      <el-table-column prop="username" label="用户名" width="120" align="center"></el-table-column>
      <el-table-column prop="realname" label="姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" width="400" align="center"></el-table-column>
      <el-table-column prop="phone" label="电话" width="150" align="center"></el-table-column>
      <el-table-column prop="identity" label="用户类型" width="150" align="center"></el-table-column>

      <!-- 操作按钮 -->
      <el-table-column fixed="right" label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="edituser(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="removeuser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--编辑表格-->
    <div class="addform-warp" ref="addform" style="display:none;line-height:150%">
      <p class="addform-title">用户编辑列表</p>
      <el-divider></el-divider>
      <!-- 头像上传 -->
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <!--用户信息-->
      <el-input placeholder="修改地址" v-model="form.addresschange">
        <template slot="prepend">地址</template>
      </el-input>
      <el-input placeholder="修改电话" v-model="form.phonechange">
        <template slot="prepend">电话</template>
      </el-input>
      <el-input placeholder="修改用户类型" v-model="form.identitychange">
        <template slot="prepend">类型</template>
      </el-input>
      <!-- 操作按钮 -->
      <div class="editbtn">
        <el-button @click="confiredit" type="success">确定</el-button>
        <el-button @click="cancleedituser" type="danger">取消</el-button>
      </div>
    </div>
    <!-- 分页器 -->
    <pagination :totalpage="totoalnum" @:getCurrentPage="getCurrentPage"></pagination>
  </div>
</template>
<script>
import pagination from "../components/Pagination";
import { userlist } from "../../api/userApi";
export default {
  name: "user",
  data() {
    return {
      tableData: [],
      search: "",
      select: "",
      size: "medium",

      pagesize: 20, //一页渲染多少条
      currentpage: 1,
      totoalnum: null,
      imageUrl: "",
      form: {
        identitychange: "",
        addresschange: "",
        phonechange: ""
      }
    };
  },
  methods: {
    //编辑按钮/取消编辑按钮/确定编辑
    edituser(row) {
      this.$refs.addform.style.cssText = "display:block;line-height:150%";
      this.form.identitychange=row.identity
      this.form.addresschange=row.address
      this.form.phonechange=row.phone
    },
    cancleedituser(row) {
      this.$refs.addform.style.cssText = "display:none;line-height:150%";
    },
    confiredit() {
      console.log("编辑好了");

      this.$refs.addform.style.cssText = "display:none;line-height:150%";
      this.$message({
        message: "修改成功",
        type: "success"
      });
    },
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
    //删除用户
    removeuser(row) {
      console.log(row.id);
      //调用api完成删除操作
    },
    //搜索框
    searchmsg() {
      console.log(1);
    },
    // 分页器
    getCurrentPage(_currentpage, _size) {
      this.pagesize = _size;
      this.currentpage = _currentpage;
      // 发送请求返回页面 page&size
    },
    // 获取用户列表
    getuserlist() {
      userlist().then(res => {
        let { data, flag } = res.data;
        this.tableData = data;
        this.totoalnum = data.length;
      });
    }
  },
  components: {
    pagination
  },

  created() {
    this.getuserlist();
  }
};
</script>
<style scoped lang="scss">
</style>