<template>
  <div class="block pages">
    <el-pagination
      class="pages"
      layout="prev, pager, next,total"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :total="totalpage"

      >
    </el-pagination>
  </div>
</template>
<script>
//totalpage 总页数
export default {
    name:'pagination',
    props:['totalpage'],
    data(){
        return{
            pageSize:20,//一页渲染多少条
            currentPage:1,
        }
    },
    methods:{
        
        handleCurrentChange(val){
            //val 当前页的页数
            this.currentPage=val;
            this.$emit("getCurrentPage",this.currentPage,this.pageSize)
        }
    }
}
</script>>
<style>
    .pages{
        width: 100%;
        height: 50px;
        display: flex;
        display:  -webkit-flex;
        justify-content: space-around;
        align-items:center;
        /* background: red; */
    }
    .el-pager,.el-pager li{
        vertical-align:middle;
    }
</style>