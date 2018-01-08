<template>
  <div class="vHead">
    <img class="banner" src="../../static/imgs/banner1.png">
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div class="line"></div>-->
    <!--<el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">博客</template>
        <el-menu-item index="2-1">技术博客</el-menu-item>
        <el-menu-item index="2-2">随笔</el-menu-item>
        <el-menu-item index="2-3">瞎扯</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Profile</a></el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">留言</a></el-menu-item>
    </el-menu>-->


  <div class="sidebar">
    <el-menu
      :default-active="onRouters"
      mode="horizontal"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title">{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>

        </template>
        <template v-else>
          <el-menu-item :index="item.index">
           {{ item.title }}
          </el-menu-item>
        </template>
      </template>


    </el-menu>

  </div>

  </div>

</template>

<script>
  import ElMenu from "../../node_modules/element-ui/packages/menu/src/menu.vue";

  export default {
    components: {ElMenu},
    name: 'vHead',
    data() {
      return {
        items: [
          {
            icon: 'el-icon-setting',
            index: '/',
            title: '首页'
          },
          {
            icon: 'el-icon-menu',
            index: '2',
            title: '博客',
            subs: [
              {
                index: 'techBlog',
                title: '技术博客'
              },
              {
                index: 'essay',
                title: '随笔'
              },
              {
                index:'gab',
                title:'瞎扯'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: 'profile',
            title: 'profile',

          },
          {
            icon: 'el-icon-star-on',
            index: 'comment',
            title: '留言'
          }
        ]
    }
    },
    computed:{
      onRouters(){
        console.log('onrouters');
        return this.$route.path.replace('/','');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  img {
    width: 100%;
  }

  .hello {
    /*background-image: url("../../static/imgs/back2.jpg");*/
    width: 100%;
    height: 100%;
  }

  .banner {
    display: block;
    height: 250px;
    width: 1000px;
    margin: 0 auto;
  }
  .sidebar{
    width: 1000px;
    margin: 0 auto;
  }
</style>
