<template>
    <div>
        <el-container>
            <el-header>
                <img src="http://www.cnbisoft.com/images/index/logo.png" alt="图片加载中" title="安徽经邦" class="logo" >
                <el-menu mode="horizontal" id="list">
                <el-submenu >
                    <el-menu-item><a href="http://www.cnbisoft.com/index_2.html">首页</a></el-menu-item>
                    <span slot="title"><i class="el-icon-more"></i></span>
                    <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu >
                        <template slot="title">
                        <span>产品列表</span>
                        </template>
                        <el-menu-item ><a href="./design/login">设计器</a></el-menu-item>
                        <el-menu-item ><a href="./portal/login-portal">租户门户</a></el-menu-item>
                        <el-menu-item ><a href="./single-console">租户门户后台管理</a></el-menu-item>
                        <el-menu-item ><a href="./platform-console">产品后台管理</a></el-menu-item>
                        <el-menu-item ><a href="./attendance">考勤</a></el-menu-item>                       
                        <el-menu-item ><a href="#">云智囊Web版</a></el-menu-item>
                    </el-submenu>
                    </el-menu>
                    <el-menu-item><a href="#">帮助中心</a></el-menu-item>
                    <el-menu-item style="padding: 0 20px;height:3em;"><el-button size="small">登录</el-button></el-menu-item>
                </el-submenu>                
                </el-menu>
            </el-header>
            <el-main class="main__box">
                <div class="main--top__box">
                    <h2 class="main--top__title">公司简介</h2>
                    <p>安徽经邦软件有限公司是智能决策支持系统（IDSS）的倡导和领导者，长期致力于新一代基于人工智能技术的企业大数据分析（企业智能经营决策支持系统）技术软件的研究、应用与开发。</p>
                    <el-form >
                        <el-form-item>
                            <el-input placeholder="请输入手机号码" prefix-icon="el-icon-edit" v-model="inputText" maxlength="11" show-word-limit></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit" class="button--top">免费注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="main--bottom__box">
                    <img src="https://cdn.worktile.com/assets/images/next/home/home-banner.svg?v=8.0.1+2019112701" alt="图片加载中" class="main--bottom__image">
                </div>
            </el-main>
            <div class="footer">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="产品" name="1">
                        <div v-for="item of ulArray1" :key="item.index" v-html="item.name" class="list"></div>
                    </el-collapse-item><el-collapse-item title="轻应用" name="2">
                        <div v-for="item of ulArray2" :key="item.index" v-html="item.name" class="list"></div>
                    </el-collapse-item><el-collapse-item title="公司" name="3">
                        <div v-for="item of ulArray3" :key="item.index" v-html="item.name" class="list"></div>
                    </el-collapse-item><el-collapse-item title="联系我们" name="4">
                        <div><p>+86 0551-xxxxxxx</p></div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
        inputText: '',
        ulArray1:[
            {
                name: "<a href='./design/login'>设计器</a>"
            },{
                name: "<a href='./portal/login-portal'>租户门户</a>"
            },{
                name: "<a href='./single-console'>租户门户后台管理</a>"
            },{
                name: "<a href='./platform-console'>产品后台管理</a>"
            }
        ],
        ulArray2:[
            {
                name: "<a href='./attendance'>考勤</a>"
            },{
                name: "<a href='#'>云智囊Web版</a>"
            }
        ],
        ulArray3:[
            {
                name: "<a href='#'>关于我们</a>"
            },{
                name: "<a href='#'>媒体报道</a>"
            },{
                name: "<a href='#'>联系我们</a>"
            },{
                name: "<a href='#'>隐私声明</a>"
            },{
                name: "<a href='#'>服务条款</a>"
            },{
                name: "<a href='#'>加入我们</a>"
            }
        ],
    }
  }
}
</script>

<style scoped>
    .el-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        width: 30%;
    }
    .el-submenu__title{
        font-size: 1em;
    }
    .el-header >>> .el-menu--horizontal{
        border: 0px;
    }
    .el-menu-item >>> a{
        text-decoration: none;
        color: #777;
        margin-left: 10px;
        font-size: 1em;
    }
    .main__box{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .main--top__box{
        width: 80%
    }
    h2{
        font-size: 1.5em;
    }
    p{
        font-size: 0.8em;
        color: #777;
    }
    .main--bottom__box{
        width: 80%;
        margin: 3em 0;
    }
    .main--bottom__image{
        width: 100%
    }
    .footer{
        width: 95%;
        margin: 0 auto;
    }
    .list >>> a{
        color: #999;
        line-height: 2em;
        text-decoration: none;
    }
    .list p{
        color: #999;
    }
</style>