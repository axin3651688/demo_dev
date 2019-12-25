<template>
  <div>
    <el-row :gutter="30" class="pc">
      <el-col :span="8" v-for="item of nowPageList" :key="item.value">
        <div class="faq--card">
          <a>
            <img :src="item.titleImgUrl" alt="加载中" class="card--image" />
          </a>
          <div class="card--title">
            <router-link
              :to="{path:'/faq/content',query: {id: item.id}}"
              @click.native="showContent(item)"
              class="title"
              :title="item.title"
            >{{item.title}}</router-link>
          </div>
          <div class="card--update">
            <span class="card--update__user">{{item.updateUserName}}</span>
            <span class="card--updateTime">{{item.updateTime}}</span>
          </div>
          <div class="card--text">
            <span>{{item.contentText}}</span>
          </div>
          <div class="card--bottom">
            <router-link
              :to="{path:'/faq/tooler',query: {value: item.categoryId,isSearch: 0}}"
              class="card--category"
            >{{item.categoryText}}</router-link>
            <span class="card-read__count">
              <i class="el-icon-reading reading"></i>
              {{item.readCount}}
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="mobile phone--box">
      <div class="faq--card" v-for="item of nowPageList" :key="item.value">
        <a>
          <img :src="item.titleImgUrl" alt="加载中" class="card--image" />
        </a>
        <div class="card--title">
          <router-link
              :to="{path:'/faq/content',query: {id: item.id}}"
              @click.native="showContent(item)"
            >{{item.title}}</router-link>
        </div>
        <div>
          <span class="card--update__user">{{item.updateUserName}}</span>
          <span class="card--updateTime">{{item.updateTime}}</span>
        </div>
        <div class="card--text">
          <span>{{item.content}}</span>
        </div>
        <div class="card--bottom">
          <router-link
              :to="{path:'/faq/tooler',query: {value: item.categoryId,isSearch: 0}}"
              class="card--category"
            >{{item.categoryText}}</router-link>
          <span class="card-read__count">
            <i class="el-icon-reading reading"></i>
            {{item.readCount}}
          </span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <span class="page--size">每页12条</span>
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
require("../api/date.js");
import { FindPage } from "../api/get-datas";
export default {
  data() {
    return {
      nowPageList: [],
      pageCount: 0,
      nowPage: 1,
      categoryList: [],
      isAll: true,
      categoryTextList: []
    };
  },
  methods: {
    // 获取数据
    getDatas(page) {
      FindPage(1,'updateTime',"desc",page,12).then(res => {
        // window.console.log(res.data.data);
        this.pageCount = res.data.data.totalElements;
        this.nowPageList = res.data.data.data;
        for (let i in this.nowPageList) {
          this.nowPageList[i].updateTime = Date.unix_date(
            this.nowPageList[i].updateTime / 1000
          );
          this.nowPageList[i].contentText = this.getSamllText(
            this.nowPageList[i].content
          );
          if(this.nowPageList[i].titleImgUrl == null){
            this.nowPageList[i].titleImgUrl = require("../assets/titleImg.svg");
          }
        }
        window.console.log(this.nowPageList)
      });
    },
    //卡片字段去html标签
    getSamllText(str) {
      str = str.replace(/<br>/gi, "\n");
      str = str.replace(/<xml>[\s\S]*?<\/xml>/gi, "");
      str = str.replace(/<style>[\s\S]*?<\/style>/gi, "");
      str = str.replace(/<\/?[^>]*>/g, "");
      str = str.replace(/[ | ]*\n/g, "\n");
      str = str.replace(/&nbsp;/gi, " ");
      return str;
    },
    //改变页码时
    changeList(e) {
      this.nowPage = e;
      this.nowPageList = [];
      this.getDatas(e);
    }
  },
  created() {
    this.getDatas(1);
  }
};
</script>

<style scoped>
.faq--card {
  border: 1px solid #e1e1e1;
  padding: 12px 12px 0;
  color: #cacfd3;
  font-size: 14px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.card--image {
  width: 100%;
  height: 109.59px;
}
a {
  text-decoration: none;
}
.card--title {
  font-size: 18px;
  margin: 12px 0;
}
.card--title a {
  color: #666;
}
.card--update__user {
  color: #cacfd3;
  padding-right: 8px;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
  display: inline-block;
}
.card--update{
  display: flex;
  align-items: center;
}
.card--text {
  color: gray;
  line-height: 22px;
  margin-top: 12px;
  text-indent: 28px;
}
.card--bottom {
  line-height: 30px;
  margin-top: 8px;
  border-top: 1px solid #e1e1e1;
}
.card--category {
  color: #69d0d1;
}
.card-read__count {
  float: right;
}
.reading {
  margin-right: 10px;
}
.phone--box {
  width: 90%;
  margin: 10px auto;
}
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.title{
  width: 270px;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
  display: inline-block;
}
@media (max-width: 1080px) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .faq--card {
    width: 80%;
    margin: 10px auto;
  }
  .card--text {
    height: 64px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .page--size {
    display: none;
  }
}
@media (min-width: 1081px) {
  .pc {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
  .card--text {
    height: 110px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .page--size {
    margin: 7px 10px 0;
    color: #606266;
    font-size: 12px;
  }
}
</style>