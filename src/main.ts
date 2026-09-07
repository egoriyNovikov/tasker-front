import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { useAuthStore } from './stores/auth'

import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

const authStore = useAuthStore(pinia)

await authStore.init()

app.mount('#app')
