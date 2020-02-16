/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('starwars-component', require('./components/StarwarsComponent.vue').default);

Vue.prototype.$bus= new Vue();

import router from './routes'

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fas from '@fortawesome/fontawesome-free-solid';
import fab from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(fas, fab);

const app = new Vue({
    el: '#app',
    router
});
