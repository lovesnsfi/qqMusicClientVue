<template>
  <div class="song_item" @click="selectMusic()">
    <div class="left">
      <!--配置图片的延迟加载 -->
      <img v-lazy="sItem.al.picUrl" alt="">
    </div>
    <ul class="center">
      <li>{{sItem.name}}</li>
      <li>{{sItem.ar[0].name}}</li>
    </ul>
    <div class="right">
      <img src="../assets/more.svg" alt="">
    </div>
  </div> 
</template>

<script>
export default {
  name:"songItem",
  props:["sItem"],
  methods:{
    selectMusic(){
      this.$store.dispatch("changeCurrentMusic",this.sItem);   //告诉vuex我要调一个任务给你（actions下面的方法）
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.song_item{
  @include flexbox(){
    align-items: center;
  };
  height: 70px;
  background-color:#28224E;
  border-bottom: 1px solid rebeccapurple;
  >.left{
    width:60px;
    height:60px;
    border-radius: 40px;
    overflow: hidden;
    margin:0px 10px;
    >img{
      @include imgResp();
    }
  }
  >.center{
    flex:1;
    height: 100%;
    @include flexbox(column){
      justify-content: space-around;
    };
    margin-left:10px;
    >li{
      color: white;
    }
    >li:first-child{
      font-size: 18px;
      font-weight: bold;
    }
  }
  >.right{
    @include flexbox(){
      width:60px;
      align-items: center;
    };
  }
}
</style>
