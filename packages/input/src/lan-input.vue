<template>
    <div
      class="lan-input"
      :class="[
        {
          'is-disabled' : disabled,
          'is-input-prefix' : prefixIcon,
          'is-input-suffix' : suffixIcon,
        }
      ]"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      <template v-if="type!=='textarea'">
      <span class="el-input__prefix">
          <i
            class="lan-input-icon iconfont"
            v-if="prefixIcon"
            :class="prefixIcon"
          ></i>
      </span>
        <input
          :type="type"
          ref="input"
          class="lan-input__inner"
          v-bind="$attrs"
          :disabled="disabled"
          :placeholder="placeholder"
          :autocomplete="autoComplete || autocomplete"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"

      >
      <span v-if="getSuffixVisible" class="lan-input__suffix">
        <i
          v-if="showClear"
          class="lan-input-icon lan-input-clear iconfont icon-clear"
          @click="clear"
        ></i>
        <i
          v-if="suffixIcon"
          class="iconfont lan-input-icon"
          :class="suffixIcon"
        ></i>
        <span v-if="isWordLimitVisible" class="lan-input__count">
          <span class="lan-input__count-inner">
            {{textLength}}/{{upperLimit}}
          </span>
        </span>
      </span>
      </template>
    </div>
</template>

<script>
    export default {
        name: "lan-input",
        data () {
          return {
            hovering : false
          }
        },
        props : {
          value : [String,Number],
          type : {
            type : String,
            default : ''
          },
          placeholder : {
            type : String,
            default: '请输入内容'
          },
          disabled : {
            type : Boolean,
            default : false
          },
          pass : {
            type : Boolean,
            default : false
          },
          clearable : {
            type : Boolean,
            default : false
          },
          prefixIcon : {
            type : String,
            default : ''
          },
          suffixIcon : {
            type : String,
            default : ''
          },
          showWordLimit : {
            type : Boolean,
            default : false
          },
          autocomplete : {
            type : String,
            default: 'off'
          },
          autoComplete: {
            type: String,
            validator(val) {
              process.env.NODE_ENV !== 'production' &&
              console.warn('[Element Warn][Input]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.');
              return true;
            }
          }
        },
        methods : {
          handleInput (e) {
            this.$emit('input',e.target.value)
          },
          handleFocus (e) {
            this.$emit('focus')
          },
          handleBlur (e) {
            this.$emit('blur',e.target.value)
          },
          handleChange (e) {
            this.$emit('change',e.target.value)
          },
          clear () {
            this.$emit('input','')
            this.$emit('change','')
            this.$refs.input.value = ''
          }
        },
      computed : {
        getSuffixVisible () {
          return this.clearable || this.suffixIcon || this.showWordLimit
        },
        nativeInputValue() {
          return this.value === null || this.value === undefined ? '' : String(this.value);
        },
        showClear () {
          return this.clearable && !this.disabled && this.hovering && this.nativeInputValue
        },
        upperLimit () {
          return this.$attrs.maxlength
        },
        isWordLimitVisible () {
          return !this.suffixIcon && !this.clearable && this.$attrs.maxlength
        },
        textLength () {
          if (typeof this.value === 'number') {
            return String(this.value).length
          }
          return (this.value || '').length
        }
      },
      mounted () {

      }
    }
</script>

<style scoped>
.lan-input {
  position: relative;
}
.lan-input input {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
.lan-input input:hover {
  border-color: #c0c4cc;
}
.lan-input input:focus{
  outline: none;
  border-color: #409eff;
}
.lan-input.is-disabled input{
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.lan-input-icon {
  width: 25px;
  line-height: 40px;
  font-size: 14px;
}
.lan-input__suffix {
  position: absolute;
  right: 5px;
  height: 100%;
  top: 0;
  text-align: center;
  transition: all .3s;
}
.lan-input-icon.lan-input-clear{
  color: #c0c4cc;
  transition: color .2s cubic-bezier(.645,.045,.355,1);
}
.lan-input-icon.lan-input-clear:hover {
  color: #909399;
}
.el-input__prefix {
  position: absolute;
  left: 5px;
  top: 0;
  height: 100%;
  text-align: center;
  transition: all .3s;
  color: #c0c4cc;
}
.is-input-prefix .lan-input__inner {
  padding-left: 30px;
}
.is-input-suffix .lan-input__inner {
  padding-right: 30px;
}
.lan-input .lan-input__count {
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: #909399;
  font-size: 12px;
}
.lan-input .lan-input__count-inner {
  padding: 0 5px;
  background-color: #fff;
  display: inline-block;
}
</style>
