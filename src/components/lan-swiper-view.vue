<template>
    <div class="swiper-doc">
      <swiperdoc></swiperdoc>
    </div>

</template>

<script>
    import swiperdoc from '../example/swiper.md'
    export default {
        name: "lan-swiper-view",
        components : { swiperdoc },
    }
</script>

<style scoped>
  .test {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
