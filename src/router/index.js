import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      name : 'main',
      meta: {
        title: '首页'
      },
      component : () => import("../main/main")
    },
    {
      path : '/faq',
      name : 'faq-homepage',
      meta: {
        title: '帮助中心',
      },
      component :  () => import("../faq/faq-homepage"),
    },
    {
      path : '/faq/category',
      name : 'faq-category',
      meta: {
        title: '分类'
      },
      component :  () => import("../faq/faq-category")
    },
    {
      path: '/faq/content',
      name: 'faq-context',
      meta: {
        title: '正文'
      },
      component: () => import("../faq/faq-context")
    }
],
    mode: "history"
})
