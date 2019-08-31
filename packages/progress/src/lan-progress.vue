<template>
    <div
      class="lan-progress"
      :style="{width:isCircle?'':progressWidth+'px'}"
      :class="[
         'lan-progress--'+type
      ]"
    >
      <div
        class="lan-progress-bar"
        v-if="!isCircle"
      >
        <div
          class="lan-progress-bar__content"
          :style="{height: progressHeight+'px'}"
        >
          <div
            class="lan-progress-bar__inner"
            :style="getProgressStyle"
          >
            <div
              class="lan-progress-bar-inner__text"
              v-if="insideText"
            >{{percentage+'%'}}</div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="lan-progress-circle"
        :style="{width:width+'px',height:width+'px'}"
      >
        <svg viewBox="0 0 100 100">
          <path :d="trackPath"
                stroke="#e5e9f2"
                :stroke-width="relativeStrokeWidth"
                fill="none"
                class="el-progress-circle__track"
                :style="trailPathStyle"
          ></path>
          <path :d="trackPath"
                :stroke="progressBgc"
                fill="none"
                stroke-linecap="round"
                :stroke-width="percentage ? relativeStrokeWidth : 0"
                class="el-progress-circle__path"
                :style="circlePathStyle"
          ></path>
        </svg>
      </div>
      <div
        class="lan-progress-text"
        v-if="showText"
      >{{getProgressText}}</div>
    </div>
</template>

<script>
    export default {
      name: "lan-progress",
      props : {
        type : {
          type : String,
          default : 'line'
        },
        progressWidth : {
          type : Number,
          default : 350
        },
        progressHeight : {
          type : Number,
          default : 6
        },
        percentage : {
          type : [String,Number],
          default: 0
        },
        progressBgc : {
          type : String,
          default : '#409eff'
        },
        showText : {
          type : Boolean,
          default : true
        },
        progressText : {
          type : [String,Number]
        },
        insideText : {
          type : Boolean,
          default : false
        },
        width : {
          type : [String,Number],
          default : 126
        }
      },
      computed : {
        isCircle () {
          return this.type === 'circle' ? true:false
        },
        getProgressStyle () {
          return {
            width: this.percentage+'%',
            backgroundColor : this.progressBgc
          }
        },
        getProgressText () {
          return this.progressText?this.progressText:this.percentage+'%'
        },
        relativeStrokeWidth () {
          return (this.progressHeight / this.width * 100).toFixed(1);
        },
        radius () {
          if (this.type === 'circle') {
            return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
          } else {
            return 0;
          }
        },
        trackPath () {
          const radius = this.radius;
          const isDashboard = this.type === 'dashboard';
          return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${radius}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
          `;
        },
        rate() {
          return this.type === 'dashboard' ? 0.75 : 1;
        },
        perimeter () {
          return 2 * Math.PI * this.radius;
        },
        strokeDashoffset() {
          const offset = -1 * this.perimeter * (1 - this.rate) / 2;
          return `${offset}px`;
        },
        trailPathStyle () {
          return {
            strokeDasharray: `${(this.perimeter * this.rate)}px, ${this.perimeter}px`,
            strokeDashoffset: this.strokeDashoffset
          };
        },
        circlePathStyle () {
          return {
            strokeDasharray: `${this.perimeter * this.rate * (this.percentage / 100) }px, ${this.perimeter}px`,
            strokeDashoffset: this.strokeDashoffset,
            transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
          };
        }
      }
    }
</script>

<style scoped lang="less">
  .lan-progress.lan-progress--circle{
    display: inline-block;
    &>.lan-progress-text{
      font-size: 16px;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      transform: translateY(-50%);
    }
  }
  .lan-progress {
    position: relative;
    &>.lan-progress-bar {
      width: 100%;
      padding-right: 50px;
      display: inline-block;
      vertical-align: middle;
      margin-right: -55px;
      box-sizing: border-box;
      &>.lan-progress-bar__content{
        position: relative;
        border-radius: 100px;
        background-color: #ebeef5;
        overflow: hidden;
        vertical-align: middle;
        &>.lan-progress-bar__inner{
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          text-align: right;
          border-radius: 100px;
          line-height: 1;
          white-space: nowrap;
          transition: width .6s ease;
          &>.lan-progress-bar-inner__text{
            display: inline-block;
            vertical-align: middle;
            color: #fff;
            font-size: 12px;
            margin: 0 5px;
          }
        }
      }
    }
    &>.lan-progress-text{
      font-size: 14px;
      color: #606266;
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      line-height: 1;
    }
  }
</style>
