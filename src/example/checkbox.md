## checkbox多选框

### 基本用法
:::demo 
```html
<div>
  <lan-checkbox v-model="checked"></lan-checkbox>
</div>
<script>
  export default {
    data () {
      return {
        checked : true,
        checked2 : true,
        checked3 : false,
        checked4 : false,
        checked5 : true,
        checked6 : ['a']
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
  <lan-checkbox v-model="checked2" disabled></lan-checkbox>
  <lan-checkbox v-model="checked3" disabled></lan-checkbox>
</div>
```
:::

### 颜色
::: demo 激活时文字颜色(text-color)和填充颜色(checkbox-color)
```html
<div>
  <lan-checkbox v-model="checked4" text-color="yellowgreen"></lan-checkbox>
  <lan-checkbox v-model="checked5" checkbox-color="yellowgreen"></lan-checkbox>
</div>
```
:::

### 多选组
::: demo 多个多选框放入到lan-checkbox-group组件中
```html
<div>
  当前选中:{{checked6}}
  <lan-checkbox-group v-model="checked6">
    <lan-checkbox label="a" checkbox-color="yellowgreen" text-color="yellowgreen">多选1</lan-checkbox>
    <lan-checkbox label="b">多选2</lan-checkbox>
    <lan-checkbox label="c">多选3</lan-checkbox>
  </lan-checkbox-group>
</div>
```
:::

### lan-checkbox参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   |  绑定的数据  |   String  |  —  |  —  |
| disabled  |  是否禁用    |   Boolean | true \ false  |  false  |
| text-color  |  激活时文字颜色  | String | — |  —  |
| checkbox-color  |  激活时填充颜色  | String | — |  —  |

### lan-checkbox-group参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   |  绑定的数据  |   Array  |  —  |  —  |

### 事件
| 事件名称      | 说明    | 类型      | 可选值       | 参数   |
|---------- |-------- |---------- |-------------  |-------- |
| change   |  改变时触发的回调  |  function  |  —  |  —  |
