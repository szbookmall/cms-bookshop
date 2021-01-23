<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form-wrap">
    <p class="titleform">添加商品列表</p>
    <el-divider></el-divider>
    <el-form-item label="商品名称" prop="book_name">
      <el-input v-model="ruleForm.book_name"></el-input>
    </el-form-item>
    <el-form-item label="商品原价" prop="book_price">
      <el-input v-model="ruleForm.book_price"></el-input>
    </el-form-item>
    <el-form-item label="商品售价" prop="book_sales">
      <el-input v-model="ruleForm.book_sales"></el-input>
    </el-form-item>
    <el-form-item label="商品作者" prop="book_author">
      <el-input v-model="ruleForm.book_author"></el-input>
    </el-form-item>
    <el-form-item label="商家" prop="book_merchant">
      <el-input v-model="ruleForm.book_merchant"></el-input>
    </el-form-item>
    <el-form-item label="商品描述" prop="book_title">
      <el-input v-model="ruleForm.book_title"></el-input>
    </el-form-item>
    <el-form-item label="分类" prop="catalog" class="chosecatalog">
      <el-select v-model="ruleForm.catalog" placeholder="请选择商品类别">
        <el-option label="新鲜品尝" value="新鲜品尝"></el-option>
        <el-option label="文学精品" value="文学精品"></el-option>
        <el-option label="畅销图书" value="畅销图书"></el-option>
        <el-option label="精选童书" value="精选童书"></el-option>
        <el-option label="经管读物" value="经管读物"></el-option>
        <el-option label="精选原版图书" value="精选原版图书"></el-option>
        <el-option label="2021年杂志征订" value="2021年杂志征订"></el-option>
        <el-option label="深圳读书月2020“年度十大童书”" value="深圳读书月2020“年度十大童书”"></el-option>
        <el-option label="其他" value="其他"></el-option>
      </el-select>
    </el-form-item>
    <!-- button按钮 -->
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { getGoodAdd } from "../../api/userApi";
export default {
  data() {
    return {
      ruleForm: {
        book_name: "",
        book_price: "",
        book_sales: "",
        book_author: "",
        book_merchant: "",
        catalog: "",
        book_title: "",
        data: new Date()
      },
      rules: {
        book_name: [{ required: true, message: "请输入书名", trigger: "blur" }],
        book_price: [
          { required: true, message: "请输入价格", trigger: "blur" }
        ],
        book_sales: [
          { required: true, message: "请输入价格", trigger: "blur" }
        ],
        book_merchant: [
          { required: true, message: "请输入商家名称", trigger: "blur" }
        ],
        catalog: [{ required: true, message: "请选择分类", trigger: "change" }],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //发送请求，根据返回数据信息进行判断
          this.$message({
            message: "商品添加成功",
            type: "success"
          });
          getGoodAdd({
            book_name: this.ruleForm.book_name,
            book_price: this.ruleForm.book_price,
            book_sales: this.ruleForm.book_sales,
            book_author: this.ruleForm.book_author,
            book_merchant: this.ruleForm.book_merchant,
            catalog: this.ruleForm.catalog,
            book_title: this.ruleForm.book_title,
            data: this.ruleForm.data
          });
          this.ruleForm={}
          return;
        } else {
          this.$message({
            message: "请完善商品信息！",
            type: "error"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
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
  .chosecatalog {
    text-align: left;
  }
}
</style>