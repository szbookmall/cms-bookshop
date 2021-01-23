<template>
  <div class="order-wrap">
    <el-input
      v-model="search"
      placeholder="请输入搜索内容"
      :msg="search"
      ref="searchinput"
      v-on:keyup.enter.native="searchmsg(select, search)"
      class="inputform"
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="用户名" value="用户名"></el-option>
        <el-option label="订单号" value="订单号"></el-option>
        <el-option label="日期" value="日期"></el-option>
      </el-select>
      <el-button @click="searchmsg(select, search)" icon="el-icon-search" slot="append"></el-button>
    </el-input>

    <el-table :data="tableData" style="width: 100%" height="600px">
      <!-- 表头 下单时间区域 -->
      <el-table-column prop="date" label="下单日期" width="150" align="center" class="thead"></el-table-column>
      <!-- 表头 商品信息区域 -->
      <el-table-column prop="date" label="商品信息" width="150" align="center">
        <el-table-column prop="name" label="订单号" width="120" align="center"></el-table-column>
        <el-table-column prop="name" label="用户名" width="120" align="center"></el-table-column>
        <el-table-column prop="name" label="商品" width="120" align="center">
          <el-table-column prop="province" label="数量" width="120" align="center"></el-table-column>
          <el-table-column prop="province" label="单价" width="120" align="center"></el-table-column>
          <el-table-column prop="city" label="总计" width="120" align="center"></el-table-column>
        </el-table-column>
      </el-table-column>
      <!-- 表头 配送信息区域 -->
      <el-table-column label="配送信息" align="center">
        <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120" align="center"></el-table-column>
          <el-table-column prop="city" label="市区" width="120" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" width="300" align="center"></el-table-column>
          <el-table-column prop="zip" label="邮编" width="120" align="center"></el-table-column>
        </el-table-column>
      </el-table-column>
      <!-- 按钮 -->
      <el-table-column fixed="right" label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="edituser(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="removeuser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      search:'',
      select:""
    };
  },
  methods: {
    searchmsg() {}
  }
};
</script>

<style scoped>
.inputform{
    margin: 12px 0 24px 0
}
</style>