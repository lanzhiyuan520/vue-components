<template>
    <div
      class="lan-swiper"
      ref="swiper"
      :style="{height: height+'px'}"
      @mouseenter="showArrow = true"
      @mouseleave="showArrow = false"
    >
      <slot></slot>
      <transition name="btn-animating-prev">
        <button v-if="showArrow" @click="prev" class="prevbtn" >
          <i class="iconfont icon-zuojiantou"></i>
        </button>
      </transition>
      <transition  name="btn-animating-next">
        <button v-if="showArrow" @click="next" class="nextbtn" >
          <i class="iconfont icon-jiantou"></i>
        </button>
      </transition>
      <ul class="indicator-list">
        <li
          v-for="(item,index) in this.swiperItem"
          :key="index"
          @click="clickChangeIndicator(index)"
          @mouseenter="hoverChangeIndicator(index)"
        >
          <button
            :class="[
              activeIndex===index?'is-active':''
            ]"
          ></button>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "lan-swiper",
      props : {
        //是否自动切换
        autoplay : {
          type : Boolean,
          default : false
        },
        //自动切换时长
        interval : {
          type: Number,
          default: 3000
        },
        //指示器触发方式
        trigger : {
          type : String,
          default : 'hover'
        },
        //轮播图高度
        height : String,
        initIndex : {
          type : Number,
          default : 0
        }
      },
      data () {
        return {
          swiperItem : [],
          activeIndex : 0,
          oldIndex : -1,
          showArrow : false
        }
      },
      watch : {
        activeIndex (val,oldVal) {
          this.oldIndex = oldVal
          this.resetPosition()
          this.$emit('change',val,oldVal)
        }
      },
      computed : {

      },
      methods : {
        clickChangeIndicator (i) {
          if (this.trigger !== 'click') return ;
          this.activeIndex = i
        },
        hoverChangeIndicator (i) {
          if (this.trigger !== 'hover') return ;
          this.activeIndex = i
        },
        next () {
          if (this.showArrow && this.autoplay) return ;
          this.activeIndex += 1
          if (this.activeIndex >= this.swiperItemLength()) {
            this.activeIndex = 0
          }
          this.resetPosition()
        },
        prev () {
          this.activeIndex -= 1
          if (this.activeIndex < 0) {
            this.activeIndex = this.swiperItemLength()-1
          }
          this.resetPosition()
        },
        updeItems () {
          this.swiperItem = this.$children
        },
        resetPosition () {
          this.swiperItem.forEach((child,index) => {child.swiperItemTranslate(this.activeIndex,index,this.oldIndex)})
        },
        swiperItemLength () {
          return this.swiperItem.length
        },
        pauseTimeer () {
          if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
          }
        }
      },
      mounted () {
        this.updeItems()
        this.resetPosition()
        if (this.initIndex < this.swiperItem.length && this.initIndex >= 0) {
          this.activeIndex = this.initIndex
        }
        if (this.autoplay) {
          this.timer = setInterval(this.next,this.interval)
        }
      },
      beforeDestroy () {
        this.pauseTimeer()
      }
    }
</script>

<style scoped>
  .lan-swiper{
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .prevbtn{
    top: 50%;
    left: 10px;
    opacity: 1;
    transform: translateY(-50%);
  }
  .nextbtn {
    top: 50%;
    right: 10px;
    opacity: 1;
    transform: translateY(-50%);
  }
  .prevbtn,.nextbtn{
    position: absolute;
    border: none;
    width: 36px;
    height: 36px;
    background-color: rgba(31, 45, 61, 0.11);
    border-radius: 50%;
    color: #fff;
    outline: none;
  }
  .prevbtn:hover {
    background-color: rgba(31, 45, 61, 0.23);
  }
  .nextbtn:hover {
    background-color: rgba(31, 45, 61, 0.23);
  }

  .btn-animating-prev-enter,.btn-animating-prev-leave-to{
    left: 0;
    opacity: 0;
  }
  .btn-animating-prev-enter-active,.btn-animating-prev-leave-active,.btn-animating-next-enter-active,.btn-animating-next-leave-active{
    transition: all .2s linear;
  }
  .btn-animating-prev-enter-to,.btn-animating-prev-leave{
    left: 10px;
    opacity: 1;
  }
  .btn-animating-next-enter,.btn-animating-next-leave-to{
    right: 0;
    opacity: 0;
  }
  .btn-animating-next-enter-to,.btn-animating-next-leave{
    right: 10px;
    opacity: 1;
  }
  .indicator-list{
    width: 100%;
    position: absolute;
    bottom: 10px;
    z-index: 10;
    display: flex;
    list-style: none;
    justify-content: center;
  }
  .indicator-list li {
    padding: 12px 4px;
    background-color: transparent;
    cursor: pointer;
  }
  .indicator-list li button{
    display: block;
    width: 30px;
    height: 2px;
    background-color: #fff;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all .3s linear;
    opacity: .48;
    outline: none;
  }
  .indicator-list li button.is-active {
    opacity: 1;
  }
</style>
