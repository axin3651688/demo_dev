<template>
  <div class="card">
    <div class="found">
      <el-input placeholder="搜索您的问题..." v-model="CatagoryKey"></el-input>
      <el-button type="success" size="medium">搜索</el-button>
    </div>
    <div class="list pc">
      <div class="list-left">
        <p>分类：</p>
      </div>
      <div class="list-right">
        <el-scrollbar style="height:100%;">
          <ul>
            <li v-for="item of DataList" :key="item.value"><a :href="item.html">{{item.text}}</a></li>
          </ul>  
        </el-scrollbar>        
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange" class="mobile">
      <el-collapse-item title="分类">
        <li v-for="item of DataList" :key="item.value"><a :href="item.html">{{item.text}}</a></li>
      </el-collapse-item>
    </el-collapse>
    <img  src="https://wt-box.worktile.com/public/d57c4463-0c4b-4c4a-8831-055f89665735" alt="图片加载中" title="安徽经邦" class="card--image">
  </div>
</template>

<script>
export default {
  data(){
    return {
      CatagoryKey:"",
      DataList: [
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
        {text: 'hehe',html: 'http://www.baidu.com'},
        {text: '百度',html: 'http://www.baidu.com'},
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
    margin: 15px 10px;
    height: 40px;
  }
  .found >>> .el-input__inner{
    height: 36px;
    line-height: 36px;
  }
  .list{
    border-top: 1px solid #E1E1E1;
    font-size: 14px;
    margin: 0 10px;
  }
  .list-left{
    float: left;
    width: 59px;
  }
  .list-left p{
    float: right;
  }
  .list-right{
    float: left;
    width: 200px;
    height: 174px;
  }
  ul{    
    padding: 0;
  }
  li{
    list-style: none;
    float: left;
    width: 33%;
    text-align: center;
    margin-bottom: 15px;
  }
  a{
    text-decoration: none;
    color: #666666;
  }
  .el-collapse-item >>> .el-collapse-item__header{
    padding: 0 20px;
    background-color: #F9F9F9;
  }
  .el-collapse-item >>> .el-collapse-item__content{
    padding: 0 50px;
    background-color: #F9F9F9;
  }
  .list-right >>> .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  @media (max-width: 1080px) {
    .pc{display: none !important;}
    .mobile{display: block !important;}
    .card{
      margin-top: 10px;
      width: 100%;
      border: 1px solid #E1E1E1;
      border-radius: 5px;
      padding: 20px 0 10px;
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
    .card--image{
      margin-top: 20px;
      width: 100%;
    }
  }
  @media (min-width: 1081px) {
    .pc{display: block !important;}
    .mobile{display: none !important;}
    .card{
      width: 100%;
      height: 400px;
      border: 1px solid #E1E1E1;
      border-radius: 5px;
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
    .card--image{
      margin: 20px 10px 15px 10px;
      width: 278px;
    }
  }
</style>