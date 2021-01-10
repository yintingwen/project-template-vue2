const requireContext = require.context('./', true, /index.js/)

requireContext.keys().forEach(item => {
  const pathList = item.split('/')
  if (pathList[2] === 'index.js') {
    requireContext(item)
  }
})
