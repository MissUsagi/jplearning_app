import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseRadioBtn from './components/UI/BaseRadioBtn.vue'
import BaseInput from './components/UI/BaseInput.vue'
import BaseTextarea from './components/UI/BaseTextarea.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-radio-btn', BaseRadioBtn)
app.component('base-input', BaseInput)
app.component('base-textarea', BaseTextarea)
// app.use(router)

app.mount('#app')
