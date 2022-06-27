import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入动画插件
import animated from '@/plugins/jsPlugins/animated'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(animated)
app.mount('#app')
