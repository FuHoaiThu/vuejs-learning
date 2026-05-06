import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'

library.add(faMagnifyingGlass, faAngleDown, faMoon, faPlus, faPenToSquare, faTrashCan)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
