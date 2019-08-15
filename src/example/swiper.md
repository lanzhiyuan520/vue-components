## Swiper

### 基础用法
::: demo
```html
<div>
  <lan-swiper>
    <lan-swiper-item v-for="(item,index) in swiper" :key="index">
      <div class="test" :style="{background:item.bgc}">{{item.title}}</div>
    </lan-swiper-item>
  </lan-swiper>
</div>
<script>
  export default {
    data () {
      return {
        swiper : [
            {
              title : 1,
              bgc : '#2980b9'
            },
            {
              title : 2,
              bgc : 'yellowgreen'
            },
            {
              title : 3,
              bgc : '#7f8c8d'
            },
            {
              title : 4,
              bgc : 'cadetblue'
            }
        ],
            
      }
    }
  }
</script>
<style lang="scss">
  .test {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```
:::

### 自动轮播
::: demo 接受一个autoplay值为Boolean的属性
```html
<div>
  <lan-swiper autoplay>
    <lan-swiper-item v-for="(item,index) in swiper" :key="index">
      <div class="test" :style="{background:item.bgc}">{{item.title}}</div>
    </lan-swiper-item>
  </lan-swiper>
</div>
<script>
  export default {
    data () {
      return {
        swiper : [
            {
              title : 1,
              bgc : '#2980b9'
            },
            {
              title : 2,
              bgc : 'yellowgreen'
            },
            {
              title : 3,
              bgc : '#7f8c8d'
            },
            {
              title : 4,
              bgc : 'cadetblue'
            }
        ],
            
      }
    }
  }
</script>
<style lang="scss">
  .test {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger   |  指示器触发方式  |   String  |  hover \ click   |   hover   |
| autoplay     |  是否自动轮播  | Boolean | true \ false  |  false  |
| interval     |  自动轮播切换时间  | Number | — |  3000  |

### 事件
| 事件名称    | 说明    | 类型      | 可选值       |  参数  |
|---------- |-------- |---------- |-------------  |-------- |
| change   | 切换时的回调 |  function  |  —  |  当前下标   |
