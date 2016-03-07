@extends('dashboard::layouts.dashboard')

@section('content')



    <div class="bg-light lter b-b wrapper-md">
        <h1 class="m-n font-thin h3">Доменые адреса</h1>
        <small class="text-muted">Поддерживаемые системы адреса веб-сайтов</small>
    </div>

    <div class="wrapper-md" id="domains-container">

        <div class="panel panel-default">
            <div class="panel-heading font-bold">Доменые адреса</div>


            <div class="row wrapper">
                <div class="col-sm-5 m-b-xs">
                    <select class="input-sm form-control w-sm inline v-middle">
                        <option value="delete">{{trans('dashboard::common.Delete')}}</option>
                    </select>
                    <button class="btn btn-sm btn-default">{{trans('dashboard::common.Apply')}}</button>
                </div>
                <div class="col-sm-4">
                    <button class="btn m-b-xs btn-sm btn-default btn-addon" data-toggle="modal" data-target="#domains-modal"><i
                                class="fa fa-plus"></i>{{trans('dashboard::common.Create')}}</button>
                </div>
                <div class="col-sm-3">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="input-sm form-control" name="search"
                                   placeholder="{{trans('dashboard::common.Find')}} ...">
          <span class="input-group-btn">
            <button class="btn btn-sm btn-default" type="submit">{{trans('dashboard::common.Find')}}</button>
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
                            <th>@sortablelink ('id','#')</th>
                            <th>@sortablelink ('url','Адрес')</th>
                            <th>@sortablelink ('created_at',trans('dashboard::common.Created'))</th>
                            <th>@sortablelink ('updated_at',trans('dashboard::common.Last edit'))</th>
                            <th>{{trans('dashboard::common.Manage')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($Domains as $domain)
                            <tr>
                                <td>
                                    <label class="i-checks m-b-none">
                                        <input type="checkbox"
                                               name="Domain[{{ $setting->id }}]"><i></i> {{ $setting->id }}
                                    </label>
                                </td>
                                <td>{{ $domain->url }}</td>
                                <td>{{ $domain->created_at }}</td>
                                <td>{{ $domain->updated_at }}</td>
                                <td>

                                    <div class="btn-group pull-right btn-group-sm" role="group" aria-label="...">
                                        <a href="{{ route('dashboard.domains.edit',$domain->id) }}"
                                           class="btn btn-default"><span class="fa fa-edit"></span> </a>
                                        <a href="#" data-toggle="modal" data-target="#Modal-{{$domain->id}}"
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

            <footer class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 hidden-xs">
                        <select class="input-sm form-control w-sm inline v-middle">
                            <option value="delete">{{trans('dashboard::common.Delete')}}</option>
                        </select>
                        <button class="btn btn-sm btn-default">{{trans('dashboard::common.Apply')}}</button>
                    </div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm">{{trans('dashboard::common.show')}} {{$Domains->total()}}
                            -{{$Domains->perPage()}} {{trans('dashboard::common.of')}} {!! $Domains->count() !!} {{trans('dashboard::common.elements')}}</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        {!! $Domains->render() !!}
                    </div>
                </div>
            </footer>

        </div>


    </div>







    <!-- Modal -->
    <div class="modal fade slide-up disable-scroll" id="domains-modal" tabindex="-1" role="dialog" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content-wrapper">
                <div class="modal-content">
                    <div class="modal-header clearfix text-left">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fa fa-times"></i></span>
                        </button>
                        <h5>Домен</h5>
                        <p class="p-b-10">Системная универсальная опция для хранения различных значений</p>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal" action="#" method="post">

                            <div class="form-group">
                                <label class="col-lg-2 control-label">Адрес</label>
                                <div class="col-lg-10">
                                    <input type="text" name="url" class="form-control">
                                </div>
                            </div>

                            <div class="line line-dashed b-b line-lg"></div>

                            <div class="form-group">
                                <label class="col-lg-2 control-label">Префикс</label>

                                <div class="col-lg-10">
                                    <input type="text" name="prefix" class="form-control">
                                </div>
                            </div>

                            <div class="line line-dashed b-b line-lg"></div>

                            <div class="row">
                                <div class="col-md-offset-8 col-sm-4 m-t-10 sm-m-t-10">
                                    <button type="button" class="btn btn-primary btn-addon btn-block m-t-5">
                                        <i class="fa fa-plus"></i>
                                        Создать
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>


@endsection

