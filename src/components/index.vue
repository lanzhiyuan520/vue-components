<template>
  <div class="index" >
    <lan-button type="primary" @click="goButton('/lan-button')">按钮</lan-button>
    <lan-button type="primary" @click="goButton('/lan-loading')">loading</lan-button>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {

    }
  },
  components : {

  },
  methods : {
    goButton (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.model-wrap{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  height: 400px;
  background-color: #ccc;
}
.model-enter,.model-leave-to{
  width: 0;
  height: 0;
}
.model-enter-active,.model-leave-active {
  transition: all 1s linear;
}
.model-enter-to,.model-leave {
  width: 400px;
  height: 400px;
}
.index {
  margin: 10px;
}
</style>
