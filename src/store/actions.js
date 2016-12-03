import Vue from 'vue';
import API from './API';
import VueResource from 'vue-resource';

Vue.use(VueResource);
export default {
    increment(context) {
        context.commit('increment');
    }
}
