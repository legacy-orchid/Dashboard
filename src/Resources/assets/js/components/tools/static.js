if (document.querySelector('#static-container')) {
    new Vue({
        el: '#static-container',
        data: {
            'routes': [],
            'baseUrl': '',
        },
        ready: function () {
            this.$http.get('/dashboard/static?json=true').then(function (response) {
                this.$set('routes', response.data.routes);
                this.$set('baseUrl', response.data.baseUrl);
                console.log(this);
            });
        },
        methods: {}
    });
}