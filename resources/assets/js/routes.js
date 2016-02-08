var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>',
    components:{
        'loading-bar':VueLoadingBar
    },
    route: {
        activate: function (transition) {
            VueLoadingBar.progress(0,50);
            transition.next();
        },
        canDeactivate: function (transition) {
            transition.abort()
        }
    },
});



var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});



router.start(App, '#app-content-body');



// VueLoadingBar