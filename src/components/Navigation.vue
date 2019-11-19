<template>
    <el-menu id="bar-left" >
        <el-menu-item v-for="item of leftDatas.data" :key="item.code" >
            <i class="el-icon-s-order"></i>
            <span>{{item.text}}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    props:{leftDatas:Object},
    data:{
        url : [
            "&#xe65b;"
        ]
    },
    /** 
    * @desc    : 
    * @author  :  
    * @date  : 2019/11/18
    * @param   {} 
    * @return  {} 
    * @update   by   
    */
    comments:{
        click:function(){

        }
    }
}
</script>
<style scoped>
    #bar-left{
        width: 100%;
        border: none
    }
    .el-menu-item:focus{
        border-right: 2px solid blue;
    }
</style>