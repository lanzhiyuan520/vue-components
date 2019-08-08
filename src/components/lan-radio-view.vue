<template>
  <div>
    <div style="text-align: center">
      <p>默认</p>
      <p>当前选中：{{radio}}</p>
      <lan-radio v-model="radio" style="margin-right: 30px" label="1">备选项1</lan-radio>
      <lan-radio v-model="radio" label="2" @change="test">备选项2</lan-radio>
    </div>

    <div style="text-align: center;margin-top: 20px">
      <p>是否禁用：disabled(Boolean)</p>
      <lan-radio v-model="radio2" style="margin-right: 30px" label="1" disabled>备选项1</lan-radio>
      <lan-radio v-model="radio2" label="2" @change="test">备选项2</lan-radio>
    </div>


    <div style="text-align: center;margin-top: 20px">
      <p>激活时文字颜色：text-color(string)</p>
      <lan-radio v-model="radio4" style="margin-right: 30px" label="1" text-color="red">备选项1</lan-radio>
      <lan-radio v-model="radio4" label="2" @change="test" text-color='yellowgreen'>备选项2</lan-radio>
    </div>

    <div style="text-align: center;margin-top: 20px">
      <p>激活时填充颜色：fill(string)</p>
      <lan-radio v-model="radio5" style="margin-right: 30px" label="1" fill="yellowgreen">备选项1</lan-radio>
      <lan-radio v-model="radio5" label="2" @change="test" fill='yellowgreen'>备选项2</lan-radio>
    </div>

    <div style="text-align: center;margin-top: 20px">
      <p>绑定值变化事件：change</p>
      <lan-radio v-model="radio3" style="margin-right: 30px" label="1" @change="test">备选项1</lan-radio>
      <lan-radio v-model="radio3" label="2" @change="test">备选项2</lan-radio>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lan-radio-view",
        data () {
          return {
            radio : '1',
            radio2 : '2',
            radio3 : '1',
            radio4 : '1',
            radio5 : '1'
          }
        },
        methods : {
          test (e) {
            console.log(e)
          }
        }
    }
</script>

<style scoped>

</style>
