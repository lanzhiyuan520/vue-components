<template>
  <label
    class="lan-radio-label"
    :class="[
      {
        'is-checked': model === label,
        'is-disabled' : disabled
      }
    ]"
    :aria-disabled="disabled"
  >
    <span
      class="lan-radio-input"
      :class="[
        {
          'is-checked' : model === label,
          'is-disabled' : disabled
        }
      ]"
    >
      <span
        class="lan-radio-inner"
        :style="[model === label? fillStyle:null,hoverStyle?hoverStyle:'']"
        @mouseenter="changBorderColor"
        @mouseout="hoverStyle=null"
      ></span>
      <input
        type="radio"
        class="lan-radio-original"
        :value="label"
        v-model="model"
        :disabled='disabled'
        @change="handleChange"
      >
    </span>
    <span
      class="lan-radio-label-text"
      :style="model === label ? textStyle : null"
    >
      <slot>备选项</slot>
    </span>
  </label>
</template>

<script>
    export default {
        name: "lan-radio",
        props : {
          label : {},
          value : {},
          disabled : {
            type : Boolean,
            default : false
          },
          textColor : String,
          fill : String
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
          textStyle () {
            return {
              color : this.textColor
            }
          },
          fillStyle () {
            return {
              backgroundColor : this.fill,
              border : `1px solid ${this.fill}`
            }
          }
        },
        mounted () {

        },
        methods : {
          handleChange () {
            this.$nextTick(()=>{
              this.$emit('change',this.model)
            })
          },
          changBorderColor () {
            this.hoverStyle = {
              border: `1px solid ${this.fill}`
            }
          }
        }

    }
</script>

<style scoped lang="scss">
  $color-409:#409eff;
  .lan-radio-label{
    color: #606266;
    position: relative;
    &>.lan-radio-input.is-checked {
      &>.lan-radio-inner {
        border-color: $color-409;
        background-color: $color-409;
      }
      &>.lan-radio-inner:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(1);
        transition: transform .15s ease-in;
      }
    }
    &>.lan-radio-input {
      position: relative;
      display: inline-block;
      line-height: 1;
      vertical-align: middle;
      &>.lan-radio-inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        box-sizing: border-box;
        white-space: nowrap;
        background-color: #fff;
      }
      &>.lan-radio-inner:hover {
        border: 1px solid $color-409;
      }
      &>.lan-radio-inner:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
      &>.lan-radio-original {
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    &>.lan-radio-label-text {
      //color: $color-409;
      font-size: 14px;
      padding-left: 10px;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
    }
  }
  .lan-radio-label.is-checked {
    &>.lan-radio-label-text {
      color: $color-409;
    }
  }
  .lan-radio-label.is-disabled {
    &>.lan-radio-input.is-disabled {
      &>.lan-radio-inner {
        cursor: not-allowed;
        background-color: #f5f7fa;
        border-color: #e4e7ed;
      }
      &>.lan-radio-inner:after {
        background-color: #c0c4cc;
      }
    }
    &>.lan-radio-label-text {
      cursor: not-allowed;
      color: #c0c4cc;
    }
  }
</style>
