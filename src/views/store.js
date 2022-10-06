/*
* 此文件读取router下所有一级目录并自动注册index.js
*/
import Vuex from 'vuex'

const requireStore = import.meta.globEager('./*/vx.js')
console.log('=========requireStore===========')
console.log(requireStore)
const module = {}
Object.keys(requireStore).forEach(fileName => {
  module[fileName.split('/')[1]] = requireStore[fileName].default
})
let store = new Vuex.Store({
  modules: module
})

export default store;