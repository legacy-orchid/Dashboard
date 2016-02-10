var Foo = Vue.extend({
    template: '<h1>{{title}}</h1>',
    el: '#app',
    data: {
        title: 'Изучаем Vue.js!',
        todos: []
    },
    methods: {
        addTodo: function () {
            var text = this.newTodo.trim();
            if (text) {
                this.todos.push({text: text, status: false});
                this.newTodo = ''
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        },
        finishTodo: function (index) {
            alert(index);
        }
    },
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>',
    components:{
        'loading-bar':VueLoadingBar
    }
});


var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: Foo
    },
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});



router.start(App, '#app-content-body');