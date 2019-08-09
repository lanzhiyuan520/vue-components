<template>
  <div>
    <div style="text-align: center">
      <p>默认单个</p>
      <lan-checkbox v-model="checked" ></lan-checkbox>
    </div>
    <div style="text-align: center;margin-top: 20px">
      <p>默认选中时的样式</p>
      <p>text-color(String):选中时文字的颜色</p>
      <p>checkbox-color(String):选中时checkbox颜色</p>
      <lan-checkbox v-model="checked2" text-color="red" checkbox-color="yellowgreen"></lan-checkbox>
    </div>
    <div style="text-align: center;margin-top: 20px">
      <p>更改值时事件 change</p>
      <p>当前状态:{{checked3?'选中':'未选中'}}</p>
      <lan-checkbox v-model="checked3" @change="test"></lan-checkbox>
    </div>
  </div>
</template>

<script>
    export default {
      name: "lan-checkbox-view",
      data () {
        return {
          checked : true,
          checked2 : true,
          checked3 : true
        }
      },
      methods : {
        test (val) {
          this.checked3 = val
        }
      }
    }
</script>

<style scoped>

</style>
