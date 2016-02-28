<template>

    <div class="bg-light lter b-b wrapper-md">
        <h1 class="m-n font-thin h3">Системные константы</h1>
        <small class="text-muted">Будьте осторожны при изменении</small>
    </div>

    <div class="wrapper-md" id="settings-container">

        <div class="panel panel-default">
            <div class="panel-heading font-bold">Системные константы</div>


            <div class="row wrapper">
                <div class="col-sm-5 m-b-xs">
                </div>
                <div class="col-sm-4">
                </div>
                <div class="col-sm-3">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="input-sm form-control" name="search" placeholder="Поиск ...">
          <span class="input-group-btn">
            <button class="btn btn-sm btn-default" type="submit">Найти!</button>
          </span>
                        </div>
                    </form>
                </div>
            </div>


            <div class="panel-body row">

                <pre>
                    {{ settings | json }}
                    {{ pagination | json }}
                    {{ settings.pagination | json }}
                </pre>


                <div class="table-responsive">
                    <table class="table table-striped b-t b-light">
                        <thead>
                        <tr>
                            <th>Ключ</th>
                            <th>Дата создания</th>
                            <th>Последние изменение</th>
                            <th>Управление</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="setting in settings">
                            <td>{{setting.key}}</td>
                            <th>{{setting.created_at}}</th>
                            <td>{{setting.updated_at}}</td>
                            <td>

                                <div class="btn-group pull-right" role="group" aria-label="...">
                                    <a href="route('admin.settings.edit',$setting->slug) "
                                       class="btn btn-default"><span class="fa fa-edit"></span> </a>
                                    <a href="#" data-toggle="modal" data-target="#Modal-$setting->slug"
                                       class="btn btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </div>


                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

            </div>


            <div class="modal fade" id="settings-modal" tabindex="-1" role="dialog"
                 aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Удалить
                                ?</h4>
                        </div>
                        <div class="modal-body">
                            Вы действительно хотите удалить
                        </div>
                        <div class="modal-footer">
                            <form action=""
                                  method="post">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Нет
                                </button>
                                <button type="submit" class="btn btn-danger">Да</button>
                                <input type="hidden" name="_method" value="DELETE">
                                <input type="hidden" name="_token" value="csrf_token()">
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <pagination :pagination="pagination" :callback="loadData" :offset="3"></pagination>



            <footer class="panel-footer">
                <div class="row">
                    <div class="col-sm-offset-4 col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm">Всего
                            элементов: </small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">

                    </div>
                </div>
            </footer>
        </div>
    </div>


</template>
<script>
    export default{
        data: function(){ return{
            settings: {},
            pagination: {
                total: 0, per_page: 12,
                from: 1, to: 0,
                current_page: 1
            }
        }},
        ready: function (){
          this.loadData();
        },
        methods: {
            loadData: function () {
                var data = {
                    paginate: this.pagination.per_page,
                    page: this.pagination.current_page,
                };

                this.$http.get('/dashboard/settings', data).then(function (response) {
                    this.$set('settings', response.data.data);
                    this.$set('pagination', response.data.pagination);
                }, function(error) {
                    alert('Error load');
                });
            }
        },
        components: {
            pagination: require('../modules/pagination.js')
        }
    }
</script>