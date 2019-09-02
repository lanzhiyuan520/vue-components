<template>
    <div>
      <icondoc></icondoc>
      <ul class="lan-icon-list">
        <li
          class="lan-icon-item"
          v-for="(item,index) in iconList"
          :key="index"
        >
          <span>
            <i
              class="iconfont"
              :class="[item.className]"
            ></i>
            <span class="icon-name">{{item.className}}</span>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
    import icondoc from '../example/icon.md'
    export default {
      name: "lan-icon-view",
      components : { icondoc },
      data () {
        return {
          iconList : [
            { className : 'icon-bianji'},
            { className : 'icon-set'},
            { className : 'icon-close'},
            { className : 'icon-start' },
            { className : 'icon-clear' },
            { className : 'icon-error' },
            { className : 'icon-success' },
            { className : 'icon-warning' },
            { className : 'icon-xinfeng' },
            { className : 'icon-Group-' },
            { className : 'icon-shoucang' },
            { className : 'icon-sousuo' },
            { className : 'icon-loading' },
            { className : 'icon-download' },
            { className : 'icon-bitian' },
            { className : 'icon-tupian' },
            { className : 'icon-paizhao' },
            { className : 'icon-jianshao' },
            { className : 'icon-tianjia' },
            { className : 'icon-shijian' },
            { className : 'icon-shangjiantou' },
            { className : 'icon-xiajiantou' },
            { className : 'icon-zuojiantou' },
            { className : 'icon-youjiantou' },
            { className : 'icon-fangda' },
            { className : 'icon-suoxiao' },
            { className : 'icon-suoxiao-2' },
            { className : 'icon-fangda-2' },
            { className : 'icon-xiaoxi' },
            { className : 'icon-riqi' },
            { className : 'icon-jieting' },
            { className : 'icon-jianshao-2' },
            { className : 'icon-zengjia-2' },
            { className : 'icon-zan' },
            { className : 'icon-cai' },
            { className : 'icon-pifu' },
            { className : 'icon-icon-more' }
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  .lan-icon-list:after {
    content: "";
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }
  .lan-icon-list{
    width: 870px;
    border: 1px solid #eaeefb;
    &>.lan-icon-item{
      width: 16.66%;
      height: 120px;
      line-height: 120px;
      float: left;
      text-align: center;
      border-right: 1px solid #eaeefb;
      border-bottom: 1px solid #eaeefb;
      margin-bottom: -1px;
      margin-right: -1px;
      display: flex;
      justify-content: center;
      align-items: center;
      &>span:hover {
        .icon-name,i {
          color: #5cb6ff;
        }
      }
      span {
        display: inline-block;
        color: #99a9bf;
        line-height: normal;
        font-size: 13px;
      }
      i{
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color .15s linear;
        line-height: 1;
      }
      .icon-name{
        display: inline-block;
        padding: 0 3px;
        height: 1em;
        transition: color .15s linear;
      }
    }
  }
</style>
