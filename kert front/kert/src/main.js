import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './Router/index.js'

const app = createApp(App)

app.use(createPinia())
new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')