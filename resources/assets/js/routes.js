var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>',
    route: {
        activate: function (transition) {
            alert(VueLoadingBar);
            console.log(VueLoadingBar);
            //VueLoadingBar.progress(0,50);
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