<template>
  <div class="index" >
    <div class="left-nav-content">
      <ul
        class="left-nav-list"
      >
        <li
          class="left-nav-item"
          v-for="(item,index) in left_nav_list"
          :key="index"
          :class="[
            index === activeNav?'is-avtive':'',
          ]"
          @click="changeView(item,index)"
        >
          <a href="javascript:;">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      left_nav_list : [
        {
          title : '安装',
          path : '/components/install'
        },
        {
          title : 'button 按钮',
          path : '/components/lan-button'
        },
        {
          title : 'loading',
          path : '/components/lan-loading'
        },
        {
          title : 'toast',
          path : '/components/lan-toast'
        },
        {
          title : 'input 输入框',
          path : '/components/lan-input'
        },
        {
          title : 'swiper 轮播图',
          path : '/components/lan-swiper'
        },
        {
          title : 'radio 单选框',
          path : '/components/lan-radio'
        },
        {
          title : 'checkbox 多选框',
          path : '/components/lan-checkbox'
        },
        {
          title : 'switch 开关',
          path : '/components/lan-switch'
        },
        {
          title : 'rate 评分',
          path : '/components/lan-rate'
        },
        {
          title : 'calendar 日历',
          path : '/components/lan-calendar'
        },
        {
          title : 'progress 进度',
          path : '/components/lan-progress'
        },
        {
          title : 'icon 图标',
          path : '/components/lan-icon'
        }
      ],
      activeNav : 0
    }
  },
  components : {

  },
  methods : {
    changeView (item,index) {
      this.activeNav = index
      this.$router.push(item)
    }
  }
}
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
  }
  .index {
    display: flex;
    &>.left-nav-content {
      display: inline-block;
      width: 20%;
      &>.left-nav-list::-webkit-scrollbar {
        display: none;
      }
      &>.left-nav-list {
        position: fixed;
        width: 20%;
        top: 20px;
        bottom: 0;
        border-right: 1px solid #e8e8e8;
        overflow-y: auto;
        &>.left-nav-item.is-avtive {
          background-color: #e6f7ff;
          border-right: 3px solid #1890ff;
          a {
            color: #1890ff;;
          }
        }
        &>.left-nav-item:hover {
          a {
            color: #1890ff;
          }
        }
        &>.left-nav-item {
          box-sizing: border-box;
          padding-left: 80px;
          height: 40px;
          line-height: 40px;
          a {
            color: #314659;
            font-size: 14px;
          }
        }
      }
    }
    &>.main-content {
      box-sizing: border-box;
      display: inline-block;
      width: 80%;
      padding: 20px 170px 144px 64px;
    }
  }
</style>
