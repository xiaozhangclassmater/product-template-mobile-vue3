import '@/assets/styles/base.less';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import routerInstance from './router';
var testA = 0
const piniaInstance = createPinia()
const appInstance = createApp(App)
appInstance
.use(piniaInstance)
.use(routerInstance)
.mount('#app')
