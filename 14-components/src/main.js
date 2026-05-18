import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)

app.use(router)
app.component('GlobalComponent', GlobalComponent)

app.mount('#app')
