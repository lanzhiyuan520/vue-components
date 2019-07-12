<template>
  <div style="margin: 10px;">
    <h2>基础用法</h2>
    <div style="margin-bottom: 10px">
      <lan-button>默认按钮</lan-button>
      <lan-button type="primary">主要按钮</lan-button>
      <lan-button type="success">成功按钮</lan-button>
      <lan-button type="info">信息按钮</lan-button>
      <lan-button type="warning">警告按钮</lan-button>
      <lan-button type="danger">危险按钮</lan-button>
      <div>
        <span>按钮类型 type(String) : primary(主要按钮)</span> |
        <span>success(成功按钮)</span> |
        <span>info(信息按钮)</span> |
        <span>warning(警告按钮)</span> |
        <span>danger(危险按钮)</span>
      </div>
    </div>
    <div style="margin-bottom: 10px">
      <lan-button plain>朴素按钮</lan-button>
      <lan-button type="primary" plain>主要按钮</lan-button>
      <lan-button type="success" plain>成功按钮</lan-button>
      <lan-button type="info" plain>信息按钮</lan-button>
      <lan-button type="warning" plain>警告按钮</lan-button>
      <lan-button type="danger" plain>危险按钮</lan-button>
      <div>
        <span>朴素按钮 plain(Boolean) | 默认值(false)</span>
      </div>
    </div>
    <div style="margin-bottom: 10px">
      <lan-button round>圆角按钮</lan-button>
      <lan-button type="primary" round>主要按钮</lan-button>
      <lan-button type="success" round>成功按钮</lan-button>
      <lan-button type="info" round>信息按钮</lan-button>
      <lan-button type="warning" round>警告按钮</lan-button>
      <lan-button type="danger" round>危险按钮</lan-button>
      <div>
        <span>圆角按钮 round(Boolean) | 默认值(false)</span>
      </div>
    </div>
    <div>
      <lan-button icon="iconfont icon-sousuo" circle></lan-button>
      <lan-button type="primary" icon="iconfont icon-bianji" circle></lan-button>
      <lan-button type="success" icon="iconfont icon-bianji" circle></lan-button>
      <lan-button type="info" icon="iconfont icon-xinfeng" circle></lan-button>
      <lan-button type="warning" icon="iconfont icon-shoucang" circle></lan-button>
      <lan-button type="danger" icon="iconfont icon-Group-" circle></lan-button>
      <div>
        <span>icon按钮 circle(Boolean) | 默认值(false)</span>
      </div>
    </div>
    <h2>禁用状态</h2>
    <div style="margin-bottom: 10px">
      <lan-button disabled>默认按钮</lan-button>
      <lan-button type="primary" disabled>主要按钮</lan-button>
      <lan-button type="success" disabled>成功按钮</lan-button>
      <lan-button type="info" disabled>信息按钮</lan-button>
      <lan-button type="warning" disabled>警告按钮</lan-button>
      <lan-button type="danger" disabled>危险按钮</lan-button>
    </div>
    <div style="margin-bottom: 10px">
      <lan-button plain disabled>朴素按钮</lan-button>
      <lan-button type="primary" plain disabled>主要按钮</lan-button>
      <lan-button type="success" plain disabled>成功按钮</lan-button>
      <lan-button type="info" plain disabled>信息按钮</lan-button>
      <lan-button type="warning" plain disabled>警告按钮</lan-button>
      <lan-button type="danger" plain disabled>危险按钮</lan-button>
      <div>
        <span>是否禁用 disabled(Boolean) | 默认值(false)</span>
      </div>
    </div>
    <h2>文字按钮</h2>
    <div style="margin-bottom: 10px">
      <lan-button type="text">文字按钮</lan-button>
      <lan-button type="text" disabled>文字按钮</lan-button>
      <div>
        <span>文字按钮 type(String) | text</span>
      </div>
    </div>
    <h2>图标按钮</h2>
    <div style="margin-bottom: 10px">
      <lan-button type="primary" icon="iconfont icon-bianji"></lan-button>
      <lan-button type="primary" icon="iconfont icon-xinfeng"></lan-button>
      <lan-button type="primary" icon="iconfont icon-Group-">删除</lan-button>
      <lan-button type="primary">搜索 <i class="iconfont icon-sousuo"></i></lan-button>
      <div>
        <span>图标按钮 icon(String) | icon名称</span>
      </div>
    </div>
    <h2>按钮组</h2>
    <div style="margin-bottom: 10px">
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
    <h2>带loading</h2>
    <div style="margin-bottom: 10px">
      <lan-button loading type="primary">加载中</lan-button>
      <div>
        <span>带loading loading(Boolean) | 默认值(false)</span>
      </div>
    </div>
    <h2>不同尺寸</h2>
    <div style="margin-bottom: 10px">
      <lan-button>默认尺寸</lan-button>
      <lan-button size="medium">中等尺寸</lan-button>
      <lan-button size="small">小尺寸</lan-button>
      <lan-button size="mini">超小尺寸</lan-button>
    </div>
    <div style="margin-bottom: 10px">
      <lan-button type="primary" round>默认尺寸</lan-button>
      <lan-button type="primary" round size="medium">中等尺寸</lan-button>
      <lan-button type="primary" round size="small">小尺寸</lan-button>
      <lan-button type="primary" round size="mini">超小尺寸</lan-button>
      <div>
        <span>尺寸大小 size(String) : medium(中等尺寸) | small(小尺寸) | mini(超小尺寸) | 默认值('')</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lan-button-view"
    }
</script>

<style scoped>

</style>
