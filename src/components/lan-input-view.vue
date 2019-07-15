<template>
  <div style="margin: 10px;">
    <div style="width: 180px;margin-bottom: 10px">
      <lan-input @focus="inputFocus" @blur="inputBlur" placeholder="icon在后边" @change="inputChange" suffix-icon="icon-set" ></lan-input>
    </div>
    <div style="width: 180px;margin-bottom: 10px">
      <lan-input  @focus="inputFocus" @blur="inputBlur" placeholder="字数限制" @change="inputChange" show-word-limit maxlength="10" ></lan-input>
    </div>
    <div style="width: 180px;margin-bottom: 10px">
      <lan-input v-model="input" @focus="inputFocus" @blur="inputBlur" placeholder="带清空按钮" @change="inputChange" clearable ></lan-input>
    </div>
    <div style="width: 180px;margin-bottom: 10px">
      <lan-input  @focus="inputFocus" @blur="inputBlur" placeholder="禁用input" @change="inputChange" disabled ></lan-input>
    </div>
    <div style="width: 180px;">
      <lan-input v-model="input" @focus="inputFocus" @blur="inputBlur" placeholder="icon在前边" @change="inputChange" prefix-icon="icon-bianji" ></lan-input>
      <p>{{input}}</p>
      <p style="margin-top: 10px">参数：</p>
      <p>v-model ：绑定的数据</p>
      <p>prefix-icon ：input前icon</p>
      <p>suffix-icon ：input后icon</p>
      <p>placeholder ：文本框占位符</p>
      <p>type ：文本框类型</p>
      <p>maxlength ：字数限制</p>
      <p>disabled ：是否禁用  -- 默认值false</p>
      <p>autofocus ：是否自动获取焦点(Boolean)   -- 默认值false</p>
      <p>clearable ：是否显示清空按钮(Boolean)   -- 默认值false</p>
      <p>show-word-limit ：是否显示数字统计(Boolean)   -- 默认值false</p>
      <p style="margin-top: 10px">事件</p>
      <p>focus : 获取焦点事件</p>
      <p>blur : 失去焦点事件</p>
      <p>change : input值改变时触发(失去焦点时触发)</p>
      <p>input : input值改变就触发</p>
    </div>

  </div>

</template>

<script>
    export default {
        name: "lan-input-view",
        data () {
          return {
            input : ''
          }
        },
        methods : {
          inputFocus () {

          },
          inputBlur () {

          },
          inputChange () {

          }
        }
    }
</script>

<style scoped>

</style>
