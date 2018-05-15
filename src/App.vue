<template>
  <div id="app">
    <transition enter-active-class=" animated bounceInLeft" leave-active-class=" animated bounceOutLeft" mode="in-out">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <music-controller></music-controller>
  </div>
</template>

<script>
import musicController from "./components/musicController";
export default {
  name: 'App',
  components:{
    musicController
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style-type: none;
  font-family: "microsoft yahei";
  -webkit-tap-highlight-color: transparent;  /*用于处理webApp在点击的时候，出现的背景色*/
}
</style>
<style lang="scss" scoped>
#app{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

