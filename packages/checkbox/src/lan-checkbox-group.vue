<template>
    <div
      class="lan-checkbox-group"
    >
      <slot></slot>
    </div>
</template>

<script>
    export default {
      name: "lan-checkbox-group",
      componentName : 'lan-checkbox-group',
      props : {
        value : {}
      },
      methods : {
        changeVal (val) {
          this.$emit('input',val)
          this.$nextTick(()=>{
            this.$emit('change',val)
          })
        }
      },
      mounted () {
        this.$bus.$on('changeValue',this.changeVal)
      }
    }
</script>

<style scoped>

</style>
