<template>
    <div class="toast" v-if="status">
      {{msg}}
    </div>
</template>

<script>
    export default {
        name: "toast",
        data () {
          return {
            msg : '加载中',
            status : false
          }
        }
    }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.7);
    color: #fff;
    padding: 5px 10px;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
  }
</style>
