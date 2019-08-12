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
    <div style="text-align: center;margin-top: 20px">
      <p>多选组</p>
      <p>当前选中:{{checked4}}</p>
      <lan-checkbox-group v-model="checked4" @change="test2">
        <lan-checkbox label="a" checkbox-color="yellowgreen" text-color="blue">多选1</lan-checkbox>
        <lan-checkbox label="b">多选2</lan-checkbox>
        <lan-checkbox label="c">多选3</lan-checkbox>
      </lan-checkbox-group>
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
          checked3 : true,
          checked4 : ['a']
        }
      },
      methods : {
        test (val) {
          this.checked3 = val
        },
        test2 (val) {
          console.log(val)
        }
      }
    }
</script>

<style scoped>

</style>
