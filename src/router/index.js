import { createRouter, createWebHistory } from 'vue-router'

const routes = function () {
  let all = []
  // const requireRouter = require.context('../views/', true, /index.js/)
  const requireRouter = import.meta.globEager('../views/*/index.js')
	console.log(requireRouter)
	window.requireRouter = requireRouter
  /**
   * 读取当前路径子文件夹所有index.js
   */
  Object.keys(requireRouter).forEach(fileName => {
    const requireConfig = requireRouter[fileName]
    const routerArr = requireConfig.default || requireConfig
    all = [...all, ...routerArr]
  })
  return all
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes()
})

export default router
