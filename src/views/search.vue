<template>
  <div class="search">
    <header class="header">
      <img src="../assets/back.svg" class="back" alt="" @click="$router.back()">
      <input type="text" class="txt" placeholder="搜索音乐、歌手">
      <img src="../assets/search.svg" class="searchImg" alt="">
    </header>
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  name:"search",
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.search{
  @include pageAbs();
  .header{
    height:$headerHeight;
    background-color: $headerColor;
    border-bottom: 1px solid #667575;
    @include flexbox(){
      align-items: center;
    }
    box-sizing: border-box;
    padding: 0px 10px;
    >.back{
      width:28px;
      height:28px;
    }
    >.txt{
      height:35px;
      flex: 1;
      margin: 0px 15px;
      border-radius: 35px;
      border: none;
      background-color: #18142F;
      outline: none;
      box-sizing: border-box;
      padding: 5px;
      color: #667575;
      font-size: 14px;
    }
    >.searchImg{
      width:32px;
      height:32px;
    }
  }
  >.content
  {
    position: absolute;
    top:$headerHeight;
    bottom:60px;
    width:100%;
    overflow: scroll;
    background-color: #28224E;
  }
}
</style>

