<template>
  <label
    class="lan-checkbox"
    :class="[
      {
        'is-checked':isChecked,
        'is-disabled' : disabled
      }
    ]"
  >
    <span
      class="lan-checkbox-input"
      :class="[
        {
          'is-checked':isChecked,
          'is-disabled' : disabled
        }
      ]"
    >
      <span
        class="lan-checkbox-inner"
        :style="[isChecked?checkboxStyle:null,hoverStyle]"
        @mouseenter="changBorderColor"
        @mouseout="hoverStyle=null"
      ></span>
      <input
        type="checkbox"
        class="lan-checkbox-original"
        v-model="model"
        :disabled='disabled'
        @change="handleChange"
      >
    </span>
    <span
      class="lan-checkbox-label"
      :style="isChecked?textColorStyle:null"
    >
      <slot>备选项</slot>
    </span>
  </label>
</template>

<script>
    export default {
      name: "lan-checkbox",
      props : {
        value : {},
        textColor : String,
        checkboxColor : String,
        label : String,
        disabled : {
          type : Boolean,
          default : false
        }
      },
      data () {
        return {
          hoverStyle : null
        }
      },
      computed : {
        model : {
          get () {
            return this.isGroup? this._checkBoxGroup.value:this.value
          },
          set (val) {
            if (!this.isGroup) {
              this.$emit('input',val)
            }
          }
        },
        isChecked () {
          if (this.isGroup) {
            let indexFlag = this.model.indexOf(this.label)
            if (!this.label) {
              return false
            } else if (indexFlag < 0) {
              return false
            } else if (indexFlag >= 0) {
              return true
            }
          } else {
            return this.model
          }
        },
        isGroup () {
          let parent = this.$parent
          if (parent.$options.componentName === 'lan-checkbox-group') {
            this._checkBoxGroup = parent
            return true
          }
          return false
        },
        textColorStyle () {
          return {
            color : this.textColor
          }
        },
        checkboxStyle () {
          return {
            backgroundColor: this.checkboxColor,
            border: `1px solid ${this.checkboxColor}`
          }
        }
      },
      methods : {
        changBorderColor () {
          this.checkboxColor ? this.hoverStyle = { border : `1px solid ${this.checkboxColor}` }:this.hoverStyle = null
        },
        handleChange () {
          if (!this.isGroup) {
            this.$emit('change',!this.model)
          }else {
            if (this.isChecked) {
              var value = this._checkBoxGroup.value.filter(item => item !== this.label)
            }else {
              var value = this.model
              value.push(this.label)
            }
            this.$bus.$emit('changeValue',value)
          }
        },
      },
      mounted () {

      },
    }
</script>

<style scoped lang="scss">
  .lan-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    &>.lan-checkbox-input.is-checked {
      &>.lan-checkbox-inner {
        background-color: #409eff;
        border-color: #409eff;
      }
      &>.lan-checkbox-inner:after {
        transform: rotate(45deg) scaleY(1);
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    &>.lan-checkbox-input {
      white-space: nowrap;
      cursor: pointer;
      display: inline-block;
      outline: none;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      &>.lan-checkbox-inner:hover {
        border-color: #409eff;
      }
      &>.lan-checkbox-inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      }
      &>.lan-checkbox-inner:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
        transform: rotate(45deg) scaleY(0);
      }
      &>.lan-checkbox-original{
        opacity: 0;
        outline: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
        z-index: -1;
        cursor: pointer;
      }
    }
    &>.lan-checkbox-label {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }

  }
  .lan-checkbox.is-disabled {
    &>.lan-checkbox-input.is-disabled {
      &>.lan-checkbox-inner {
        background-color: #edf2fc;
        border-color: #dcdfe6;
        cursor: not-allowed;
      }
      &>.lan-checkbox-inner:after {
        cursor: not-allowed;
        border-color: #c0c4cc;

      }
    }
    &>.lan-checkbox-label {
      cursor: not-allowed;
    }
  }
</style>
