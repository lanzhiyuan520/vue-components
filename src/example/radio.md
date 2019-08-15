## radio单选框

### 基本用法
::: demo
```html
<div>
  <lan-radio v-model="radio1" style="margin-right: 10px" label="1">备选项1</lan-radio>
  <lan-radio v-model="radio1" label="2" >备选项2</lan-radio>
</div>
<script>
  export default {
    data () {
      return {
        radio1 : '1',
        radio2 : '1',
        radio3 : '1'
      }
    }
  }
</script>
```
:::

### 是否禁用
::: demo 接受一个disabled值为Boolean的属性设置是否禁用
```html
<div>
  <lan-radio v-model="radio2" disabled style="margin-right: 10px" label="1">备选项1</lan-radio>
  <lan-radio v-model="radio2" disabled label="2" >备选项2</lan-radio>
</div>
```
:::

### 颜色
::: demo 激活时文字颜色(text-color)和填充颜色(fill)
```html
<div>
  <lan-radio v-model="radio3" label="1" style="margin-right: 10px" text-color="yellowgreen">备选项1</lan-radio>
  <lan-radio v-model="radio3" label="2" fill="yellowgreen">备选项2</lan-radio>
</div>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   |  绑定的数据  |   String  |  —  |  —  |
| disabled  |  是否禁用    |   Boolean | true \ false  |  false  |
| text-color  |  激活时文字颜色  | String | — |  —  |
| fill  |  激活时填充颜色  | String | — |  —  |

### 事件
| 事件名称      | 说明    | 类型      | 可选值       | 参数   |
|---------- |-------- |---------- |-------------  |-------- |
| change   |  改变时触发的回调  |  function  |  —  |  —  |
