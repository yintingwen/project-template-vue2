import Component from './Component'
import config from './config'

let isMounted = false
let component = null

/**
 * 挂在组件到body
 * @param {*} Vue
 */
function mount (Vue) {
  const VueInstance = Vue.extend(Component)
  component = new VueInstance()
  component.isTag = false
  component.hiddenTitle = true

  setConfirmMethod(config)

  const dom = component.$mount().$el
  document.body.appendChild(dom)
  isMounted = true
}

/**
 * 确认框函数本体
 * @param {*} options
 */
function customConfirm (options) {
  options.width = '480px'

  for (const [key, value] of Object.entries(options)) {
    component[key] = value
  }
  component.show()

  return new Promise((resolve, reject) => {
    component.resolve = resolve
    component.reject = reject
  })
}

/**
 * 根据配置文件添加定制方法
 * @param {*} config
 */
function setConfirmMethod (config) {
  for (const [key, value] of Object.entries(config)) {
    customConfirm[key] = (options) => {
      options = { ...value, ...options }
      return customConfirm(options)
    }
  }
}

customConfirm.install = (Vue) => {
  !isMounted && mount(Vue)
  Vue.component(Component.name, Component)
  Vue.prototype.$customConfirm = customConfirm
}

export default customConfirm
