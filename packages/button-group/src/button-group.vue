<template>
    <div class="lan-button-group">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "lan-button-group"
    }
</script>
<style scoped>
  .lan-button-group {
    display: inline-block;
    vertical-align: middle;
  }
  .lan-button-group .lan-button:active {
    z-index: 1;
  }
  .lan-button-group. .lan-button:first-child{
    border-right-color: hsla(0,0%,100%,.5);
  }
  .lan-button-group>.lan-button:not(:last-child) {
    margin-right: -1px;
  }
  .lan-button-group>.lan-button:first-child{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .lan-button-group>.lan-button:last-child{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .lan-button-group>.lan-button{
    float: left;
    position: relative;
  }
  .lan-button-group .lan-button.lan-button-default:not(:last-child):not(:first-child) {
    border-color: #dcdfe6;
  }
  .lan-button-group .lan-button.lan-button-default:not(:last-child):not(:first-child):active{
    border-color: #3a8ee6;
    z-index: 1;
  }
  .lan-button-group .lan-button.lan-button-default:last-child{
    border-left-color: #dcdfe6;
  }
  .lan-button-group .lan-button.lan-button-default:last-child:active{
    border-left-color: #3a8ee6;
    z-index: 1;
  }
  .lan-button-group .lan-button:last-child{
    border-left-color: hsla(0,0%,100%,.5);
  }
  .lan-button-group .lan-button:not(:last-child):not(:first-child) {
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5);
    border-radius: 0;
  }
</style>
