import * as Vue from 'vue'
import App from './App.vue'
import store from "./context/store"
import router from './routes'
import './index.css'

const app = Vue.createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
