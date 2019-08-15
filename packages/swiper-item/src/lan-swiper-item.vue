<template>
    <div
      class="lan-swiper-item"
      ref="swiperItem"
      :style="itemStyle"
      :class="[
        {
          'is-animating' : animating
        }
      ]"
    >
      <div class="lan-swiper-item-box">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    export default {
      name: "lan-swiper-item",
      data () {
        return {
          parentWidth : null,
          translate : null,   //activeindex 0  index 4  820 = -1640
          animating : false
        }
      },
      computed : {
        itemStyle () {
          return {
            transform : `translateX(${this.translate}px)`
          }
        }
      },
      methods : {
        changeIndex (index,activeIndex,length) {
            if (activeIndex === 0 && index === length-1) {
              return -1
            }else if (activeIndex === length -1 && index === 0 ) {
              return length
            } else if (index < activeIndex - 1 && activeIndex - index >= length/2) {
              return length + 1
            } else if (index > activeIndex + 1 && index - activeIndex >= length/2) {
              return -2
            }
            return index
        },
        calcTranslate (index,activeIndex) {
          return (index-activeIndex) * this.parentWidth
        },
        swiperItemTranslate (activeIndex,index,oldIndex) {
          let length = this.$parent.swiperItemLength()
          this.parentWidth = this.$parent.$el.clientWidth
          this.animating = activeIndex === index || index === oldIndex
          index = length === 1 ? 0 : this.changeIndex(index,activeIndex,length)
          this.translate = this.calcTranslate(index,activeIndex)
        },

      },
      mounted () {

      }
    }
</script>

<style scoped>
  .lan-swiper-item{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .lan-swiper-item.is-animating{
    transition: all .4s linear;
  }
  .lan-swiper-item-box {
    height: 100%;
  }
</style>
