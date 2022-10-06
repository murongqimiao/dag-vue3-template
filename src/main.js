import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './views/store'
import ElementPlus from 'element-plus'
import './assets/main.css'
import DAGBoard from './components/plugin/index'

const app = createApp(App)

app.use(router)

app.use(store)

app.use(ElementPlus)

app.use(DAGBoard)

app.mount('#app')
