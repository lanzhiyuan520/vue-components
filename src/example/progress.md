## progress

### progress基础用法
### 线形进度条
:::demo 线形进度条
```html
<div>
  <lan-progress></lan-progress>
  <lan-progress :percentage="50"></lan-progress>
  <lan-progress :percentage="60" progress-bgc="#67c23a"></lan-progress>
</div>
```
:::

### 百分比内显

:::demo 百分比内显
```html
<div>
  <div style="margin-bottom: 10px">
    <lan-progress inside-text :progress-height="20" :show-text="false"></lan-progress>
  </div>
  <div style="margin-bottom: 10px">
    <lan-progress inside-text :percentage="30" :progress-height="20" :show-text="false"></lan-progress>
  </div>
  <div style="margin-bottom: 10px">
    <lan-progress inside-text :percentage="70" :progress-height="20" :show-text="false" progress-bgc="#67c23a"></lan-progress>
  </div>  
</div>
```
:::

### 环形进度

:::demo 环形进度
```html
<div>
  <div style="display: inline-block;margin-right: 10px">
    <lan-progress type="circle"></lan-progress>
  </div> 
  <div style="display: inline-block;margin-right: 10px">
      <lan-progress type="circle" :percentage="40"></lan-progress>
  </div> 
  <div style="display: inline-block;margin-right: 10px">
      <lan-progress type="circle" :percentage="90" progress-bgc="#67c23a"></lan-progress>
  </div> 
</div>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type   |  进度类型  |   String  |  line \ circle  |  line  |
| progress-width  |  进度条宽度(适用于line)    |  Number  | —  |  350  |
| percentage  |  进度条百分比  |  Number  |  0-100  |  0  |
| progress-bgc  |  进度条颜色  |  String |  —  |  rgb(64, 158, 255)  |
| progress-height  |  进度条高度(适用于line)  | Number | — |  6  |
| inside-text  |  是否显示内置文字  | Boolean | true/false | true |
| width |  环形进度大小(适用于circle)  | Number | — |  126  |
| show-text |  是否显示进度条的文字  | Boolean | true/false |  true  |
