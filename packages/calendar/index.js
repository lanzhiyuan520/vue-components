import LanCalendar from './src/lan-calendar'

LanCalendar.install = Vue => {
  Vue.component(LanCalendar.name,LanCalendar)
}

export default LanCalendar
