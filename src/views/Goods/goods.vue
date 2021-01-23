<template>
  <div class="main-box">
    <!-- 表单 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      highlight-current-row
      height="600px"
      border
      :empty-text="text"
    >
      <!-- 搜索框 -->
      <el-table-column fixed="right" width="150" align="center">
        <template slot-scope="scope" slot="header">
          <!-- <div style="display:flex"> -->
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
            @input="searchmsg(scope)"
            class="searchinput"
          />
          <!-- </div> -->
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <!-- 表格 -->
      <el-table-column align="center" prop="book_id" label="商品id" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="book_name" label="商品名称" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="book_price" label="商品原价" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="book_sales" label="商品售价" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="book_author" label="商品作者" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="book_merchant" label="商家" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="book_status" label="出售状态" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="catalog" label="分类" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="catalog_type" label="分类型号" sortable width="120"></el-table-column>
      <el-table-column align="center" prop="book_title" label="商品描述" width="400"></el-table-column>
    </el-table>
    <!--编辑表格-->
    <div class="addform-warp" ref="addform" style="display:none;line-height:100%">
      <p class="addform-title">商品编辑列表</p>
      <el-divider></el-divider>

      <el-input placeholder="修改商品名称" v-model="form.s_name">
        <template slot="prepend">名称</template>
      </el-input>

      <el-input placeholder="修改商品原价" v-model="form.s_m_price">
        <template slot="prepend">原价</template>
      </el-input>

      <el-input placeholder="修改商品售价" v-model="form.s_s_price">
        <template slot="prepend">售价</template>
      </el-input>

      <el-input placeholder="修改商品作者" v-model="form.s_author">
        <template slot="prepend">作者</template>
      </el-input>

      <el-input placeholder="修改商家" v-model="form.s_press">
        <template slot="prepend">商家</template>
      </el-input>

      <el-input placeholder="修改商品分类" v-model="form.f_name">
        <template slot="prepend">分类</template>
      </el-input>

      <el-input placeholder="修改分类型号" v-model="form.f_type">
        <template slot="prepend">型号</template>
      </el-input>

      <el-input placeholder="修改商品描述" v-model="form.s_title">
        <template slot="prepend">描述</template>
      </el-input>

      <div class="editbtn">
        <el-button @click="recompose" type="success">确定</el-button>
        <el-button @click="cancleeditgood" type="danger">取消</el-button>
      </div>
    </div>

    <keep-alive>
      <pagination :totalpage="totoalnum" @getCurrentPage="getCurrentPage"></pagination>
    </keep-alive>
  </div>
</template>

<script>
import pagination from "../components/Pagination";
import { getGoodList, deleGood, reEdit } from "../../api/userApi";

