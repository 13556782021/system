import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/bootstrap.css'

import router from "./router/"

const app = createApp(App)
    app.use(router)

app.mount('#app')
