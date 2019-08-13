<template>
    <div>
      <div style="text-align: center;margin-top: 20px">
        <p>默认</p>
        <lan-switch v-model="select3" @change="test" ></lan-switch>
      </div>
      <div style="text-align: center;margin-top: 20px">
        <p>文字(string) : </p>
        <p>active-next-value:激活时的后边文字</p>
        <p>inactive-next-value:关闭时的后边文字</p>
        <lan-switch v-model="select4" @change="test"  active-next-value="打开" inactive-next-value="关闭"  active-switch-color="#409eff" close-switch-color="red"></lan-switch>
      </div>
      <div style="text-align: center;margin-top: 20px">
        <p>颜色</p>
        <p>active-text-color:激活时文字颜色</p>
        <p>close-text-color:关闭时文字颜色</p>
        <p>active-switch-color:激活时开关的背景色</p>
        <p>close-switch-color:关闭时开关的背景色</p>
        <p></p>
        <lan-switch v-model="select5" @change="test" active-text-color="yellowgreen" active-next-value="打开" inactive-next-value="关闭" active-switch-color="yellowgreen" close-switch-color="red" close-text-color="red"></lan-switch>
      </div>
      <div style="text-align: center;margin-top: 20px">
        <p>禁用(选中)</p>
        <lan-switch v-model="select" @change="test" disabled></lan-switch>
      </div>
      <div style="text-align: center;margin-top: 20px">
        <p>禁用(未选中)</p>
        <lan-switch v-model="select2" @change="test" disabled></lan-switch>
      </div>
    </div>
</template>

<script>
    export default {
      name: "lan-switch-view",
      data () {
        return {
          select : true,
          select2 : false,
          select3 : true,
          select4 : true,
          select5 : true
        }
      },
      methods : {
        test () {
          console.log(this.select);
        }
      }
    }
</script>

<style scoped>

</style>
