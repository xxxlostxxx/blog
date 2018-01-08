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
          path:'/',
          component:resolve => require(['../components/contents/first.vue'],resolve)
        },
        {
          path:'/techBlog',
          component:resolve => require(['../components/contents/techBlog.vue'],resolve)

        },
        {
          path:'/essay',
          component:resolve => require(['../components/contents/essay.vue'],resolve)

        },
        {
          path:'/gab',
          component:resolve => require(['../components/contents/gab.vue'],resolve)

        },
        {
          path:'/profile',
          component:resolve => require(['../components/contents/profile.vue'],resolve)

        },
        {
          path:'/comment',
          component:resolve => require(['../components/contents/comment.vue'],resolve)

        },
        {
          path:'/detail',
          name:'detail',
          params:{
            id:'id'
          },
          component:resolve => require(['../components/contents/detail.vue'],resolve)
        }
      ]
    }

  ]
})
