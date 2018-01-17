<template>
  <div class="vHead">
    <img class="banner" src="../../static/imgs/bannner.jpg">
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

    <nav id="nav">
      <ul>
        <li ><router-link to="/">网站首页</router-link></li>
        <li><router-link to="/techBlog">博客</router-link></li>
        <li><router-link to="/techBlog">技术博客</router-link></li>
        <li><router-link to="/essay">随笔</router-link ></li>
        <li><router-link to="/gab">瞎扯</router-link></li>
        <li><router-link to="/profile">profile</router-link></li>
        <li><router-link to="/comment">留言</router-link></li>
      </ul>
    </nav>
  <div class="sidebar">
  <!--  <el-menu
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


    </el-menu>-->

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
        this.$router.push({
          path:'/techBlog',
          name:'',
          params:{
            id:123
          }
        })
       // return this.$route.path.replace('/','');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  #nav{
    width: 100%;
    line-height:40px;
    height:40px;
    margin:0 auto;
    background:rgba(245,245,245,0.2);
    position: relative;
  }

  #nav ul{
    list-style: none;
    margin: auto;
    width: 1030px;
  }

  #nav ul li {
    float: left;
    width: 100px;
    text-align: center;
    text-shadow: #333 1px 1px 1px;
    display: inline-block;
  }
  #nav ul li a{
    color: #000;
    cursor: pointer;
    display: block;
    text-decoration: none;

  }
  #nav ul li a:hover{
    transition: all 0.5s;
    background-color: #aaa;
    border-radius:50px 0;
    font-weight:bold;
    font-style: italic;
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
