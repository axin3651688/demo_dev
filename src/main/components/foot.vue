<template>
    <div>
        <div class="center pc" >
            <ul>
                <li><h2>产品</h2></li>
                <li v-for="item of ulArray1" :key="item.index" v-html="item.name" class="pc--list"></li>
            </ul>
            <ul>
                <li><h2>轻应用</h2></li>
                <li v-for="item of ulArray2" :key="item.index" v-html="item.name" class="pc--list"></li>
            </ul>
            <ul>
                <li><h2>公司</h2></li>
                <li v-for="item of ulArray3" :key="item.index" v-html="item.name" class="pc--list"></li>
            </ul>
            <ul>
                <li><h2>联系方式</h2></li>
                <li><p><i class="el-icon-phone"></i> &nbsp;+86 0551-xxxxxxx</p></li>
                <li><img src="@/assets/QQ.svg" alt=""><img src="@/assets/weixin.svg" alt=""></li>
            </ul>
        </div>
        <div class="footer mobile">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="产品" name="1">
                    <div v-for="item of ulArray1" :key="item.index" v-html="item.name" class="mobile--list"></div>
                </el-collapse-item><el-collapse-item title="轻应用" name="2">
                    <div v-for="item of ulArray2" :key="item.index" v-html="item.name" class="mobile--list"></div>
                </el-collapse-item><el-collapse-item title="公司" name="3">
                    <div v-for="item of ulArray3" :key="item.index" v-html="item.name" class="mobile--list"></div>
                </el-collapse-item><el-collapse-item title="联系我们" name="4">
                    <div class="mobile--list"><p>+86 0551-xxxxxxx</p></div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ulArray1:[
                {name: "<a href='./design/login'>设计器</a>"},
                {name: "<a href='./portal/login-portal'>租户门户</a>"},
                {name: "<a href='./single-console'>租户门户后台管理</a>"},
                {name: "<a href='./platform-console'>产品后台管理</a>"}
            ],
            ulArray2:[
                {name: "<a href='./attendance'>考勤</a>"},
                {name: "<a href='#'>云智囊Web版</a>"}
            ],
            ulArray3:[
                {name: "<a href='#'>关于我们</a>"},
                {name: "<a href='#'>媒体报道</a>"},
                {name: "<a href='#'>联系我们</a>"},
                {name: "<a href='#'>隐私声明</a>"},
                {name: "<a href='#'>服务条款</a>"},
                {name: "<a href='#'>加入我们</a>"}
            ],
        }
    }
}
</script>

<style scoped>
    .center{
        width: 60%;
        margin: 0 auto;
        display:flex;
        justify-content: space-between;
    }
    ul{
        padding: 0 20px;
    }
    li{
        list-style: none;
    }
    h2{
        color: #555;
        font-size: 20px;
    }
    p{
        color: #999;
        font-size: 12px;
    }
    img{
        margin: 0 5px;
    }
    .pc--list >>> a{
        color: #999;
        line-height: 30px;
        text-decoration: none;
        font-size: 12px;
    }
    .footer{
        width: 95%;
        margin: 0 auto;
    }
    .mobile--list{
        padding: 0 25px;
        color: #999;
    }
    .mobile--list >>> a{
        color: #999;
        line-height: 20px;
        text-decoration: none;
    }
    @media (max-width: 1080px) {
        .pc{display: none !important;}
        .mobile{display: block !important;}
        
    }
    @media (min-width: 1081px) {
        .pc{display: flex !important;}
        .mobile{display: none !important;}  
    }
</style>