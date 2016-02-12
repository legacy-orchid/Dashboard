var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);


var router = new VueRouter();

import Test from './components/Test.js';


router.map({
    '/about': {
        component: Test
    }
});



var App = Vue.extend({});


router.start(App, '#app-content-body');