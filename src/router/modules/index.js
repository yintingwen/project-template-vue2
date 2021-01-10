const requireContext = require.context('.', false, /\.js^/)

const moduleRoutes = requireContext.keys().map(item => {
  if (item === './index.js') return

  return requireContext(item).default
})

export default moduleRoutes
