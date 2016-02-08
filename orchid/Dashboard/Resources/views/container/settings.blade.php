@extends('dashboard::layouts.dashboard')

@section('content')



    <div class="bg-light lter b-b wrapper-md">
        <h1 class="m-n font-thin h3">Системные параметры (Расширенный режим)</h1>
        <small class="text-muted">Будьте осторожны при изменении</small>
    </div>



    <div class="wrapper-md" id="settings-container">


        <div class="panel panel-default">
            <div class="panel-heading font-bold">Системные параметры</div>


            <div class="panel-body">
                <form class="form-horizontal" action="" method="post">

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Название</label>

                        <div class="col-lg-10">
                            <input type="text" name="name" class="form-control">
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Slug</label>

                        <div class="col-lg-10">
                            <input type="text" name="slug" class="form-control">
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Значение</label>

                        <div class="col-lg-10">
                            <input type="text" name="value" class="form-control">
                        </div>
                    </div>


                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group text-center">
                        <div class="col-md-6">
                            {!! csrf_field() !!}
                            <button type="submit" class="btn btn-sm btn-info">Создать</button>
                        </div>


                        <div class="col-md-6">
                            <a href="" class="btn btn-sm btn-danger">Стандартный
                                режим</a>
                        </div>

                    </div>


                </form>
            </div>
        </div>


        <div class="panel panel-default">
            <div class="panel-heading font-bold">Системные параметры</div>


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

                <div class="table-responsive">
                    <table class="table table-striped b-t b-light">
                        <thead>
                        <tr>
                            <th>@sortablelink ('name','Имя')</th>
                            <th>@sortablelink ('slug','Slug')</th>
                            <th>@sortablelink ('updated_at','Последние изменение')</th>
                            <th>Управление</th>

                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($Settings as $setting)
                            <tr>
                                <td>{{ $setting->name }}</td>
                                <td>{{ $setting->slug }}</td>
                                <td>{{ $setting->updated_at }}</td>
                                <td>

                                    <div class="btn-group pull-right" role="group" aria-label="...">
                                        <a href="{{ route('admin.settings.edit',$setting->slug) }}"
                                           class="btn btn-default"><span class="fa fa-edit"></span> </a>
                                        <a href="#" data-toggle="modal" data-target="#Modal-{{$setting->slug}}"
                                           class="btn btn-danger">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </div>


                                </td>
                            </tr>


                        @endforeach
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
                                <input type="hidden" name="_token" value="{{csrf_token()}}">
                            </form>
                        </div>
                    </div>
                </div>
            </div>




            <footer class="panel-footer">
                <div class="row">
                    <div class="col-sm-offset-4 col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm">Всего
                            элементов: {!! $Settings->count() !!}</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        {!! $Settings->render() !!}
                    </div>
                </div>
            </footer>

        </div>


    </div>

<script>
    var Vue = require('vue');
    Vue.use(require('vue-resource'));

    new Vue({
        el: '#settings-container',
        data: {
            current: {
                slug : '',
                value: '',
            }
        },
        methods: {
            createSettings: function()
            {
                // GET request
                this.$http({url: '/dashboard/settings', method: 'post'}).then(function (response) {
                    // success callback
                }, function (response) {
                    // error callback
                });
            }
        }
    })


</script>






@endsection
