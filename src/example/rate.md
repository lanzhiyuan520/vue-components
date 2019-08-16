## rate评分组件

### 基础用法
::: demo v-model绑定的数据默认显示星数
```html
<div style="margin-top: 5px">
  <lan-rate v-model="value"></lan-rate>
</div>
<script>
  export default {
    data () {
      return {
        value : 3,
        value2 : 1,
        value3 : 4,
        value4 : 4,
        tooltips : ['极差','差','一般','好','极好']
      }
    }
  }
</script>
``` 
:::

### 带文案
::: demo 给评分组件加上文案展示
```html
<div style="margin-top: 5px">
  <lan-rate v-model="value2" :tooltips="tooltips"></lan-rate>
</div>
```
:::

### 自定义icon
::: demo 自定义icon的样式
```html
<div style="margin-top: 2px">
  <lan-rate v-model="value4" icon="icon-set"></lan-rate>
</div>
```
:::

### 是否只读
::: demo 接受一个isRead值为Boolean的属性设置是否只读
```html
<div style="margin-top: 2px">
  <lan-rate v-model="value3" :tooltips="tooltips" is-read></lan-rate>
</div>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   |  绑定的数据  |   Number  |  —  |  —  |
| isRead  |  是否只读   |   Boolean | true \ false  |  false  |
| tooltips  |  文案展示  | Array | — |  —  |
| count  |  星星的数量  | Number | — |  —  |
| icon  |  icon的类名  | String | — |  icon-start  |

### 事件
| 事件名称      | 说明    | 类型      | 可选值       | 参数   |
|---------- |-------- |---------- |-------------  |-------- |
| change   |  改变时触发的回调  |  function  |  —  |  星星的颗数  |

