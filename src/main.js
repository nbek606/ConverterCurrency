import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/scss/main.scss'

createApp(App)
.use(store)
.use(router)
.mount('#app')

