<template>
  <div class="home">
    <!-- 我需要做一个轮播图-->
    <top-swiper></top-swiper>
    <!--四个按钮，分别代表不同的类型的音乐 -->
    <ul class="musicType">
      <li @click="musicType='popularmusic'">
        <img src="../assets/icon1.svg" alt="">
        <span :class="{active:musicType=='popularmusic'}">流行</span> 
      </li>
      <li @click="musicType='classicalmusic'">
        <img src="../assets/icon2.svg" alt="">
        <span :class="{active:musicType=='classicalmusic'}">古典</span> 
      </li>
      <li @click="musicType='lightmusic'">
        <img src="../assets/icon3.svg" alt="">
        <span :class="{active:musicType=='lightmusic'}">纯音乐</span> 
      </li>
      <li @click="musicType='radiomusic'">
        <img src="../assets/icon4.svg" alt="">
        <span :class="{active:musicType=='radiomusic'}">电台</span> 
      </li>
    </ul>
    <!--音乐列表 -->
    <div class="songList" v-if="isDataReady==4" ref="songList">
      <div>
        <song-item v-for="(item,index) in songList.get(musicType)" :key="index" :s-item="item"></song-item>
      </div>
    </div>
     
  </div>
</template>

<script>
import topSwiper from "../components/topSwiper";
import songItem from "../components/songItem";
import {mapGetters,mapActions} from "vuex";
import globaData from "../utils/globaData";
import BScroll from 'better-scroll';
export default {
  name:"home",
  data(){
    return {
      musicType:"popularmusic",
      isDataReady:0
    }
  },
  created(){
    var id = setInterval(()=>{
      if(this.isDataReady>=4){
        clearInterval(id);
      }
      if (localStorage.getItem("lightmusic") != undefined &&
          localStorage.getItem("classicalmusic") != undefined &&
          localStorage.getItem("lightmusic") != undefined &&
          localStorage.getItem("radiomusic") != undefined) {
          globaData.isDataReady = 4;
      }
      this.isDataReady = globaData.isDataReady;
      if(this.isDataReady==4){
        this.$nextTick(()=>{
          if(!this.scroll){
            console.log("warpDom");
            console.log(this.$refs.songList);
            this.scroll=new BScroll(this.$refs.songList,{
              click:true,
              pullDownRefresh:{
                stop:0
              }
            });
            this.scroll.on("touchEnd",pos=>{
              if(pos.y>50){
                console.log("下拉刷新");
                //告诉系统，下拉刷新已完成
                this.scroll.finishPullDown();
              }
            })
          }
          else{
            this.scroll.refresh();
          }
        });
      }
    },5000);
    
    
  },
  computed:{
    ...mapGetters(["popularmusic","classicalmusic","lightmusic","radiomusic"]),
    songList(){
      var m=new Map();
      m.set("popularmusic",this.popularmusic);
      m.set("classicalmusic",this.classicalmusic);
      m.set("lightmusic",this.lightmusic);
      m.set("radiomusic",this.radiomusic);
      return m;
    }
    
  },
  components:{
    topSwiper,songItem
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.home{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  .musicType{
    padding: 4px 0px;
    background-color: #1C1642;
    position: relative;
    z-index: 10;
    
    @include flexbox(){
      align-items: center;
      justify-content: space-around;
    };
    >li
    {
      overflow: hidden;
      @include flexbox(column){
        width:50px;
        align-items: center;
      }
      >img{
        @include imgResp(){
          width:32px;
          height:32px;
        };
      }
      >span{
        color: white;
        font-size: 12px;
      }
      >span.active{
        color:yellow!important;
      }
    }
  }
  >.songList
  {
    top: 230px;
    bottom: 0px;
    width: 100%;
    position: absolute;
    overflow: hidden;
  }
}
</style>
