<template>
  <div class="musicBox">
     <!--播放进度条 -->
      <div class="progress">
        <div class="offset" :style="{width:offsetWidth}"></div>
      </div> 
      <div class="muiscController">

          <div class="left">
            <div class="singer">
              <img :src="currentMusic.al.picUrl" alt="">
            </div>
            <ul>
              <!--歌曲名子 -->
              <li>{{currentMusic.name}}</li>
              <!--歌手名子 -->
              <li>{{currentMusic.ar[0].name}}</li>
            </ul>
          </div>
          <ul class="right">
            <li><img :src="isPlay?pauseImg:playingImg" alt="" @click="play_control()"></li>
            <li><img src="../assets/next.svg" alt=""></li>
            <li><img src="../assets/playList.svg" alt=""></li>
          </ul>
          <audio @timeupdate="timeupdate()" :src="muiscUrl" autoplay ref="audio"></audio>
        </div>
    </div>
</template>

<script>
import playingImg from "../assets/playing.svg";
import pauseImg from "../assets/pause.svg";
import {mapGetters} from "vuex";
export default {
  name:"musicController",
  data(){
    return {
      musicUrl:"",
      isPlay:true,
      playingImg:playingImg,
      pauseImg:pauseImg,
      offsetWidth:"0%"
    }
  },
  computed:{
    ...mapGetters(["currentMusic","muiscUrl"])
  },
  methods:{
    play_control(){
      this.isPlay=!this.isPlay;
    },
    timeupdate(){
      //console.log(this.$refs.audio.duration,this.$refs.audio.currentTime);
      var a=this.$refs.audio;  //当前的音乐标签
      var num = a.currentTime/a.duration
      this.offsetWidth=num*100+"%";
      console.log(num);
    }
  },
  watch:{
    isPlay(newValue){
      if(newValue){
        //播放音乐
        this.$refs.audio.play()
      }
      else{
        //暂停音乐
        this.$refs.audio.pause();
      }
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.musicBox{
    position: fixed;
    bottom:0px;
    left:0px;
    height:60px;
    background-color: #EA2448;
    z-index: 15;
    width:100%;
  >.progress{
    width:100%;
    height:3px;
    background-color: white;
    position: relative;
    >.offset
    {
      width:40%;
      position: absolute;
      left:0px;
      top:0px;
      height:3px;
      background-color: #0088ff;
    }
  }
  .muiscController
  {
    @include flexbox(){
      align-items: center;
      height:57px;
    }
    >.left{
      flex:1;
      @include flexbox(){
        justify-content: flex-start;
      };
      >.singer
      {
        margin:0px 10px;
        width:50px;
        border-radius: 50%;
        overflow: hidden;
        >img{
          width:100%;
          display: block;
          height: auto;
        }
      }
      >ul{
        >li{color:white;}
        >li:first-child{
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
    >.right{
      @include flexbox(){
        width:150px;
        justify-content: space-around;
      };
      >li{
        width:32px;
        height: 32px;
        cursor: pointer;
        >img{
          display: block;
          width:100%;
          height:auto;
        }
      }
    }
    >.progress
    {
      width:100%;
      height:3px;
      border-radius: 3px;
      background-color: white;
    }
  }
}
</style>
