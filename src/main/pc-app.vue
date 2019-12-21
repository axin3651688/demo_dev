<template>
  <div id="app">
    <el-container>
    <el-header>
      <HeadCenter />
    </el-header>
      <el-main>
        <div class="main">
          <div class="main--left">
            <div class="main--left__box">
              <h1 class="main--left__title">公司简介</h1>
              <p>安徽经邦软件有限公司是智能决策支持系统（IDSS）的倡导和领导者，长期致力于新一代基于人工智能技术的企业大数据分析（企业智能经营决策支持系统）技术软件的研究、应用与开发。</p>
              <el-form >
                <el-form-item>
                  <el-input placeholder="请输入手机号码" prefix-icon="el-icon-edit" v-model="inputText" maxlength="11" show-word-limit></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">免费注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="main--right">
            <img src="https://cdn.worktile.com/assets/images/next/home/home-banner.svg?v=8.0.1+2019112701" alt="图片加载中" class="main--right__image">
          </div>
        </div>
      </el-main>
      <div class="footer">
        <FootCenter />
      </div>
    </el-container>
  </div>
</template>

<script>
import HeadCenter from "./components/head-center.vue"
import FootCenter from "./components/foot.vue"
export default {
  name: 'app',
  data() {
    return {
      inputText: ''
    }
  },
  components: {
    "HeadCenter":HeadCenter,
    "FootCenter":FootCenter
  }
}
</script>

<style scoped>
  .main{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 8em auto;
  }
  .main--left{
    width: 45%;
  }
  .main--left__box{
    padding: 5em;
  }
  .main--left__title{
    margin-bottom: 1em;
    font-size: 3em;
  }
  .main--left__box p{
    color: #777;
    width: 80%;
    margin-bottom: 2em;
    font-size: 1.2em;
  }
  .el-input{
    width: 80%;
  }
  .main--right{
    width: 45%;
  }
  .bottom{
    width: 80%;
    height: 40em;
    margin: 0 auto;
  }
  .footer{
    background: #fff;
    height: 25em;
  }
  .main--right__image{
    width: 80%
  }
</style>
