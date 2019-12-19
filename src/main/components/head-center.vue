<template>
  <div class="head--center">
    <img src="http://www.cnbisoft.com/images/index/logo.png" alt="图片加载中" title="安徽经邦" class="logo" />
    <div class="head__list">
      <span><a href="http://www.cnbisoft.com/index_2.html">首页</a></span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link">
            产品列表<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item 
              v-for="item of datas" 
              :key="item.id" 
              v-html="item.innerHtml" 
              :class="item.selfClass" 
              item.attribute 
              :disabled="getDisabled(item.id)">
              </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span><a href="#">帮助中心</a></span>
      <span><el-button type="primary">登录</el-button></span>
      <span><el-button type="primary">注册</el-button></span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      datas:[
        {
          id:1,
          innerHtml: "<h2>产品列表</h2>"
        },{
          id:2,
          innerHtml: "<a href='./design/login'>设计器</a>",
          selfClass: "item-a"
        },{
          id:3,
          innerHtml: "<a href='./design/login-portal'>租户门户</a>",
          selfClass: "item-a"
        },{
          id:4,
          innerHtml: "<a href='./single-console'>租户门户后台管理</a>",
          selfClass: "item-a"
        },{
          id:5,
          innerHtml: "<a href='./platform-console'>产品后台管理</a>",
          selfClass: "item-a"
        },{
          id:6,
          innerHtml: "<h2>轻应用列表</h2>"
        },{
          id:7,
          innerHtml: "<a href='./attendance'>考勤</a>",
          selfClass: "item-a"
        },{
          id:8,
          innerHtml: "<a href='#'>云智囊Web版</a>",
          selfClass: "item-a"
        }
      ]
    }
  },
  methods: {
    getDisabled(id){
      if (id == 1 || id == 6) {
        return true;
      }else {
        return false;
      }
    }
  }
}
</script>

<style scoped>
  .logo{
    width: 200px;
  }
  .head--center{
    width: 80%;
    height: 6em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .head__list > span{
    margin-left: 2em;
  }
  .head__list a{
    font-size: 1.3em;
    text-decoration: none;
    color: #666;
  }
  .el-dropdown{
    color: #666;
    font-size: 1.3em;
  }
  
  .item-a >>> a{
    font-size: 1.1em;
    text-decoration: none;
    color: #666;
  }
</style>