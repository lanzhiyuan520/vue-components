<template>
    <div>
      <div class="calendar-style">
        <lan-calendar></lan-calendar>
      </div>
    </div>
</template>

<script>
    export default {
        name: "lan-calendar-view"
    }
</script>

<style scoped lang="scss">
  .calendar-style{
    border: 1px solid #ebebeb;
    padding: 24px;
    border-radius: 3px;
    transition: .2s;
  }
</style>
