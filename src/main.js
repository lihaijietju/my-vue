/**
 * Created by lihaijie on 17/3/16.
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});

