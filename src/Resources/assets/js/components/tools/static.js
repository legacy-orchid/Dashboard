if (document.querySelector('#static-container')) {
    new Vue({
        el: '#static-container',
        data: {
            'active': {
                audio: "",
                created_at: "",
                custom: null,
                description: "",
                id: "",
                image: "",
                keywords: "",
                robots: "",
                route: "",
                story_id: "",
                title: "Тестовая запись, проверка бинда",
                updated_at: "",
                url: "",
                video: "",
            },
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
        methods: {
            show: function (index) {
                this.$http.get('/dashboard/static/' + index).then(function (response) {
                    if(response.data)
                    {
                        this.$set('active', response.data);
                    }
                    $('#static-modal').modal("show");
                });
            },
            update: function() {
                this.$http.put('/dashboard/static',this.active).then(function (response) {
                    console.log(response);
                    $('#static-modal').modal("hide");
                });
            }
        }
    });
}