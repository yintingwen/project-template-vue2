const requireContext = require.context('./', false, /\.js$/)

requireContext.keys().forEach(item => {
  if (item === './index.js') return
  requireContext(item)
})
