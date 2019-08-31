<template>
  <div>
    <!--<div class="progress-box">-->
      <!--<lan-progress :progress-width="350" :percentage="50" ></lan-progress>-->
    <!--</div>-->
    <!--<div class="progress-box">-->
      <!--<lan-progress :progress-width="350" :percentage="80" progress-bgc="#67c23a" :progress-height="20" inside-text></lan-progress>-->
    <!--</div>-->
    <!--<div class="progress-box">-->
      <!--<lan-progress  :percentage="50" type="circle" :width="126"></lan-progress>-->
    <!--</div>-->
    <progressdoc></progressdoc>
  </div>
</template>

<script>
    import progressdoc from '../example/progress.md'
    export default {
      name: "lan-progress-view",
      components : {progressdoc}
    }
</script>

<style scoped lang="less">
  .progress-box{
    margin-bottom: 20px;
  }
</style>
