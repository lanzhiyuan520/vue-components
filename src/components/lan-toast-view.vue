<template>
    <div style="margin: 10px">
      <lan-button type="primary" @click="show">普通toast</lan-button>
      <lan-button type="primary" @click="showLoadingToast">带loading的toast</lan-button>
      <lan-button type="primary" @click="showIconToast">带icon的toast</lan-button>
      <div style="margin: 10px">
        调用方式 this.$toast(object|string) <br />
        string (显示的文本) <br />
        object {
          text : '显示的文本',
          icon : '要显示的icon',
          duration : '显示的时间' (默认2s)
        }
      </div>
    </div>
</template>

<script>
    export default {
        name: "lan-toast-view",
        methods : {
          show () {
            this.$toast('显示成功')
          },
          showLoadingToast () {
            this.$toast({
              text : '加载中',
              duration : 5000,
              icon : 'icon-loading'
            })
          },
          showIconToast () {
            this.$toast({
              text : '成功',
              duration : 5000,
              icon : 'icon-success'
            })
          }
        }
    }
</script>

<style scoped>

</style>
