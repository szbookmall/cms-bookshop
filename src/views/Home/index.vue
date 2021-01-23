<template>
  <el-container>
    <el-header height="80px">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">深圳书城CMS</div>
        </el-col>
        <el-col :span="3" :offset="15">
          <div class="grid-content bg-purple">
            <el-button size="mini" round>
              退出
              <i class="el-icon-thumb"></i>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="rgba(250, 250, 250,.1)"
              text-color="#ccc"
              active-text-color="rgb(208, 236, 105)"
              :router="routerStatus"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item index="user">用户列表</el-menu-item>
                <el-menu-item index="useradd">用户添加</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-goods"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item index="goods">商品列表</el-menu-item>
                <el-menu-item index="goodsadd">商品添加</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-order"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item index="order">订单列表</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
          <!-- 三级菜单嵌套路由 -->
          <keep-alive>
          <router-view/>
          </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>

export default {
  name: "index",
  data() {
    return {
      routerStatus: true
    };

  },
};
</script>

<style lang='scss' >
.el-container {
  height: 100%;
  .el-header {
    font-size: 36px;
    background-image: linear-gradient(
      to bottom right,
      rgb(41, 13, 65),
      rgb(95, 94, 179)
    );
    color: #ccc;
    text-align: center;
    line-height: 80px;
    height: 100px;
    text-shadow: 3px 3px 3px #333;
    .el-button {
      background-color: rgb(87, 92, 161);
      color: #ccc;
    }
  }
  .el-aside {
    background-image: linear-gradient(
      to bottom left,
      rgb(41, 13, 65),
      rgb(95, 94, 179)
    );
    color: #fff;
    text-align: center;
  }
  .el-main {
    background-image: linear-gradient(
      to bottom left,
      rgba(41, 13, 65, 0.5),
      rgba(95, 94, 179, 0.5)
    );
    color: #fff;
    text-align: center;
  }

}


body > .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
//   background-color: rgb(208, 236, 105)
}

.addform-warp{
  border: #333 2px solid;
  box-sizing: border-box;
  padding: 10px;
  text-shadow: 1px 1px 1px rgb(7, 7, 7);
  background-color: #f9fafc;
  font-size: 36px;
  color: rgb(153, 148, 148);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 6;
  .el-divider--horizontal {
    display: block;
    width: 90%;
    transform: translateX(5%);
    height: 3px;
  }
  .el-input{
    margin: 10px 0;
  }

}
</style>