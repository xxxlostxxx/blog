<template>
  <div class="wrapper" >
    <v-head></v-head>
    <div class="content">
    <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>



  </div>
</template>

<script>

  import vHead from './header.vue';

export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    vHead
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
  img{
    width: 100%;
  }

  .hello{
    /*background-image: url("../../static/imgs/back2.jpg");*/
    width: 100%;
    height: 100%;
  }
  .banner{
    height: 250px;
  }
</style>
