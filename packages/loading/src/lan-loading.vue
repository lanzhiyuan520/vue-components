<template>
    <div
      class="lan-loading"
      v-if="visible"
      :class="[]"
      :style="{backgroundColor:background?background:'rgba(0,0,0,.5)'}"
    >
      <i class="iconfont icon-loading loading"></i>
      <span>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "lan-loading",
        data () {
          return {
            text : '',
            visible : false,
            background : null
          }
        }
    }
</script>

<style scoped>
  .loading {
    display: inline-block;
    animation: _loading 1s linear infinite;
  }
  @keyframes _loading {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .lan-loading{
    position: fixed;
    background-color: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    z-index: 1000;
  }
  .lan-loading i {
    margin-bottom: 4px;
  }
</style>
