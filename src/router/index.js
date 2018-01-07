import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/shouye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      children:[
        {
          path:'/techBlog',
          component:resolve => require(['../components/contents/techBlog.vue'],resolve)

        },
        {
          path:'/detail',
          name:'detail',
          params:{
            id:'id'
          },
          component:resolve => require(['../components/contents/detail.vue'],resolve)
        }/*,
        {
          path:'/techBlog',
          component:resolve => require(['../components/contents/techBlog.vue'],resolve)
        }*/
      ]
    }

  ]
})
