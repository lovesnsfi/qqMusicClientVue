<template>
  <div class="rank">
    <!--排行榜 -->
    <div class="rank_item">
      <div class="left">
        <img src="../assets/01.jpg" alt="">
      </div>
      <ul class="right">
        <li>云音乐飙升榜</li>
        <li>每次天都更新</li>
      </ul>
    </div>
    <div class="rank_item" style="background:linear-gradient(-45deg,rgba(69,196,166,.5),#45c4a6)">
      <div class="left">
        <img src="../assets/02.jpg" alt="">
      </div>
      <ul class="right">
        <li>云音乐新歌榜</li>
        <li>每次天都更新</li>
      </ul>
    </div>
    <div class="rank_item" style="background:linear-gradient(-45deg,rgba(122,61,253,.5),#7a3dfd)">
      <div class="left">
        <img src="../assets/03.jpg" alt="">
      </div>
      <ul class="right">
        <li>QQ原创歌曲榜</li>
        <li>每次天都更新</li>
      </ul>
    </div>
    <div class="rank_item" style="background:linear-gradient(-45deg,rgba(19,122,253,.5),#137afd)">
      <div class="left">
        <img src="../assets/04.jpg" alt="">
      </div>
      <ul class="right">
        <li>云音乐热歌榜</li>
        <li>每次天都更新</li>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.rank{
  background-color:rgba(8,5,58,.9);
  color:white;
  height: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  overflow: hidden;
  >.rank_item
  {
    border-radius: 10px;
    background:linear-gradient(-45deg,rgba(237,46,97,.5),#ed2e61);
    margin:10px 0px;
    @include flexbox(){
      justify-content: flex-start;
    };
    >.left
    {
      width:100px;
      height:100px;
      box-sizing: border-box;
      padding:7px;
      >img{
        @include imgResp()
      }
    }
    >.right{
      flex:1;
      margin: 10px;
      @include flexbox(column){
        justify-content: space-around;
      }
      >li:first-child
      {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