export default {
  data() {
    return {
      tableData: [],
      search: "",
      totoalnum: 140,
      pagesize: 20,
      currentpage: 1,
      text: "暂无数据",
      form: {
        s_name: "",
        s_m_price: "",
        s_s_price: "",
        s_author: "",
        s_press: "",
        f_name: "",
        s_title: "",
        f_type: "",
        _id: ""
      },
      timer:null
    };
  },
  methods: {
    // input搜索框信息
    searchmsg() {
      clearTimeout(this.timer);
          this.timer= setTimeout(()=>{
            getGoodList({}).then(response => {
            // console.log(this.search);
            let { data } = response.data;
            data = data.filter(item => item.s_title);
            //  console.log( Object.values(data[0]).join().includes(this.search));判断数据是否含有搜索值
            data = data.filter(el => {
              return Object.values(el)
                .join()
                .includes(this.search);
            });
            this.tableData = data.map(item => {
              return {
                book_id: item._id ? item._id : "--",
                book_name: item.s_name ? item.s_name : "--",
                book_price: item.s_m_price ? item.s_m_price : "--",
                book_sales: item.s_s_price ? item.s_s_price : "--",
                book_author: item.s_author ? item.s_author : "--",
                book_merchant: item.s_press ? item.s_press : "--",
                book_status: item.s_s_name ? item.s_s_name : "--",
                book_title: item.s_title.length > 2 ? item.s_title : "--",
                catalog: item.f_name ? item.f_name : "--",
                catalog_type: item.f_type ? item.f_type : "--"
              };
            });
          });
          },500)

    },
    // 编辑button
    handleEdit(scope) {
      this.$refs.addform.style.cssText = "display:block;line-height:100%";
      this.form.s_name = scope.row.book_name;
      this.form.s_m_price = scope.row.book_price;
      this.form.s_s_price = scope.row.book_sales;
      this.form.s_author = scope.row.book_author;
      this.form.s_press = scope.row.book_merchant;
      this.form.f_name = scope.row.catalog;
      this.form.f_type = scope.row.catalog_type;
      this.form.s_title = scope.row.book_title;
      this.form._id = scope.row.book_id;
    },
    // 重编辑
    recompose(scope) {
      this.$refs.addform.style.cssText = "display:none;line-height:100%";
      reEdit(this.form);
      this.$message({
        message: "修改成功",
        type: "success"
      });
    },
    //取消编辑
    cancleeditgood() {
      this.$refs.addform.style.cssText = "display:none;line-height:100%";
    },
    // 删除button
    handleDelete(index, row) {
      const { book_id } = row;
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleGood(book_id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 分页器功能
    getCurrentPage(pointpage) {
      console.log(pointpage);
      // 发送请求返回页面 page&size
      getGoodList()
        .then(response => {
          let { data, flag, message } = response.data;
          data = data.filter(item => item.s_title);
          data=data.splice(20*(pointpage-1),20*pointpage)

          if (flag) {

            this.tableData = data.map(item => {
              return {
                book_id: item._id ? item._id : "--",
                book_name: item.s_name ? item.s_name : "--",
                book_price: item.s_m_price ? item.s_m_price : "--",
                book_sales: item.s_s_price ? item.s_s_price : "--",
                book_author: item.s_author ? item.s_author : "--",
                book_merchant: item.s_press ? item.s_press : "--",
                book_status: item.s_s_name ? item.s_s_name : "--",
                book_title: item.s_title.length > 2 ? item.s_title : "--",
                catalog: item.f_name ? item.f_name : "--",
                catalog_type: item.f_type ? item.f_type : "--"
              };
            });
          } else {
            this.$message.error("无法获取商品信息！");
            return;
          }
        })
        .catch(errormes => {
          this.$message.error(errormes);
          return;
        });
    },
    // 获取商品列表
    isGoodList() {
      getGoodList()
        .then(response => {
          let { data, flag, message } = response.data;
          data = data.filter(item => item.s_title);
          this.totoalnum=data.length
          data = data.splice(0,20)
          if (flag) {
            this.$message.success(message);
            this.tableData = data.map(item => {
              return {
                book_id: item._id ? item._id : "--",
                book_name: item.s_name ? item.s_name : "--",
                book_price: item.s_m_price ? item.s_m_price : "--",
                book_sales: item.s_s_price ? item.s_s_price : "--",
                book_author: item.s_author ? item.s_author : "--",
                book_merchant: item.s_press ? item.s_press : "--",
                book_status: item.s_s_name ? item.s_s_name : "--",
                book_title: item.s_title.length > 2 ? item.s_title : "--",
                catalog: item.f_name ? item.f_name : "--",
                catalog_type: item.f_type ? item.f_type : "--"
              };
            });
          } else {
            this.$message.error("无法获取商品信息！");
            return;
          }
        })
        .catch(error => {
          this.$message.error(error);
          return;
        });
    }
  },
  mounted() {
    this.isGoodList();
  },
  components: {
    pagination
  }
};
</script>
<style lang="scss" scoped>
.searchinput {
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    text-align: center;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    text-align: center;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }
}
.addform-warp {
  border: #333 2px solid;
  // display: flex!important;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  line-height: 10px;
  text-shadow: 1px 1px 1px rgb(7, 7, 7);
  background-color: #f9fafc;
  font-size: 36px;
  line-height: 100px;
  color: rgb(153, 148, 148);
  // position: absolute;
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
  .el-input {
    margin: 10px 0;
  }
}
</style>