<template>
  <div>
    <FaqHeader />
    <div class="main--box">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item><router-link to="/faq" >帮助中心</router-link></el-breadcrumb-item>
          <el-breadcrumb-item>分类</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <CenterContent/>
    </div>
    <Footer />
  </div>
</template>

<script>
import FaqHeader from "./faq-header"
import CenterContent from "./category-main"
import Footer from "@/main/components/foot"
import bus from '../api/bus'
export default {
  components: {
    "FaqHeader": FaqHeader,
    "CenterContent": CenterContent,
    "Footer":Footer
  },
  data(){
    return{
      cardListString: ''
    }
  },
  created(){
    this.cardListString = this.$router.history.current.query.value;
  },
  mounted(){
    bus.$emit('str',this.cardListString);
  }
}
</script>

<style scoped>
  @media (max-width: 1080px) {
    .pc{display: none !important;}
    .mobile{display: block !important;}
    .main--box{
      width: 98%;
      margin: 15px auto 0;
    }
    .breadcrumb{
        width: 90%;
        margin: 0 auto 10px;
    }
  }
  @media (min-width: 1081px) {
    .pc{display: block !important;}
    .mobile{display: none !important;} 
    .main--box{
      max-width: 960px;
      margin: 30px auto;
    }
    .breadcrumb{
        max-width: 1000px;
        margin: 0 auto 20px;
    }
    .el-breadcrumb{
        font-size: 16px;
    }
  }
</style>