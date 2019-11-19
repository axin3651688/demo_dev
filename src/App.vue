<template class="bgcolor">
  <el-container>
    <el-aside id="leftAside" width="256px">
      <el-header class="ElHeader1">
        <img src="">
      </el-header>
      <el-main>
        <LeftInput/>
        <LeftBar :leftDatas=datas.leftDatas  />
      </el-main>
    </el-aside>
    <el-container id="rightAside">
      <el-header class="ElHeader2">

      </el-header>
      <el-main>
        <RightImages :rightDatas=datas.rightDatas />
      </el-main>
    </el-container>
  </el-container>
</template>



<script>
import RightImages from './components/ImageList.vue'
import LeftBar from './components/Navigation.vue'
import LeftInput from './components/Input.vue'
import datas from './components/data.js'
export default {
  // name: 'rightAside',
  components: {
    "LeftBar":LeftBar,
    "LeftInput":LeftInput,
    "RightImages":RightImages
  },
  data(){
    return {
      datas:datas,
        // leftDatas:leftDatas
    }
  },
  created(){
    console.log(this.datas); 
  }
}
</script>

<style>
  *{margin: 0;padding: 0;}
  .el-aside{
    background: #ffffff;
    box-shadow:1px 0px 10px rgba(98,108,127,0.3);
  }
  .el-container{
    background: rgba(240,243,247,1);
  }
  .ElHeader1{
    background: #4D6593;
    width: 100%;
    height: 64px;
    box-shadow:2px 0px 6px rgba(0,21,41,0.35);
    
  }
  .ElHeader2{
    background: #4D6593;
    width: 100%;
    height: 64px;
  }
  #leftAside > .el-main{
    overflow: hidden;
    padding: 10px 0px 10px 0px;
  }
</style>
