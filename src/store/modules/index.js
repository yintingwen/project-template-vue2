const requireContext = require.context('.', false, /\.js$/)

const modules = {}

requireContext.keys().forEach(item => {
  if (item === './index.js') return
  const moduleName = item.slice(2, -3)
  modules[moduleName] = requireContext(item).default
})

export default modules
