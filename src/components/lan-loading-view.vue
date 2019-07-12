<template>
    <div style="margin: 10px;">
      <lan-button type="primary" style="margin-right: 10px" @click="show">显示</lan-button>
      <div style="margin-top: 10px">
        调用方法 : (显示)this.$loading() | object(对象) : text(显示的文本) | background(背景颜色) | string(字符串) : text(显示的文本) <br />
        隐藏 this.close()
      </div>
    </div>
</template>

<script>
    export default {
        name: "lan-loading-view",
        data () {
          return {

          }
        },
        methods : {
          show () {
            this.$loading({
              text : '加载中'
            })
            setTimeout( () => {
              this.close()
            },3000)
          }
        }
    }
</script>

<style scoped>

</style>
