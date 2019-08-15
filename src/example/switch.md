## switch开关

### 基本用法
::: demo
```html
<div style="margin-bottom: 2px">
  <lan-switch v-model="select"></lan-switch>
</div>
<script>
  export default {
    data () {
      return {
        select : true,
        select2 : false,
        select3 : true,
        select4 : true,
        select5 : false,
        select6 : true,
        select7 : false,
        select8 : true,
      }
    }
  }
</script>
```
:::

### 是否禁用
:::demo 接受一个disabled值为Boolean的属性设置是否禁用
```html
<div>
  <lan-switch v-model="select2" disabled></lan-switch>
  <lan-switch v-model="select3" disabled></lan-switch>
</div>
```
:::

### 文字
::: demo 打开(active-next-value)和关闭(inactive-next-value)时的文字
```html
<div style="margin-bottom: 2px">
  <lan-switch v-model="select4" inactive-next-value="关闭" active-next-value="打开"></lan-switch>
</div>
```
:::

### 颜色
::: demo 激活时、关闭时的文字颜色和填充颜色
```html
<div style="margin-bottom: 2px">
  <lan-switch v-model="select5" inactive-next-value="关闭时文字颜色" active-next-value="激活时文字颜色" active-text-color="yellowgreen" close-text-color="red"></lan-switch>
  <lan-switch v-model="select6" inactive-next-value="关闭时填充颜色" active-next-value="激活时填充颜色" active-switch-color="yellowgreen" close-switch-color="red"></lan-switch>
</div>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   |  绑定的数据  |   Boolean  |  true \ false  |  —  |
| disabled  |  是否禁用    |   Boolean | true \ false  |  false  |
| active-next-value  |  激活时的文字    |   String |  —  |  —  |
| inactive-next-value  |  关闭时的文字    |   String |  —  |  —  |
| active-text-color  |  激活时文字颜色  | String | — |  —  |
| close-text-color  |  关闭时文字颜色  | String | — |  —  |
| active-switch-color  |  激活时填充颜色  | String | — |  —  |
| close-switch-color  |  关闭时填充颜色  | String | — |  —  |

### 事件
| 事件名称      | 说明    | 类型      | 可选值       | 参数   |
|---------- |-------- |---------- |-------------  |-------- |
| change   |  改变时触发的回调  |  function  |  —  |  —  |
