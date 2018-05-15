<template>
  <div class="index">
    <header class="header">
      <img src="../assets/leftMenu.svg" alt="" class="leftMenuImg" @click="isLeftMenuShow=true">
      <router-link :to="{name:'home'}" tag="span" active-class="top-link-active">推荐</router-link>
      <router-link :to="{name:'rank'}" tag="span" active-class="top-link-active">排行榜</router-link>
      <span>我的</span>
      <img src="../assets/search.svg" alt="" class="search" @click="$router.push({name:'search'})">
    </header>
    <!-- 嵌套路由 -->
    <div class="contet-router-view" @click="isLeftMenuShow=false">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <transition enter-active-class=" animated bounceInLeft" leave-active-class="animated bounceOutLeft">
      <left-menu v-if="isLeftMenuShow"></left-menu>
    </transition>
    
  </div>
</template>

<script>
import leftMenu from "../components/leftMenu.vue";
export default {
  name:"index",
  data(){
    return {
      isLeftMenuShow:false
    }
  },
  components:{
    leftMenu
  },
  //生命周期keep-alive被激活的时候
  activated(){
    console.log("activated");    
  },
  //生命周期keep-alive被隐藏的时候
  deactivated(){
    this.isLeftMenuShow=false;
  }
}
</script>

<style scoped lang="scss">

/*这里的scoped代表是闭合
  你在这个style标签里面写的样式，不会影响另一个标签里面的样式
  因为webpack最终会把所有的样式都打包成一个css文件，如果你的class名称相同，这时候，就会有冲突
*/
@import "../scss/common.scss";
.index{
  @include pageAbs();
  background-color: #1C1642;
  >.header{
    position: relative;
    z-index: 10;
    @include flexbox(){
      align-items: center;
    };
    font-size: 14px;
    height:$headerHeight;
    background-color: $headerColor;
    color:$fontColor;
    >span{
      margin:0 10px;
    }
    >.leftMenuImg
    {
      position: absolute;
      left:10px;
      width:32px;
      height:32px;
      cursor: pointer;
    }
    >.search
    {
      position: absolute;
      right:10px;
      width:32px;
      height:32px;
      cursor: pointer;
    }
  }
  .contet-router-view
  {
    position: absolute;
    top:$headerHeight;
    bottom:60px;
    width: 100%;
  }
}
.top-link-active
{
  color: $activeColor;
}
</style>



