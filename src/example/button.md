## Button

### Button基础用法
button基础用法
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式
```html
<div style="margin-bottom: 20px">
  <lan-button>默认按钮</lan-button>
  <lan-button type="primary">主要按钮</lan-button>
  <lan-button type="success">成功按钮</lan-button>
  <lan-button type="info">信息按钮</lan-button>
  <lan-button type="warning">警告按钮</lan-button>
  <lan-button type="danger">危险按钮</lan-button>
</div>

<div style="margin-bottom: 20px">
  <lan-button plain>朴素按钮</lan-button>
  <lan-button type="primary" plain>主要按钮</lan-button>
  <lan-button type="success" plain>成功按钮</lan-button>
  <lan-button type="info" plain>信息按钮</lan-button>
  <lan-button type="warning" plain>警告按钮</lan-button>
  <lan-button type="danger" plain>危险按钮</lan-button>
</div>

<div style="margin-bottom: 20px">
  <lan-button round>圆角按钮</lan-button>
  <lan-button type="primary" round>主要按钮</lan-button>
  <lan-button type="success" round>成功按钮</lan-button>
  <lan-button type="info" round>信息按钮</lan-button>
  <lan-button type="warning" round>警告按钮</lan-button>
  <lan-button type="danger" round>危险按钮</lan-button>
</div>

<div style="margin-bottom: 20px">
  <lan-button icon="iconfont icon-sousuo" circle></lan-button>
  <lan-button type="primary" icon="iconfont icon-bianji" circle></lan-button>
  <lan-button type="success" icon="iconfont icon-bianji" circle></lan-button>
  <lan-button type="info" icon="iconfont icon-xinfeng" circle></lan-button>
  <lan-button type="warning" icon="iconfont icon-shoucang" circle></lan-button>
  <lan-button type="danger" icon="iconfont icon-Group-" circle></lan-button>
</div>

```
:::

### Button禁用状态

Button不可点击
:::demo 使用disabled属性来定义按钮是否可用，它接受一个Boolean值。
```html
<div style="margin-bottom: 20px">
  <lan-button disabled>默认按钮</lan-button>
  <lan-button type="primary" disabled>主要按钮</lan-button>
  <lan-button type="success" disabled>成功按钮</lan-button>
  <lan-button type="info" disabled>信息按钮</lan-button>
  <lan-button type="warning" disabled>警告按钮</lan-button>
  <lan-button type="danger" disabled>危险按钮</lan-button>
</div>

<div>
  <lan-button plain disabled>朴素按钮</lan-button>
  <lan-button type="primary" plain disabled>主要按钮</lan-button>
  <lan-button type="success" plain disabled>成功按钮</lan-button>
  <lan-button type="info" plain disabled>信息按钮</lan-button>
  <lan-button type="warning" plain disabled>警告按钮</lan-button>
  <lan-button type="danger" plain disabled>危险按钮</lan-button>
</div>

```
:::

### 文字按钮
没有边框和背景色的按钮。
:::demo 接受一个type值为text
```html
<div>
  <lan-button type="text">文字按钮</lan-button>
  <lan-button type="text" disabled>文字按钮</lan-button>
</div>
```
:::

### 图标按钮
按钮里边可以显示图标以及文字
:::demo 接受一个icon值为icon的class类名
```html
<div>
  <lan-button type="primary" icon="iconfont icon-bianji"></lan-button>
  <lan-button type="primary" icon="iconfont icon-xinfeng"></lan-button>
  <lan-button type="primary" icon="iconfont icon-Group-">删除</lan-button>
  <lan-button type="primary">搜索 <i class="iconfont icon-sousuo"></i></lan-button>
</div>
```
:::

### 按钮组
以按钮组的方式出现，常用于多项类似操作。
:::demo 使用<el-button-group>标签来嵌套你的按钮。
```html
<div>
  <lan-button-group>
    <lan-button type="primary" icon="iconfont icon-zuojiantou">上一页</lan-button>
    <lan-button type="primary">下一页 <i class="iconfont icon-jiantou"></i></lan-button>
  </lan-button-group>
  <lan-button-group>
    <lan-button type="success" icon="iconfont icon-set"></lan-button>
    <lan-button type="success" icon="iconfont icon-sousuo"></lan-button>
  </lan-button-group>
  <lan-button-group>
    <lan-button type="danger" icon="iconfont icon-set"></lan-button>
    <lan-button type="danger" icon="iconfont icon-xinfeng"></lan-button>
    <lan-button type="danger" icon="iconfont icon-shoucang"></lan-button>
  </lan-button-group>
</div>
```
:::

### 带loading按钮
点击按钮后进行数据加载操作，在按钮上显示加载状态。
:::demo 设置属性loading为true则显示loading
```html
<div>
  <lan-button loading type="primary">加载中</lan-button>
</div>
```
:::

### 不同尺寸
Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
:::demo 额外的尺寸：medium、small、mini，通过设置size属性来配置它们。
```html
<div style="margin-bottom: 20px">
  <lan-button>默认尺寸</lan-button>
  <lan-button size="medium">中等尺寸</lan-button>
  <lan-button size="small">小尺寸</lan-button>
  <lan-button size="mini">超小尺寸</lan-button>
</div>

<div>
  <lan-button type="primary" round>默认尺寸</lan-button>
  <lan-button type="primary" round size="medium">中等尺寸</lan-button>
  <lan-button type="primary" round size="small">小尺寸</lan-button>
  <lan-button type="primary" round size="mini">超小尺寸</lan-button>
</div>
```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
