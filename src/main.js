import { createApp } from 'vue'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// require('@/assets/css/bootstrap-darkly.css')
// require('@/assets/css/bootstrap-flatly.css')
// import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router'
// import 'jquery/src/jquery.js'

createApp(App).use(router).mount('#app')
