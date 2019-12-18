<template>
  <div class="card">
    <div class="found">
      <el-input placeholder="搜索您的问题..."></el-input>
      <el-button type="success" size="medium">搜索</el-button>
    </div>
    <div class="list">
      <div class="list-left">
        <p>分类：</p>
      </div>
      <div class="list-right">
        <ul>
          <li v-for="item of DataList" :key="item.value"><a :href="item.html">{{item.text}}</a></li>
        </ul>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      DataList: [
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
      ]
    }
  }
}
</script>

<style scoped>
  
  .found{
    height: 60px;
  }
  .found >>> .el-input__inner{
    height: 36px;
    line-height: 36px;
  }
  .list{
    border-top: 1px solid #E1E1E1;
    font-size: 14px;
  }
  .list-left{
    float: left;
    width: 20%;
    height: 200px;
  }
  .list-left p{
    float: right;
  }
  .list-right{
    float: left;
    height: 200px;
    width: 73%;
  }
  .list-right ul{
    list-style: none;
    padding: 0;
  }
  .list-right li{
    float: left;
    width: 33%;
    text-align: center;
    margin-bottom: 10px;
  }
  li a{
    text-decoration: none;
    color: #666666;
  }
  @media (max-width: 1080px) {
    .pc{display: none !important;}
    .mobile{display: block !important;}
    .card{
      margin-top: 10px;
      width: 100%;
      height: 240px;
      border: 1px solid #E1E1E1;
      border-radius: 5px;
      padding: 20px 0;
      box-shadow: 0 0 1px 0.5px #E2E2E2;
    }
    .el-button{
      font-weight: 500;
      float: right;
      margin-right: 8px;
    }
    .el-input{
      width: 60%;
      float: left;
      margin-left: 8px;
    }
  }
  @media (min-width: 1081px) {
    .pc{display: block !important;}
    .mobile{display: none !important;}
    .card{
      width: 100%;
      height: 300px;
      border: 1px solid #E1E1E1;
      border-radius: 5px;
      padding: 20px 16px 10px 16px;
      box-shadow: 0 0 1px 0.5px #E2E2E2;
    }
    .el-button{
      font-weight: 500;
      float: right;
    }
    .el-input{
      width: 60%;
      float: left;
    }
  }
</style>