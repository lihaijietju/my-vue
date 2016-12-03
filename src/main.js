import Vue from 'vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router/router'
import store from './store/store';

Vue.use(ElementUI);

new Vue({
    router,
    store
}).$mount('#app')
