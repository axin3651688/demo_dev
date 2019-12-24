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
              :to="{path:'/faq/content',query: {title: item.title,content: item.content,username: item.updateUserName,time:item.updateTime,id: item.id}}"
              @click.native="showContent(item)"
            >{{item.title}}</router-link>
          </div>
          <div>
            <span class="card--update__user">{{item.updateUserName}}</span>
            <span class="card--updateTime">{{item.updateTime}}</span>
          </div>
          <div class="card--text">
            <span>{{item.contentText}}</span>
          </div>
          <div class="card--bottom">
            <router-link
              :to="{path:'/faq/category',query: {value: item.categoryText}}"
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
              :to="{path:'/faq/content',query: {title: item.title,content: item.content,username: item.updateUserName,time:item.updateTime,id: item.id}}"
              @click.native="showContent(item)"
            >{{item.title}}</router-link>
        </div>
        <div>
          <span class="card--update__user">{{item.updateUserName}}</span>
          <span class="card--updateTime">{{item.updateTime}}</span>
        </div>
        <div class="card--text">
          <span>{{item.contentText}}</span>
        </div>
        <div class="card--bottom">
          <router-link
              :to="{path:'/faq/category',query: {value: item.categoryText}}"
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
import { FindAll } from "../api/get-datas";
import bus from "../api/bus";
export default {
  data() {
    return {
      cardList: [],
      nowPageList: [],
      pageCount: 0,
      nowPage: 1,
      cardListString: ""
    };
  },
  methods: {
    // 获取数组
    getDatas() {
      bus.$on("str", data => {
        this.cardListString = data;
        window.console.log(data);
      });
      FindAll().then(res => {
        let dataList = res.data.data;
        for (let i in dataList) {
          if (dataList[i].categoryText == this.cardListString) {
            this.cardList.push(dataList[i]);
          }
        }
        let type = {};
        let count = this.cardList.length - 1;
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count - i; j++) {
            if (this.cardList[j].updateTime < this.cardList[j + 1].updateTime) {
              type = this.cardList[j + 1];
              this.cardList[j + 1] = this.cardList[j];
              this.cardList[j] = type;
            }
          }
        }
        for (let i in this.cardList) {
          this.cardList[i].updateTime = Date.unix_date(
            this.cardList[i].updateTime / 1000
          );
          this.cardList[i].contentText = this.getSamllText(
            this.cardList[i].content
          );
        }
        this.pageCount = this.cardList.length;
        let num = 12;
        for (let i = 0; i < num; i++) {
          if (i == this.cardList.length) {
            return;
          }
          this.nowPageList.push(this.cardList[i]);
        }
      });
    },
    //改变页码时
    changeList(e) {
      this.nowPage = e;
      this.nowPageList = [];
      window.console.log(e);
      let num = 12 * this.nowPage;
      for (let i = num - 12; i < num; i++) {
        if (i == this.cardList.length) {
          return;
        }
        this.nowPageList.push(this.cardList[i]);
      }
    },
    getSamllText(str) {
      str = str.replace(/<br>/gi, "\n");
      str = str.replace(/<xml>[\s\S]*?<\/xml>/gi, "");
      str = str.replace(/<style>[\s\S]*?<\/style>/gi, "");
      str = str.replace(/<\/?[^>]*>/g, "");
      str = str.replace(/[ | ]*\n/g, "\n");
      str = str.replace(/&nbsp;/gi, " ");
      return str;
    }
  },

  created() {
    this.getDatas();
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