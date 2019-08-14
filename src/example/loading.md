## loading

### 基本使用方式

:::demo this.$loading显示，this.close隐藏
```html
<div>
  <lan-button type="primary" style="margin-right: 10px" @click="show">显示loading</lan-button>
</div>
<script>
  export default {
    methods: {
        show () {
          this.$loading({
             text : '加载中'
          })
          setTimeout (()=>{
            this.close()
          },2000)
        }
      }
    }
</script>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   |  属性列表  | object  |  text:显示的文本  / background:背景颜色             |    —     |
| text     |  显示的文本  | string    |   text |     —    |

