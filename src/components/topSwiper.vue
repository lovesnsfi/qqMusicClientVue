<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <!--如果放图片，必须宽度100%,高度自适应 -->
            <img src="../assets/item1.jpg" alt="" style="width:100%;height:auto;display:block">
          </div>
          <div class="swiper-slide">
            <img src="../assets/item2.jpg" alt="" style="width:100%;height:auto;display:block">
          </div>
          <div class="swiper-slide">
            <img src="../assets/item3.jpg" alt="" style="width:100%;height:auto;display:block">
          </div>
          <div class="swiper-slide">
            <img src="../assets/item4.jpg" alt="" style="width:100%;height:auto;display:block" >
          </div>
          <div class="swiper-slide">
            <img src="../assets/item5.jpg" alt="" style="width:100%;height:auto;display:block" >
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
  
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name:"topSwiper",
  data(){
    return {

    }
  },
  mounted(){
    var certifySwiper = new Swiper('.swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      }
      

    })        
  }
}
</script>

<style>
.swiper-pagination-bullet
{
  width: 18px !important;
  height:5px !important;
  border-radius: 5px !important;
  background-color: white ;
  opacity: 1 !important;
}
.swiper-pagination-bullet-active
{
  background-color: tomato;
}

</style>
