@extends('admin')

@section('content')



    <div class="bg-light lter b-b wrapper-md">
        <h1 class="m-n font-thin h3">Редактирование системного параметра {{$Setting->slug}}</h1>
        <small class="text-muted">Будьте осторожны при изменении</small>
    </div>



    <div class="wrapper-md">


        <div class="panel panel-default">
            <div class="panel-heading font-bold">Редактирование системного параметра с именем {{$Setting->name}}</div>
            <div class="panel-body">
                <form class="form-horizontal" action="{{route('admin.settings.update',$Setting->slug)}}" method="post">

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Название</label>

                        <div class="col-lg-10">
                            <input type="text" name="name" class="form-control" value="{{$Setting->name}}">
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Slug</label>

                        <div class="col-lg-10">
                            <input type="text" name="slug" class="form-control" value="{{$Setting->slug}}">
                            <span class="help-block m-b-none">Будьте осторожны при изменении данного значения</span>
                        </div>
                    </div>

                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group">
                        <label class="col-lg-2 control-label">Значение</label>

                        <div class="col-lg-10">
                            <textarea name="value" class="form-control" rows="10">{{$Setting->value}}</textarea>
                            <span class="help-block m-b-none">Будьте осторожны при изменении данного значения</span>
                        </div>
                    </div>


                    <div class="line line-dashed b-b line-lg"></div>

                    <div class="form-group text-center">
                        <div class="col-md-6">
                            {!! csrf_field() !!}
                            <input type="hidden" name="_method" value="PUT">
                            <button type="submit" class="btn btn-sm btn-info">Изменить</button>
                        </div>


                        <div class="col-md-6">
                            <a href="{{URL::previous()}}" class="btn btn-sm btn-danger">Назад</a>
                        </div>

                    </div>


                </form>
            </div>
        </div>


    </div>




@endsection
