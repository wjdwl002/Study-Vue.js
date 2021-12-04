import Vue from 'vue'
import VueRouter from 'vue-router'
import main_page from '@/components/main_page'
import sub_page from '@/components/sub_page'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    {
      path:'/', name :'home', component:main_page
    },
    {
      path: '/main', name: 'main_page', component: main_page
    },
    {
      path: '/sub', name: 'sub_page', component: sub_page
    }
  ]
})

export default router
