<template>
  <div class="button-doc">
    <buttondoc></buttondoc>
  </div>
</template>

<script>
  import buttondoc from '../example/button.md'
  export default {
    name: "lan-button-view",
    data () {
      return {

      }
    },
    components : {
      buttondoc
    }
  }
</script>

<style scoped lang="scss">

</style>
