<template>
    <div>
      <div style="text-align: center;margin-top: 20px">
        <p>默认</p>
        <lan-switch v-model="select3" @change="test" ></lan-switch>
      </div>
      <div style="text-align: center;margin-top: 20px">
        <p>后文字</p>
        <lan-switch v-model="select4" @change="test"  active-next-value="激活时后文字" inactive-next-value="关闭时后文字" active-text-color="yellowgreen" active-switch-color="#409eff" close-switch-color="red"></lan-switch>
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
