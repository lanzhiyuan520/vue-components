<template>
  <div
    class="lan-rate"
  >
    <span
      class="lan-rate-start"
      v-for="(t,i) in count"
      :key="i"
      :class="[
         {
            'is-selected' : i+1 <=  model,
            'is-big' : i+1 === model
         }
      ]"
    >
      <i
        class="iconfont icon-start"
        @mouseenter="startMove(i)"
        @mouseout="startOut"
        @click="handClick(i)"
      ></i>
    </span>
    <span
      class="lan-rate-tooltips"
    >{{getTooltips}}</span>
  </div>

</template>

<script>
    export default {
      name: "lan-rate",
      props : {
        value : {
          type : Number,
          default : -1
        },
        tooltips : {
          type : Array
        },
        count : {
          type : Number,
          default: 5
        },
        isRead : {
          type : Boolean,
          default : false
        }
      },
      data () {
        return {
          current_index : this.value,
          select_index : -1,
        }
      },
      computed : {
        model : {
          get () {
            return this.current_index
          }
        },
        getTooltips () {
          return this.tooltips?this.tooltips[this.current_index-1]:''
        }
      },
      methods : {
        startMove (i) {
          if (this.isRead) return
          this.current_index = i+1
        },
        startOut () {
          if (this.isRead) return
          if (this.select_index > -1) {
            this.$emit('input',this.select_index)
            this.select_index = -1
            return
          }
          this.current_index = this.value
        },
        handClick (i) {
          if (this.isRead) return
          this.select_index = i+1
          this.$emit('change',this.select_index)
        }
      }
    }
</script>

<style scoped lang="scss">
  .lan-rate {
    display: inline-block;
    margin: 0;
    padding: 0;
    line-height: 1;
    .lan-rate-start {
      display: inline-block;
      i {
        padding: 4px;
        font-size: 20px;
        line-height: 0;
        color: #e8e8e8;
        transition: all .3s linear;
      }
    }
    .lan-rate-start.is-selected {
      i {
        color : #fadb14;
      }
    }
    .lan-rate-start.is-big {
      i {
        font-size: 22px;
      }
    }
    .lan-rate-tooltips {
      color: rgb(31, 45, 61);
      font-size: 14px;
    }
  }
</style>
