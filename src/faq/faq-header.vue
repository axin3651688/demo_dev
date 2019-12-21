<template>
  <div class="head--center">
    <img src="http://www.cnbisoft.com/images/index/logo.png" alt="图片加载中" title="安徽经邦" class="logo" />
    <div class="head__list pc">
      <span>
        <router-link to="/">首页</router-link>
      </span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link">
            产品列表
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item of datas"
              :key="item.id"
              v-html="item.innerHtml"
              :class="item.selfClass"
              item.attribute
              :disabled="getDisabled(item.id)"
            ></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span>
        <router-link to="/faq">帮助中心</router-link>
      </span>
      <span>
        <el-button type="primary">登录</el-button>
      </span>
      <span>
        <el-button type="primary">注册</el-button>
      </span>
    </div>
    <el-menu mode="horizontal" id="list" class="mobile">
      <el-submenu>
        <el-menu-item>
          <a href="http://www.cnbisoft.com/index_2.html">首页</a>
        </el-menu-item>
        <span slot="title">
          <i class="el-icon-more"></i>
        </span>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu>
            <template slot="title">
              <span>产品列表</span>
            </template>
            <el-menu-item>
              <a href="./design/login">设计器</a>
            </el-menu-item>
            <el-menu-item>
              <a href="./portal/login-portal">租户门户</a>
            </el-menu-item>
            <el-menu-item>
              <a href="./single-console">租户门户后台管理</a>
            </el-menu-item>
            <el-menu-item>
              <a href="./platform-console">产品后台管理</a>
            </el-menu-item>
            <el-menu-item>
              <a href="./attendance">考勤</a>
            </el-menu-item>
            <el-menu-item>
              <a href="#">云智囊Web版</a>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <el-menu-item>
          <a href="#">帮助中心</a>
        </el-menu-item>
        <el-menu-item style="padding: 0 20px;height:3em;">
          <el-button size="small">登录</el-button>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          id: 1,
          innerHtml: "<h2>产品列表</h2>"
        },
        {
          id: 2,
          innerHtml: "<a href='./design/login'>设计器</a>",
          selfClass: "item-a"
        },
        {
          id: 3,
          innerHtml: "<a href='./design/login-portal'>租户门户</a>",
          selfClass: "item-a"
        },
        {
          id: 4,
          innerHtml: "<a href='./single-console'>租户门户后台管理</a>",
          selfClass: "item-a"
        },
        {
          id: 5,
          innerHtml: "<a href='./platform-console'>产品后台管理</a>",
          selfClass: "item-a"
        },
        {
          id: 6,
          innerHtml: "<h2>轻应用列表</h2>"
        },
        {
          id: 7,
          innerHtml: "<a href='./attendance'>考勤</a>",
          selfClass: "item-a"
        },
        {
          id: 8,
          innerHtml: "<a href='#'>云智囊Web版</a>",
          selfClass: "item-a"
        }
      ]
    };
  },
  methods: {
    getDisabled(id) {
      if (id == 1 || id == 6) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.head--center {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head__list > span {
  margin-left: 24px;
}
.head__list a {
  font-size: 16px;
  text-decoration: none;
  color: #666;
}
.el-dropdown {
  color: #666;
  font-size: 16px;
}

.item-a >>> a {
  font-size: 14px;
  text-decoration: none;
  color: #666;
}
.el-menu-item >>> a {
  text-decoration: none;
  color: #777;
  margin-left: 10px;
  font-size: 16px;
}
.head--center >>> .el-menu--horizontal {
  border: 0px;
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none;
}
@media (max-width: 1080px) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .logo {
    width: 50%;
  }
}
@media (min-width: 1081px) {
  .pc {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
  .logo {
    width: 200px;
  }
  .head--center{
    height: 60px;
  }
}
</style>