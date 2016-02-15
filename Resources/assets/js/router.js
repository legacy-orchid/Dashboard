var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);
Vue.use(require('vue-resource'));


Vue.config.debug = true;

//Vue.http.options.root = '/api';
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('content');

var router = new VueRouter({
    history: true,
    root: 'app'
});

var router = new VueRouter();


router.map({
    '/settings': {
        component: require('./components/Settings.vue')
    }
});



var App = Vue.extend({});


router.start(App, '#app-content-body');