<template>
  <div class="question--box" v-if="questionList.length != 0">
    <div v-for="item of questionList" :key="item.value" class="single--box">
      <el-divider><h2>问题</h2></el-divider>
      <div v-html="item.content" class="content"></div>
      <el-divider><h2>回复</h2></el-divider>
      <div v-html="item.reply.content" class="content"></div>
      <el-divider></el-divider>
    </div>
    <div class="pagination">
      <span class="page--size">每页5条</span>
      <el-pagination
        :hide-on-single-page="value"
        :current-page.sync="nowPage"
        :page-size="12"
        @prev-click="changeList"
        @next-click="changeList"
        @current-change="changeList"
        layout=" prev, pager, next"
        :total="pageCount"
      ></el-pagination>
      <span class="page--size">共{{pageCount}}条</span>
    </div>
  </div>
</template>

<script>
import {GetQuestion} from "../api/get-datas"
import bus from '../api/bus';
export default {
  data(){
    return{
      questionList: [],
      nowPage: 1,
      faqId: 0,
      pageCount: 0
    }
  },
  methods: {
    //获取已提交问题和回复
    showQuestion(faqId,page){
      GetQuestion(faqId,page,5,2).then(res => {
        this.pageCount = res.data.data.totalElements;
        window.console.log(res.data.data);
        this.questionList = res.data.data.data;
      })
    }
  },
  mounted(){
    bus.$on('faqId',(data) => {
      this.faqId = data;
      this.showQuestion(this.faqId,1);
    });
  }
}
</script>

<style scoped>
  .question--box{
    border: 2px #f7f7f7 solid;
    margin: 10px 0;
    font-size: 12px;
    padding: 0 10px;
    color: #606266;
  }
  .content{
    padding: 0 30px;
  }
  .pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .page--size {
    margin: 7px 10px 0;
  }
  h2{
    font-size: 16px;
  }
  .single--box{
    margin-bottom: 20px;
  }
</style>