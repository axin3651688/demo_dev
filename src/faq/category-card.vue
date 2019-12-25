<template>
  <div class="card">
    <div class="found">
      <el-input placeholder="搜索您的问题..." v-model="sreachKey"></el-input>
      <el-button type="success" size="medium" @click="doSreach">搜索</el-button>
    </div>
    <div class="list pc">
      <div class="list-left">
        <p>分类：</p>
      </div>
      <div class="list-right">
        <el-scrollbar style="height:100%;">
          <ul>
            <li v-for="item of DataList" :key="item.value" :title="item.text">
              <router-link :to="{path:'/faq/tooler',query: {value: item.id,isSearch: 0}}">{{item.text}}</router-link>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange" class="mobile">
      <el-collapse-item title="分类">
        <li v-for="item of DataList" :key="item.value">
          <router-link :to="{path:'/faq/tooler',query: {value: item.id,isSearch: 0}}">{{item.text}}</router-link>
        </li>
      </el-collapse-item>
    </el-collapse>
    <img
      src="https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735"
      alt="图片加载中"
      title="安徽经邦"
      class="card--image pc"
    />
  </div>
</template>

<script>
import {FindAllCategory} from "../api/get-datas"
export default {
  data() {
    return {
      sreachKey: "",
      DataList: []
    };
  },
  mounted() {
    FindAllCategory().then(res => {
      let dataList = res.data.data;
      for(let i in dataList){
        if(dataList[i].faqCount != null && dataList[i].faqCount != 0){
          this.DataList.push(dataList[i]);
        }
      }
    })
  },
  methods: {
    doSreach(){
      this.$router.push({
        path: '/faq/tooler',
        query: {value: this.sreachKey,isSearch: 1}
      })
    }
  }
};
</script>

<style scoped>
.found {
  margin: 15px 10px;
  height: 40px;
}
.found >>> .el-input__inner {
  height: 36px;
  line-height: 36px;
}
.list {
  border-top: 1px solid #e1e1e1;
  font-size: 14px;
  margin: 0 10px;
}
.list-left {
  float: left;
  width: 59px;
}
.list-left p {
  float: right;
}
.list-right {
  float: left;
  width: 200px;
  height: 174px;
  margin-bottom: 20px;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  margin-bottom: 16px;
}
a {
  text-decoration: none;
  color: #666666;
}
.card--image {
  margin: 0 10px 15px;
  width: 278px;
}
.el-collapse-item >>> .el-collapse-item__header {
  padding: 0 20px;
  background-color: #f9f9f9;
}
.el-collapse-item >>> .el-collapse-item__content {
  padding: 0 50px;
  background-color: #f9f9f9;
}
.list-right >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
@media (max-width: 1080px) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .card {
    margin-top: 10px;
    width: 100%;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    padding: 20px 0 10px;
    box-shadow: 0 0 1px 0.5px #e2e2e2;
  }
  .el-button {
    font-weight: 500;
    float: right;
    margin-right: 8px;
  }
  .el-input {
    width: 60%;
    float: left;
    margin-left: 8px;
  }
}
@media (min-width: 1081px) {
  .pc {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
  .card {
    width: 100%;
    height: 398px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    box-shadow: 0 0 1px 0.5px #e2e2e2;
  }
  .el-button {
    font-weight: 500;
    float: right;
  }
  .el-input {
    width: 60%;
    float: left;
  }
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 16px;
    width: 66px;
    float: left;
    line-height: 20px;
  }
}
</style>