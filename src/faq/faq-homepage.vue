<template>
    <div class="faq-homepage">
        <el-container>
            <el-header>
                <faq-header />
            </el-header>
            <el-main>
                <div class="main--box">
                    <div class="main--top">
                        <el-row :gutter="30" class="pc">
                            <el-col :span="16"><BigCard /></el-col>
                            <el-col :span="8"><CategoryCard /></el-col>
                        </el-row>
                        <BigCard class="mobile"/>
                        <CategoryCard class="mobile"/>
                    </div>
                    <div>
                        <CenterContent />
                    </div>
                </div>           
            </el-main>
        </el-container>        
    </div>
</template>

<script>
import FaqHeader from "./faq-header"
import BigCard from "./big-card"
import CategoryCard from "./category-card"
import CenterContent from "./center-content"
export default {
    components: {
        "FaqHeader": FaqHeader,
        "BigCard": BigCard,
        "CategoryCard": CategoryCard,
        "CenterContent": CenterContent
    }
}
</script>

<style scoped>
    .el-main{
        background: #F9F9F9;
    }
    @media (max-width: 1080px) {
        .pc{display: none !important;}
        .mobile{display: block !important;}
        .main--box{
            width: 98%;
            margin: 15px auto 0;
        }
    }
    @media (min-width: 1081px) {
        .pc{display: block !important;}
        .mobile{display: none !important;}  
        .main--box{
            max-width: 960px;
            margin: 30px auto;
        }
        .main--top{
            margin-bottom: 30px;
        }
    }
</style>