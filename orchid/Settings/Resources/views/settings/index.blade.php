@extends('admin')

@section('content')



    <div class="bg-light lter b-b wrapper-md">
        <h1 class="m-n font-thin h3">Системные параметры</h1>
        <small class="text-muted">Это переменные среды хранящиеся в базе данных</small>
    </div>



    <div class="wrapper-md">


        <div class="panel panel-default">
            <div class="panel-heading font-bold">Системные параметры</div>
            <div class="panel-body">
                <form class="form-horizontal" action="{{route('admin.settings.store')}}" method="post">

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Название сайта</label>

                        <div class="col-lg-10">
                            <input type="text" name="site_name" class="form-control"
                                   value="{{Settings::getValueSlug('site_name')}}">
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Краткое описание</label>

                        <div class="col-lg-10">
                            <input type="text" name="site_descriptions" class="form-control"
                                   value="{{Settings::getValueSlug('site_descriptions')}}">
                            <span class="help-block m-b-none">Объясните в нескольких словах, о чём этот сайт.</span>
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Адрес</label>

                        <div class="col-lg-10">
                            <input type="text" class="form-control" name="site_adress"
                                   value="{{Settings::getValueSlug('site_adress')}}">
                            <span class="help-block m-b-none">Физический или юридический адрес организации</span>
                        </div>
                    </div>


                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Телефон</label>

                        <div class="col-lg-10">
                            <input type="text" class="form-control" name="site_phone"
                                   value="{{Settings::getValueSlug('site_phone')}}">
                        </div>
                    </div>


                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Адрес e-mail</label>

                        <div class="col-lg-10">
                            <input type="email" class="form-control" name="site_email"
                                   value="{{Settings::getValueSlug('site_email')}}">
                            <span class="help-block m-b-none">Этот адрес используется в целях администрирования. Например, для уведомления о новых пользователях.</span>
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Членство</label>

                        <div class="col-lg-10">
                            <div class="checkbox">
                                <label class="i-checks">
                                    <input type="checkbox" value="1" name="site_register"><i></i> Любой может
                                    зарегистрироваться
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Роль нового пользователя</label>

                        <div class="col-lg-10">
                            <select ui-jq="chosen" class="chosen-select form-control" name="site_default_role">
                                <option value="">Без роли</option>
                                @foreach($Roles as $key => $value)
                                    <option @if(Settings::getValueSlug('site_default_role') == $key) selected
                                            @endif value="{{$key}}">{{$value}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Язык по умолчанию</label>

                        <div class="col-lg-10">
                            <select class="form-control" name="site_lang">
                                <option value="en">English</option>
                                <option value="ru">Russian</option>
                            </select>
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Количество записей отображаемых на страницах</label>

                        <div class="col-lg-10">
                            <input type="number" placeholder="10" class="form-control" name="site_items"
                                   value="{{Settings::getValueSlug('site_items')}}">
                        </div>
                    </div>


                    <div class="line line-dashed b-b line-lg"></div>


                    <div class="form-group text-center">
                        <div class="col-md-6">
                            {!! csrf_field() !!}
                            <input type="hidden" name="action" value="standard">
                            <button type="submit" class="btn btn-sm btn-info">Сохранить</button>
                        </div>


                        <div class="col-md-6">
                            <a href="{{route('admin.settings.create')}}" class="btn btn-sm btn-danger">Расширенный
                                режим</a>
                        </div>

                    </div>
                </form>
            </div>
        </div>


    </div>




@endsection
