<template>
    <div
      class="lan-toast"
      v-if="visible"
    >
      <i v-if="icon" class="iconfont" :class="[
        icon
      ]"></i>
      <p>{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "lan-toast",
        data () {
          return {
            visible : false,
            icon : '',
            text : '',
            duration : 2000
          }
        }
    }
</script>

<style scoped>
.lan-toast {
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 10px;
  background: rgba(0,0,0,.7);
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
}
.lan-toast .icon-loading {
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
</style>
