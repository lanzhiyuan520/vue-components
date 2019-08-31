<template>
    <div
      class="lan-calendar"
    >
      <div
        class="lan-calendar-header"
      >
        <div class="lan-calendar-title">{{getCurrentDate}}</div>
        <div class="lan-calendar-button-group">
          <lan-button-group>
            <lan-button size="small" @click="prevMonth">上个月</lan-button>
            <lan-button size="small" @click="today">今天</lan-button>
            <lan-button size="small" @click="nextMonth">下个月</lan-button>
          </lan-button-group>
        </div>
      </div>
      <div
        class="lan-calendar-body"
      >
        <table
          class="lan-calendar-table"
          cellpadding="0"
          cellspacing="0"
        >
          <thead>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
            <th>日</th>
          </thead>
          <tbody>
            <tr
              v-for="(row_item,row_index) in this.dateList"
              :key="row_index"
              v-if="row_index < 6"
            >
              <td
                v-for="(item,index) in row_item"
                :key="index"
                :class="[
                   {
                      'not-current-month':month!==item.month,
                      'is-today':currentDate.year===item.year && currentDate.month===item.month && currentDate.day===item.day,
                      'is-selected':item.year+'-'+item.month+'-'+item.day===activeDate
                   }
                 ]"
                @click="changeSelectedDate(item)"
              >
                <div class="lan-calendar-day">
                  <span>{{item.day}}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
      name: "lan-calendar",
      data () {
        return {
          year : '',
          month : '',
          day : '',
          week : '',
          dateList : [],
          recordDate : new Date(),
          activeDate : null,
          currentDate : {}
        }
      },
      computed : {
        getCurrentDate () {
          return `${this.year} 年 ${this.month} 月`
        }
      },
      methods : {
        init () {
          this.getDate()
          this.getMonthDay()
        },
        getDate () {
          let date = new Date()
          this.year = date.getFullYear()
          this.month = date.getMonth()+1
          this.day = date.getDate()
          this.weak = date.getDay()
          this.activeDate = `${this.year}-${this.month}-${this.day}`
          this.currentDate = {
            year : date.getFullYear(),
            month : date.getMonth()+1,
            day : date.getDate()
          }
        },
        getCurrentMonthFirstDayWeek () {
          return new Date(this.year,this.month-1,1).getDay()
        },
        getCurrentMonthLastDayWeek () {
          return new Date(this.year,this.month,0).getDay()
        },
        getMonthDay () {
          this.dateList = []
          let index = 0;
          let dayMs = 24 * 60 * 60 * 1000;
          let firstDayWeek = this.getCurrentMonthFirstDayWeek()
          let lastDay = this.getCurrentMonthLastDayWeek()
          let prefixDay = firstDayWeek === 0 ? 6 : firstDayWeek - 1
          let suffixDay = lastDay === 0 ? 0 : 14 - lastDay
          let startTime = new Date(this.year,this.month-1,1).getTime() - (prefixDay * dayMs)
          let endTime = new Date(this.year,this.month,0).getTime() + (suffixDay * dayMs)
          while (startTime <= endTime) {
            index++
            this.recordDate.setTime(startTime)
            let year = this.recordDate.getFullYear()
            let month = this.recordDate.getMonth()+1
            let week = this.recordDate.getDay()
            let day = this.recordDate.getDate()
            if (index % 7 === 1 || index === 1) {
              this.dateList.push([])
            }
            this.dateList[this.dateList.length-1].push({
              year,month,day,week
            })
            startTime+=dayMs
          }
        },
        changeSelectedDate (item) {
          if (item.month === this.month) {
            this.activeDate = item.year+'-'+item.month+'-'+item.day
          }
        },
        nextMonth () {
          if (this.month === 12) {
            this.year+=1
            this.month = 1
          } else {
            this.month = this.month+1
          }
          this.getMonthDay()
          this.activeDate = `${this.year}-${this.month}-${1}`
        },
        prevMonth () {
          if (this.month === 1) {
            this.year-=1
            this.month = 12
          } else {
            this.month -= 1
          }
          this.getMonthDay()
          this.activeDate = `${this.year}-${this.month}-${1}`
        },
        today () { this.init() }
      },
      mounted () {
        this.init()
      }
    }
</script>

<style scoped lang="scss">
  .lan-calendar {
    &>.lan-calendar-header {
      display: flex;
      justify-content: space-between;
      padding: 12px 20px;
      border-bottom: 1px solid #ebeef5;
    }
    &>.lan-calendar-body {
      padding: 12px 20px 35px;
      &>.lan-calendar-table {
        width: 100%;
        border-collapse: separate;
        &>thead {
          th {
            padding: 12px 0;
            color: #606266;
            font-weight: 400;
          }
        }
        &>tbody {
          display: table-row-group;
          vertical-align: middle;
          border-color: inherit;
          tr:first-child td{
            border-top: 1px solid #ebeef5;
          }
          tr {
            display: table-row;
            vertical-align: inherit;
            border-color: inherit;
            td:first-child {
              border-left: 1px solid #ebeef5;
            }
            td.not-current-month {
              span {
                color: #c0c4cc;
              }
            }
            td.is-today {
              span {
                color: #1989fa;
              }
            }
            td.is-selected {
              background-color: #f2f8fe;
              span {
                color: #1989fa;
              }
            }
            td:hover {
              background-color: #f2f8fe;
            }
            td {
              display: table-cell;
              border-bottom: 1px solid #ebeef5;
              border-right: 1px solid #ebeef5;
              vertical-align: top;
              transition: background-color .2s ease;
              &>.lan-calendar-day {
                box-sizing: border-box;
                padding: 8px;
                height: 85px;
              }
            }
          }
        }
      }
    }
  }
</style>
