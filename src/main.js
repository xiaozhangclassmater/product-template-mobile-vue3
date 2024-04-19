import '@/assets/styles/base.less';
import { createPinia } from 'pinia';
import Vant from 'vant';
import { createApp } from 'vue';
import App from './App.vue';
import routerInstance from './router';
const piniaInstance = createPinia()
const appInstance = createApp(App)
appInstance
    .use(piniaInstance)
    .use(routerInstance)
    .use(Vant)
    .mount('#app')
