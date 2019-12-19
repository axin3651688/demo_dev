<template>
  <div>
    <el-row :gutter="30" class="pc">
      <el-col :span="8" v-for="item of cardList" :key="item.value">
        <div class="faq--card">
          <a><img :src="item.titleImgUrl" alt="加载中" class="card--image"/></a>
          <div class="card--title"><a>{{item.title}}</a></div>
          <div><span class="card--update__user">{{item.updateUserName}}</span><span class="card--updateTime">{{item.updateTime}}</span></div>
          <div class="card--text"><span>{{item.content}}</span></div>
          <div class="card--bottom">
            <a class="card--category">{{item.categoryText}}</a>
            <span class="card-read__count"><i class="el-icon-reading reading"></i>{{item.readCount}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="mobile phone--box">
      <div class="faq--card" v-for="item of cardList" :key="item.value">
        <a><img :src="item.titleImgUrl" alt="加载中" class="card--image"/></a>
        <div class="card--title"><a>{{item.title}}</a></div>
        <div><span class="card--update__user">{{item.updateUserName}}</span><span class="card--updateTime">{{item.updateTime}}</span></div>
        <div class="card--text"><span>{{item.content}}</span></div>
        <div class="card--bottom">
          <a class="card--category">{{item.categoryText}}</a>
          <span class="card-read__count">{{item.readCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("../api/date.js")
import {FindAll} from'../api/get-datas'
export default {
  data(){
    return{
      cardList: [
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯USIDhiU盾会死一",updateUserName: "安徽经邦",updateTime: "2019-12-19 15:50:50",categoryText: "hehe",readCount: 0},
      ]
    }
  },
  methods:{
    getDatas(){
      FindAll().then(res => {
        window.console.log(res.data.data);
        let dataList = res.data.data;
        let type = {};
        let count = dataList.length - 1;
          for (let i = 0;i < count;i++) {
            for (let j = 0;j < count - i;j++){
              if (dataList[j].updateTime < dataList[j+1].updateTime) {
                type = dataList[j+1];
                dataList[j+1] = dataList[j];
                dataList[j] = type;
              }
            }
          }
        for (let i in dataList){
          dataList[i].updateTime =  Date.unix_date(dataList[i].updateTime/1000);
          this.cardList.push(dataList[i]);
        }
      })
    }
  },
  created(){
    this.getDatas();
  }
}
</script>

<style scoped>
  .faq--card{
    border: 1px solid #E1E1E1;
    padding: 12px 12px 8px;
    color: #cacfd3;
    font-size: 14px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .card--image{
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  .card--title{
    font-size: 18px;
    margin: 12px 0;
  }
  .card--title a{
    color: #666;
  }
  .card--update__user{
    color: #cacfd3;
    padding-right: 8px;
  }
  .card--text{
    color: gray;
    line-height: 22px;
    height: 120px;
    margin-top: 12px;
    border-bottom: 1px solid #E1E1E1;
  }
  .card--bottom{
    line-height: 22px;
    margin-top: 8px;
  }
  .card--category{
    color: #69D0D1;
  }
  .card-read__count{
    float: right;
  }
  .reading{
    margin-right: 10px;
  }
  .phone--box{
    width: 90%;
    margin: 10px auto;
  }
  @media (max-width: 1080px) {
    .pc{display: none !important;}
    .mobile{display: block !important;}
    .faq--card{
      width: 80%;
      margin: 10px auto;
    }
  }
  @media (min-width: 1081px) {
    .pc{display: block !important;}
    .mobile{display: none !important;}  
  }
</style>