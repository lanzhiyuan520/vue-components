<template>
    <div
      class="lan-switch"
      :class="[
        {
          'is-disabled':disabled
        }
      ]"
    >
      <input
        type="checkbox"
        class="lan-switch-input"
        v-model="model"
        :disabled="disabled"
        @change="handleChange"
      >
      <span v-if="activePrevValue">{{activePrevValue}}</span>
      <span
       class="lan-switch-core"
       :class="[
         {
            'is-checked' : model,
            'is-disabled' : disabled
         }
       ]"
       :style="[model?getActiveBgcColor:getCloseColor]"
      ></span>
      <span
        v-if="activeNextValue && model"
        :style="[model?getActiveTextColor:null]"
      >{{activeNextValue}}</span>
      <span
        v-else="activeNextValue"
      >{{inactiveNextValue}}</span>
    </div>
</template>

<script>
    export default {
      name: "lan-switch",
      props : {
        value : {},
        activeBgc : String,
        disabled : {
          type : Boolean,
          default : false
        },
        activeNextValue : String,
        inactiveNextValue : String,
        activePrevValue : String,
        activeTextColor : String,
        activeSwitchColor : String,
        closeSwitchColor : String
      },
      data () {
        return {

        }
      },
      computed : {
        model : {
          get () {
            return this.value
          },
          set (val) {
            this.$emit('input',val)
          }
        },
        getActiveBgcColor () {
          return {
            backgroundColor : this.activeSwitchColor?this.activeSwitchColor: 'rgb(19, 206, 102)' ,
            borderColor : this.activeSwitchColor?this.activeSwitchColor: 'rgb(19, 206, 102)'
          }
        },
        getCloseColor () {
          return  {
            backgroundColor : this.closeSwitchColor ? this.closeSwitchColor : '',
            borderColor : this.closeSwitchColor ? this.closeSwitchColor : ''
          }
        },
        getActiveTextColor () {
          // if (this.activeTextColor) {
          //   return {
          //     color : this.activeTextColor
          //   }
          // }
          return this.activeTextColor ? {color : this.activeTextColor} : ''
        }
      },
      methods : {
        handleChange (val) {
          this.$emit('change',!this.model)
        }
      }
    }
</script>

<style scoped lang="scss">
  .lan-switch {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    &>.lan-switch-input {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
    }
    &>.lan-switch-core {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      background-color: #dcdfe6;
      border-radius: 10px;
      cursor: pointer;
      margin: 0;
      transition: border-color .3s,background-color .3s;
      vertical-align: middle;
      outline: none;
    }
    &>.lan-switch-core.is-checked:after {
      left: 100%;
      margin-left: -17px;
    }
    &>.lan-switch-core:after {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .lan-switch.is-disabled {
    opacity: .6;
    &>.lan-switch-core.is-disabled {
      cursor: not-allowed;
    }
    &>.lan-switch-input {
      width: 0;
      height: 0;
    }
  }
</style>
