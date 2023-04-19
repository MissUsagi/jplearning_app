import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.component('base-card', BaseCard)
// app.use(router)

app.mount('#app')
