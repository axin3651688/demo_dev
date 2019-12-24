<template>
  <div>
    <faq-header />
    <div class="main-box">
      <el-row :gutter="30" class="pc">
        <el-col :span="16">
          <div>
            <div class="content--box">
              <h2 v-html="title"></h2>
              <div class="updata--box">
                <span v-html="updateUserName" class="username--box"></span>
                <span v-html="updateTime"></span>
              </div>
              <el-divider></el-divider>
              <p v-html="content"></p>
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
          <h2 v-html="title"></h2>
          <div class="updata--box">
            <span v-html="updateUserName" class="username--box"></span>
            <span v-html="updateTime"></span>
          </div>
          <el-divider></el-divider>
          <p v-html="content"></p>
        </div>
      </div>
      <div v-for="item of question" :key="item.id" class="question--box">
        <h2>问题：</h2>
        <div v-html="item.content"></div>
        <h2>回复：</h2>
        <div v-html="item.reply"></div>
      </div>
      <el-form>
        <el-form-item>
          <el-input
            type="textarea"
            placeholder="请输入您的问题"
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
    </div>
    <Footer />
  </div>
</template>

<script>
import FaqHeader from "./faq-header";
import CategoryCard from "./category-card";
import Footer from "@/main/components/foot";
import { SendQuestion} from "../api/get-datas";//, GetAllQuestion, GetAllReply 
import { Message } from "element-ui";
export default {
  components: {
    FaqHeader: FaqHeader,
    CategoryCard: CategoryCard,
    Footer: Footer
  },
  data() {
    return {
      content: "",
      title: "",
      updateUserName: "",
      updateTime: "",
      id: "",
      questionContent: "",
      question: [],
    };
  },
  mounted: function() {
    let substance = this.$router.history.current.query;
    this.content = substance.content;
    this.title = substance.title;
    this.updateUserName = substance.username;
    this.updateTime = substance.time;
    this.id = substance.id;
    // GetAllQuestion().then(res => {
    //   let dataList = res.data.data;
    //   for (let i in dataList) {
    //     if (dataList[i].faqId == this.id && dataList[i].status == 2) {
    //       this.question.push(dataList[i]);
    //     }
    //   }
    // });
    // GetAllReply().then(res => {
    //   let dataList = res.data.data;
    //   for (let i in dataList) {
    //     for (let j in this.question) {
    //       if (dataList[i].questionId == this.question[j].id) {
    //         window.console.log(dataList[i].content);
    //         this.question[j].reply = dataList[i].content;
    //       }
    //     }
    //   }
    // });
  },
  methods: {
    //提交问题
    doSubmit() {
      if (this.questionContent == "") {
        Message.error("请输入问题，再提交");
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
    cleanArea() {
      this.questionContent = "";
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
.main-box {
  width: 90%;
  margin: 20px auto;
}
h1 {
  font-size: 24px;
}
.question--box{
  background: #e5e5e5;
  margin: 10px 0;
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