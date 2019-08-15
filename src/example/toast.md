## toast

### 基础用法
:::demo 调用this.$toast()方法显示toast组件
```html
<div>
  <lan-button @click="show">默认toast</lan-button>
  <lan-button type="primary" @click="showLoadingToast">带loading的toast</lan-button>
  <lan-button type="success" @click="showIconToast">带icon的toast</lan-button>
  <lan-button type="danger" plain @click="showIconErrorToast">带icon的toast</lan-button>
</div>
<script>
    export default {
        methods : {
          show () {
            this.$toast('显示成功')
          },
          showLoadingToast () {
            this.$toast({
              text : '加载中',
              duration : 3000,
              icon : 'icon-loading'
            })
          },
          showIconToast () {
            this.$toast({
              text : '成功',
              duration : 3000,
              icon : 'icon-success'
            })
          },
          showIconErrorToast () {
            this.$toast({
              text : '失败',
              duration : 3000,
              icon : 'icon-error'
            })
          }
        }
    }
</script>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   |  属性列表  | object  |  text:显示的文本  / icon:icon类名 / duration:显示的时间(默认2s)             |    —     |
| string     |  显示的文本  | string    |   string |     —    |
