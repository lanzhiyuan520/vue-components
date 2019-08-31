<template>
  <div>
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

<style scoped lang="scss">
  .progress-box{
    margin-bottom: 20px;
  }
</style>
