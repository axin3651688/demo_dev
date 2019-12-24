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
              <el-col :span="16">
                <BigCard />
              </el-col>
              <el-col :span="8">
                <CategoryCard />
              </el-col>
            </el-row>
            <BigCard class="mobile" />
            <CategoryCard class="mobile" />
          </div>
          <div>
            <CenterContent />
          </div>
        </div>
        <a href="#top" class="back--top">
          <i class="el-icon-caret-top i--color"></i>
        </a>
        <Footer />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FaqHeader from "./faq-header";
import BigCard from "./big-card";
import CategoryCard from "./category-card";
import CenterContent from "./center-content";
import Footer from "@/main/components/foot";
export default {
  components: {
    FaqHeader: FaqHeader,
    BigCard: BigCard,
    CategoryCard: CategoryCard,
    CenterContent: CenterContent,
    Footer: Footer
  }
};
</script>

<style scoped>
.el-main {
  background: #fff;
}
.back--top {
  position: fixed;
  top: 800px;
  right: 30px;
  font-size: 40px;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #409eff;
  line-height: 45px;
  background: #eee;
  box-shadow: 0 0 1px 1px #ccc;
}
@media (max-width: 1080px) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .main--box {
    width: 98%;
    margin: 15px auto 0;
  }
  .breadcrumb {
    width: 90%;
    margin: 0 auto;
  }
}
@media (min-width: 1081px) {
  .pc {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
  .main--box {
    max-width: 960px;
    margin: 30px auto;
  }
  .main--top {
    margin-bottom: 30px;
  }
  .breadcrumb {
    max-width: 1000px;
    margin: 0 auto;
  }
  .el-breadcrumb {
    font-size: 16px;
  }
}
</style>