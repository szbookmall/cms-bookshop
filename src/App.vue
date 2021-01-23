<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

*{
    margin: 0;
    padding: 0
}
body,
html{
  height: 100%;
#app{
  height: 100%;
}
.main-box {
  position: relative;
  line-height: 100px;
}
.el-pagination{
  height: 30px;
  overflow: hidden;
  box-sizing: content-box;
  .el-pager{
    height: 30px;
  }
}
.el-main{
  padding: 12px;
}
.el-table thead.is-group th {
    background: rgba(95, 94, 179, 0.5)!important;
    color: #423e3e;
    padding: 8px 0px
}
.el-select {
  width: 130px;
}
.login-wrap{
  height: 100%;
  position: relative;
  background-image: linear-gradient(
      to bottom left,
      rgb(41, 13, 65),
      rgb(95, 94, 179)
    );
    color: #fff;
    text-align: center;
    font-size: 36px;
    text-shadow: 3px 3px 3px #333;
  .formtable{
    width: 25%;
    height: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    box-sizing: content-box;
    padding: 10px;
    border: rgb(255, 252, 252) solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10%;
    box-shadow: 6px 6px 6px 4px rgba(0, 0, 0, 0.3);
  }
}
}
</style>
