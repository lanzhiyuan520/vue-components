<template>
  <label
    class="lan-checkbox"
    :class="[
      {
        'is-checked':isChecked
      }
    ]"
  >
    <span
      class="lan-checkbox-input"
      :class="[
        {
          'is-checked':isChecked
        }
      ]"
    >
      <span
        class="lan-checkbox-inner"
        :style="[model?checkboxStyle:null,hoverStyle]"
        @mouseenter="changBorderColor"
        @mouseout="hoverStyle=null"
      ></span>
      <input
        type="checkbox"
        class="lan-checkbox-original"
        v-model="model"
        @change="handleChange"
      >
    </span>
    <span
      class="lan-checkbox-label"
      :style="model?textColorStyle:null"
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
        checkboxColor : String
      },
      data () {
        return {
          hoverStyle : null
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
        isChecked () {
          return this.model
        },
        textColorStyle () {
          return {
            color : this.textColor
          }
        },
        checkboxStyle () {
          return {
            backgroundColor: this.checkboxColor,
            borderColor: this.checkboxColor
          }
        }
      },
      methods : {
        changBorderColor () {
          this.checkboxColor ? this.hoverStyle = { border : `1px solid ${this.checkboxColor}` }:this.hoverStyle = null
        },
        handleChange () {
          this.$emit('change',!this.model)
        }
      }
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
</style>
