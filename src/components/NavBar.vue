<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="s"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y], 
        speed: 500,
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
             },
        Scrollbar:{
          el:".swiper-scrollbar"
        },
        Pagination:".swiper-pagination"
      };
    },
  };
</script>
<style lang="scss" scoped>
.s{
  height: 80vh;
  width: 100%;
  background-color: red;
}
 
</style>
