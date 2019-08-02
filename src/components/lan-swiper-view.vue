<template>
    <div>
      <div style="width: 820px;margin: 10px auto;">
        <p>默认</p>
        <lan-swiper>
          <lan-swiper-item v-for="(item,index) in swiper" :key="index">
            <div class="test" :style="{background:item.bgc}">{{item.title}}</div>
          </lan-swiper-item>
        </lan-swiper>
      </div>
      <div style="width: 820px;margin: 10px auto;">
        <p>click触发指示器</p>
        <lan-swiper trigger="click">
          <lan-swiper-item v-for="(item,index) in swiper" :key="index">
            <div class="test" :style="{background:item.bgc}">{{item.title}}</div>
          </lan-swiper-item>
        </lan-swiper>
      </div>
      <div style="width: 820px;margin: 10px auto;">
        <p>自动轮播</p>
        <p>autoplay:boolean(开启) 默认：false</p>
        <lan-swiper autoplay>
          <lan-swiper-item v-for="(item,index) in swiper" :key="index">
            <div class="test" :style="{background:item.bgc}">{{item.title}}</div>
          </lan-swiper-item>
        </lan-swiper>
      </div>
      <div style="width: 820px;margin: 10px auto;">
        <p>自动轮播</p>
        <p>interval:轮播时间(毫秒) 默认：3000</p>
        <lan-swiper  autoplay :interval="1000">
          <lan-swiper-item v-for="(item,index) in swiper" :key="index">
            <div class="test" :style="{background:item.bgc}">{{item.title}}</div>
          </lan-swiper-item>
        </lan-swiper>
      </div>
      <div style="width: 820px;margin: 10px auto;">
        <p>自动轮播</p>
        <p>事件:change(当前选中的index) </p>
        <p>当前下标：{{i}}</p>
        <lan-swiper @change="test" autoplay >
          <lan-swiper-item v-for="(item,index) in swiper" :key="index">
            <div class="test" :style="{background:item.bgc}">{{item.title}}</div>
          </lan-swiper-item>
        </lan-swiper>
      </div>
    </div>

</template>

<script>
    export default {
        name: "lan-swiper-view",
        data () {
          return {
            swiper : [
              {
                title : 1,
                bgc : 'greenyellow'
              },
              {
                title : 2,
                bgc : 'yellowgreen'
              },
              {
                title : 3,
                bgc : 'aquamarine'
              },
              {
                title : 4,
                bgc : 'cadetblue'
              }
            ],
            i : 0
          }
        },
      methods : {
        test (i) {
          this.i = i
        }
      }
    }
</script>

<style scoped>
  .test {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
