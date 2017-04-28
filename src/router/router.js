import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
