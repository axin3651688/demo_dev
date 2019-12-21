<template>
  <div>
    <el-row :gutter="30" class="pc">
      <el-col :span="8" v-for="item of nowPageList" :key="item.value">
        <div class="faq--card">
          <a><img :src="item.titleImgUrl" alt="加载中" class="card--image"/></a>
          <div class="card--title"><a>{{item.title}}</a></div>
          <div><span class="card--update__user">{{item.updateUserName}}</span><span class="card--updateTime">{{item.updateTime}}</span></div>
          <div class="card--text"><span>{{item.content}}</span></div>
          <div class="card--bottom">
            <a class="card--category" @:click="setCateCategory">{{item.categoryText}}</a>
            <span class="card-read__count"><i class="el-icon-reading reading"></i>{{item.readCount}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="mobile phone--box">
      <div class="faq--card" v-for="item of nowPageList" :key="item.value">
        <a><img :src="item.titleImgUrl" alt="加载中" class="card--image"/></a>
        <div class="card--title"><a>{{item.title}}</a></div>
        <div><span class="card--update__user">{{item.updateUserName}}</span><span class="card--updateTime">{{item.updateTime}}</span></div>
        <div class="card--text"><span>{{item.content}}</span></div>
        <div class="card--bottom">
          <a class="card--category" @:click="setCateCategory">{{item.categoryText}}</a>
          <span class="card-read__count"><i class="el-icon-reading reading"></i>{{item.readCount}}</span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <span class="page--size"> 每页12条</span>
      <el-pagination
        :hide-on-single-page="value"
        :current-page.sync="nowPage"
        :page-size="12"
        @prev-click="reduceList"
        @next-click="addList"
        layout=" prev, pager, next"
        :total="pageCount">
      </el-pagination>
      <span class="page--size"> 共{{pageCount}}条</span>
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
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1581421507096",categoryText: "百度",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1584100796000",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1577450415079",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1579109600007",categoryText: "百度",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1578196000700",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1578196000700",categoryText: "百度",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1580797416000",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1579160000079",categoryText: "百度",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1578600010079",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1579600041007",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身嗖嗖嗖嗖；搜懂的皮哦打破四地对空身上就会丢撒旦法萨克的哈市将",updateUserName: "安徽经邦",updateTime: "1604100796000",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1580797416000",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1579160214579",categoryText: "百度",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1577602210079",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身",updateUserName: "安徽经邦",updateTime: "1579603341007",categoryText: "hehe",readCount: 0},
        {titleImgUrl: "https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735",title: "设计器设计器设计器设计器",content: "阿杰嗷嗷Ian快乐娜娜阿娜时间段是激动死了可的独立历史的洪流说得好思路的哈斯四点半你就啦的盾会死一是换个环境上的痕迹是胡说八道库哈斯大变身嗖嗖嗖嗖；搜懂的皮哦打破四地对空身上就会丢撒旦法萨克的哈市将",updateUserName: "安徽经邦",updateTime: "1604101796000",categoryText: "hehe",readCount: 0},
      ],
      nowPageList: [],
      pageCount: 0,
      nowPage: 1
    }
  },
  methods:{
    // 获取数据按时间顺序放入数组
    getDatas(){
      FindAll().then(res => {
        window.console.log(res.data.data);
        let dataList = res.data.data;
        for (let i in dataList){
          this.cardList.push(dataList[i]);
        }
        let type = {};
        let count = this.cardList.length - 1;
        for (let i = 0;i < count;i++) {
          for (let j = 0;j < count - i;j++){
            if (this.cardList[j].updateTime < this.cardList[j+1].updateTime) {
              type = this.cardList[j+1];
              this.cardList[j+1] = this.cardList[j];
              this.cardList[j] = type;
            }
          }
        }
        for (let i in this.cardList){
          this.cardList[i].updateTime =  Date.unix_date(this.cardList[i].updateTime/1000);          
        }
        this.pageCount = count + 1;
        let num = 12 * this.nowPage;
        for (let i = num - 12;i < num;i++){
          this.nowPageList.push(this.cardList[i]);
        }
      })
    },
    setCateCategory() {
      this.$router.push({ path: '/sql', query: { value: false } })
    },
    addList() {
      this.nowPage += 1;
      this.nowPageList=[];
      window.console.log(this.nowPage);
      let num = 12 * this.nowPage;
        for (let i = num - 12;i < num;i++){
          this.nowPageList.push(this.cardList[i]);
      }
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
    padding: 12px 12px 0;
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
    margin-top: 12px;
    text-indent:28px;
  }
  .card--bottom{
    line-height: 30px;
    margin-top: 8px;
    border-top: 1px solid #E1E1E1;
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
  .pagination{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  @media (max-width: 1080px) {
    .pc{display: none !important;}
    .mobile{display: block !important;}
    .faq--card{
      width: 80%;
      margin: 10px auto;
    }
    .card--text{
      height: 64px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      margin-bottom: 10px;
    }
    .page--size{
      display: none;
    }
  }
  @media (min-width: 1081px) {
    .pc{display: block !important;}
    .mobile{display: none !important;}  
    .card--text{
      height: 110px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      margin-bottom: 10px;
    }
    .page--size{
      margin:7px 10px 0;
      color: #606266;
      font-size: 12px;
    }
  }
</style>