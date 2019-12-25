<template>
  <div>
    <faq-header />
    <div class="main-box">
      <el-row :gutter="30" class="pc">
        <el-col :span="16">
          <div>
            <div class="content--box">
              <h2 v-html="dataList.title"></h2>
              <div class="updata--box">
                <span v-html="dataList.updateUserName" class="username--box"></span>
                <span v-html="dataList.updateTime"></span>
              </div>
              <el-divider></el-divider>
              <p v-html="dataList.content"></p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <CategoryCard />
        </el-col>
      </el-row>
      <div class="mobile mobile--content">
        <CategoryCard />
        <div class="content--box">
          <h2 v-html="dataList.title"></h2>
          <div class="updata--box">
            <span v-html="dataList.updateUserName" class="username--box"></span>
            <span v-html="dataList.updateTime"></span>
          </div>
          <el-divider></el-divider>
          <p v-html="dataList.content"></p>
        </div>
      </div>
      <el-form
        :disabled="comment">
        <el-form-item>
          <el-input
            type="textarea"
            :placeholder="placeholder"
            v-model="questionContent"
            maxlength="500"
            show-word-limit
            clearable="true"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSubmit">提交</el-button>
          <el-button @click="cleanArea()">重置</el-button>
        </el-form-item>
      </el-form>
      <FaqQuestion />
    </div>
    <Footer />
  </div>
</template>

<script>
import FaqHeader from "./faq-header"
import CategoryCard from "./category-card"
import Footer from "@/main/components/foot"
import { SendQuestion,FindOne,AddReadCount} from "../api/get-datas"
import { Message } from "element-ui"
import bus from '../api/bus'
import FaqQuestion from './faq-question'
export default {
  components: {
    FaqHeader: FaqHeader,
    CategoryCard: CategoryCard,
    Footer: Footer,
    FaqQuestion: FaqQuestion
  },
  data() {
    return {
      dataList: {},
      questionContent: "",
      question: [],
      comment: false,
      placeholder: '',
      id: 0,
      title: ''
    };
  },
  created(){
    this.id = this.$router.history.current.query.id;
  },
  mounted() {
    this.getData(this.id);
    bus.$emit("faqId",this.id);
    AddReadCount(this.id);
  },
  methods: {
    //提交问题
    doSubmit() {
      let str = this.questionContent.trim();
      if (str.length == 0) {
        Message.error("请勿提交空问题");
        this.cleanArea();
        return;
      }
      SendQuestion(this.questionContent, this.id, this.title).then(res => {
        if (res.data.code) {
          Message.success("问题已成功提交，请耐心等待我们的回复哟");
        } else {
          Message.error(res.data.msg);
        }
        this.cleanArea();
      });
    },
    //清空输入框
    cleanArea() {
      this.questionContent = "";
    },
    //取得当前页的信息
    getData(id){
      FindOne(id).then(res => {
        this.dataList = res.data.data;
        this.title = this.dataList.title;
        if(this.dataList.isComment == 1){
          this.comment = false;
          this.placeholder = "请输入您的问题";
        }else{
          this.comment = true;
          this.placeholder = "当前评论已关闭";
        } 
        return this.comment;
      })
    }
  }
};
</script>

<style scoped>
.updata--box {
  color: #909399;
}
.el-textarea >>> .el-input__count {
  color: #909399;
  background: rgb(255, 255, 255, 0);
  position: absolute;
  font-size: 12px;
  bottom: -10px;
  height: 20px;
  right: 6px;
}
.content--box {
  border: #eeeeee 2px solid;
  padding: 10px;
}
h1 {
  font-size: 24px;
}
@media (max-width: 1080px) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
    font-size: 14px;
  }
  .username--box {
    margin-right: 10px;
  }
  .content--box {
    margin: 10px 0;
  }
  .el-form-item >>> .el-textarea {
    min-width: 300px;
  }
  .main-box {
    width: 90%;
    margin: 20px auto;
  }
}
@media (min-width: 1081px) {
  .pc {
    display: block !important;
    font-size: 14px;
  }
  .mobile {
    display: none !important;
  }
  .main-box {
    max-width: 960px;
    margin: 20px auto;
  }
  .username--box {
    margin-right: 20px;
  }
  .el-row {
    margin: 20px 0;
  }
  .el-form-item >>> .el-textarea {
    width: 630px;
  }
  .question--box{
    width: 570px;
    padding: 20px 30px;
    border-radius: 5px;
  }
}
</style>