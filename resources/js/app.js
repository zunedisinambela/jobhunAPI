/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VModal from 'vue-js-modal'
import routes from './routes.js'
import VueRouter from 'vue-router'
import Vue from 'vue'

require('./bootstrap');

window.Vue = require('vue');
Vue.component('pagination', require('laravel-vue-pagination'))
Vue.use(VueRouter)
const router = new VueRouter({
    routes: routes
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Partial
Vue.component('topbar-component', require('./components/partial/topbar.vue').default);
Vue.component('sidebar-component', require('./components/partial/sidebar.vue').default);
Vue.component('footer-component', require('./components/partial/footer.vue').default);


//Content
// Vue.component('content-component', require('./components/content.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    // quickMenu,
    el: '#app'
});
