import lanProgress from './src/lan-progress'

lanProgress.install = Vue => {
  Vue.component(lanProgress.name,lanProgress)
}

export default lanProgress
