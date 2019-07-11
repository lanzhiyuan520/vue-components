<template>
    <button
      class="lan-button"
      @click="handleClick"
      :class="[
        type?'lan-button-'+type : '',
        size?'lan-button-'+size : '',
        {
          'is-plain' : plain,
          'is-round' : round,
          'is-circle': circle,
          'is-disabled' : disabled,
          'is-loading' : loading
        }
      ]"
    >
      <i class="iconfont icon-loading loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default"><slot>按钮</slot></span>
    </button>
</template>

<script>
    export default {
        name: "LanButton",
        props : {
          type : {
            type : String,
            default: 'default'
          },
          plain : Boolean,
          round : Boolean,
          circle : Boolean,
          disabled : Boolean,
          loading : Boolean,
          size : {
            type : String,
            default : ''
          },
          icon : {
            type : String,
            default: ''
          }
        },
        methods : {
          handleClick (event) {
            this.$emit('click',event)
          }
        }
    }
</script>

<style scoped>
  button {
    box-sizing: border-box;
    outline: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    line-height: 1;
    display: inline-block;
    margin: 0;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    -webkit-appearance: none;
    transition: .1s;
    -webkit-tap-highlight-color: transparent;
    border: 1px solid #dcdfe6;
  }
  /*button [class*=icon-]+span {*/
    /*margin-left: 5px;*/
    /*vertical-align: center;*/
  /*}*/
  /*默认按钮样式*/
  .lan-button-default{
    border: 1px solid #dcdfe6;
    background-color: #fff;
    color: #606266;
  }
  .lan-button-default:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  .lan-button-default:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  .lan-button-default.is-plain:hover{
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  .lan-button-default.is-plain:active{
    border-color: #3a8ee6;
    color: #3a8ee6;
  }
  .lan-button-default.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
  .lan-button-default.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  .lan-button-default.is-disabled.is-plain,.lan-button-default.is-disabled{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }

  /*主要按钮样式*/
  .lan-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .lan-button-primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  .lan-button-primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none;
  }
  .lan-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  .lan-button-primary.is-plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  .lan-button-primary.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none;
  }
  .lan-button-primary.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
  .lan-button-primary.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  .lan-button-primary.is-disabled{
    color: #fff;
    cursor: not-allowed;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
  .lan-button-primary.is-disabled.is-plain{
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
    cursor: not-allowed;
  }
  /*成功按钮*/
  .lan-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  .lan-button-success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  .lan-button-success:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  .lan-button-success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  .lan-button-success.is-plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  .lan-button-success.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  .lan-button-success.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
  .lan-button-success.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  .lan-button-success.is-disabled{
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
    cursor: not-allowed;
  }
  .lan-button-success.is-disabled.is-plain{
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    cursor: not-allowed;
  }
  /*信息按钮*/
  .lan-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
  .lan-button-info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  .lan-button-info:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  .lan-button-info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
  .lan-button-info.is-plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
  .lan-button-info.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  .lan-button-info.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
  .lan-button-info.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  .lan-button-info.is-disabled{
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
    cursor: not-allowed;
  }
  .lan-button-info.is-disabled.is-plain{
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    cursor: not-allowed;
  }
  /*警告按钮*/
  .lan-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  .lan-button-warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  .lan-button-warning:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  .lan-button-warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  .lan-button-warning.is-plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  .lan-button-warning.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  .lan-button-warning.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
  .lan-button-warning.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  .lan-button-warning.is-disabled{
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
    cursor: not-allowed;
  }
  .lan-button-warning.is-disabled.is-plain{
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
    cursor: not-allowed;
  }
  /*危险按钮*/
  .lan-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  .lan-button-danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  .lan-button-danger:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  .lan-button-danger.is-plain{
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  .lan-button-danger.is-plain:hover{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  .lan-button-danger.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  .lan-button-danger.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
  .lan-button-danger.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  .lan-button-danger.is-disabled{
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
    cursor: not-allowed;
  }
  .lan-button-danger.is-disabled.is-plain{
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
    cursor: not-allowed;
  }
  /*文字按钮*/
  .lan-button-text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }
  .lan-button-text:hover {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
  .lan-button-text:active {
    color: #3a8ee6;
    background-color: transparent;
  }
  .lan-button-text.is-disabled{
    background-color: transparent;
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
  }
  /*带loading按钮*/
  .lan-button.is-loading {
    position: relative;
    pointer-events: none;
  }
  .lan-button.is-loading:before{
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0,0%,100%,.35);
  }
  .loading {
    display: inline-block;
    animation: _loading 1s linear infinite;
  }
  @keyframes _loading {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  /*不同尺寸*/
  .lan-button-medium{
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .lan-button-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  .lan-button-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  .lan-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  .lan-button-medium.is-round{
    padding: 10px 20px;
  }
  .lan-button-small.is-round{
    padding: 9px 15px;
  }
  .lan-button-mini.is-round{
    padding: 7px 15px;
  }
</style>
