<template>
  <div id="app">
  <!--  <div class="out_circle">
      <div class="slide"></div>
      <div class="nav_circle r1">
        <div class="img_top img">
          <img src="../static/imgs/back2.jpg">
          <a href="#">产品中心</a>
        </div>
        <div class="img_bottom img" >
          <img src="../static/imgs/banner.jpg">
          <a href="#">官方网站</a>
        </div>
      </div>
      <div class="nav_circle r2">
        <div class="img_top img">
          <img src="../static/imgs/banner1.png">
          <a href="#">代理查询</a>
        </div>
        <div class="img_bottom img" >
          <img src="../static/imgs/banner.jpg">
          <a href="#">后台登录</a>
        </div>
      </div>
      <div class="nav_circle r3">
        <div class="img_top img">
          <img src="../static/imgs/banner.jpg">
          <a href="#">公司资质</a>
        </div>
        <div class="img_bottom img" >
          <img src="../static/imgs/banner.jpg">
          <a href="#">质检报告</a>
        </div>
      </div>
      <div class="nav_circle r4">
        <div class="img_top img">
          <img src="../static/imgs/banner.jpg">
          <a href="#">代理登录</a>
        </div>
        <div class="img_bottom img" >
          <img src="../static/imgs/banner.jpg">
          <a href="#">代理授权</a>
        </div>
      </div>
    </div>-->



    <router-view/>


  </div>


</template>

<script>
export default {
  name: 'app'
}
</script>
<!--<script src="../static/js/canvas-nest.js">

</script>-->
<style>
 .app{
   background-image: url("../static/imgs/back2.jpg");
 }
 body{

   background-color: #fffbf0;

   font-size: 18px;
   color: #2c353d;


 }
 .circle{

 }



 img{
   width:100px;
   height: 100px;
 }
 .circle div{


   width: 30px;
   height:30px;
   border-radius: 50%;
   margin: 100px auto;
   background-color: black;
   transform:rotate(0deg) skew(0deg) scale(1);
   -ms-transform:rotate(0deg) skew(0deg) scale(1);     /* IE 9 */
   -moz-transform:rotate(0deg) skew(0deg) scale(1);     /* Firefox */
   -webkit-transform:rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
   -o-transform:rotate(0deg) skew(0deg) scale(1);
   animation: rotate 10s linear infinite;
   -webkit-animation:rotate 10s linear infinite;
   -moz-animation:rotate 10s linear infinite;
   -o-animation:rotate 10s linear infinite;
 }
 .r1{
   transform:rotate(0deg) skew(0deg) scale(1);
   -ms-transform:rotate(0deg) skew(0deg) scale(1);     /* IE 9 */
   -moz-transform:rotate(0deg) skew(0deg) scale(1);     /* Firefox */
   -webkit-transform:rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
   -o-transform:rotate(0deg) skew(0deg) scale(1);
   animation: rotate 10s linear infinite;
   -webkit-animation:rotate 10s linear infinite;
   -moz-animation:rotate 10s linear infinite;
   -o-animation:rotate 10s linear infinite;
 }

 .r2{
   transform:rotate(45deg) skew(0deg) scale(1);
   -ms-transform:rotate(45deg) skew(0deg) scale(1);     /* IE 9 */
   -moz-transform:rotate(45deg) skew(0deg) scale(1);     /* Firefox */
   -webkit-transform:rotate(45deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
   -o-transform:rotate(45deg) skew(0deg) scale(1);
   animation: rotatef 10s linear infinite;
   -webkit-animation:rotatef 10s linear infinite;
   -moz-animation:rotatef 10s linear infinite;
   -o-animation:rotatef 10s linear infinite;
 }

 .r3 {
   transform:rotate(90deg) skew(0deg) scale(1);
   -ms-transform:rotate(90deg) skew(0deg) scale(1);     /* IE 9 */
   -moz-transform:rotate(90deg) skew(0deg) scale(1);     /* Firefox */
   -webkit-transform:rotate(90deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
   -o-transform:rotate(90deg) skew(0deg) scale(1);
   animation: rotates 10s linear infinite;
   -webkit-animation:rotates 10s linear infinite;
   -moz-animation:rotates 10s linear infinite;
   -o-animation:rotates 10s linear infinite;
 }

 .r4{
   transform:rotate(135deg) skew(0deg) scale(1);
   -ms-transform:rotate(135deg) skew(0deg) scale(1);     /* IE 9 */
   -moz-transform:rotate(135deg) skew(0deg) scale(1);     /* Firefox */
   -webkit-transform:rotate(135deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
   -o-transform:rotate(135deg) skew(0deg) scale(1);
   animation: rotatet 20s linear infinite;
   -webkit-animation:rotatet 10s linear infinite;
   -moz-animation:rotatet 10s linear infinite;
   -o-animation:rotatet 10s linear infinite;
 }

 @keyframes rotate{
   0%{
     transform:rotate(0deg) skew(0deg) scale(1);
     -ms-transform:rotate(0deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(0deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(0deg) skew(0deg) scale(1);
   }
   100%{
     transform:rotate(360deg) skew(0deg) scale(1);
     -ms-transform:rotate(360deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(360deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(360deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(360deg) skew(0deg) scale(1);
   }
 }
 @keyframes rotatef{
   0%{
     transform:rotate(45deg) skew(0deg) scale(1);
     -ms-transform:rotate(45deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(45deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(45deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(45deg) skew(0deg) scale(1);
   }
   100%{
     transform:rotate(405deg) skew(0deg) scale(1);
     -ms-transform:rotate(405deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(405deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(405deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(405deg) skew(0deg) scale(1);
   }
 }
 @keyframes rotates{
   0%{
     transform:rotate(90deg) skew(0deg) scale(1);
     -ms-transform:rotate(90deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(90deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(90deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(90deg) skew(0deg) scale(1);
   }
   100%{
     transform:rotate(450deg) skew(0deg) scale(1);
     -ms-transform:rotate(450deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(450deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(450deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(450deg) skew(0deg) scale(1);
   }
 }
 @keyframes rotatet{
   0%{
     transform:rotate(135deg) skew(0deg) scale(1);
     -ms-transform:rotate(135deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(135deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(135deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(135deg) skew(0deg) scale(1);
   }
   100%{
     transform:rotate(495deg) skew(0deg) scale(1);
     -ms-transform:rotate(495deg) skew(0deg) scale(1);     /* IE 9 */
     -moz-transform:rotate(495deg) skew(0deg) scale(1);     /* Firefox */
     -webkit-transform:rotate(495deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
     -o-transform:rotate(495deg) skew(0deg) scale(1);
   }
 }
</style>
