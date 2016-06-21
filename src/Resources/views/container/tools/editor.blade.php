@extends('dashboard::layouts.dashboard')

@section('content')

    <div class="bg-light lter b-b wrapper-md">
        <h1 class="m-n font-thin h3">Cтатические страницы</h1>
        <small class="text-muted">Поисковая оптимизация для статических страниц</small>
    </div>

    <div class="wrapper-md">

        <div class="panel">
            <div class="panel-heading font-bold">Адреса</div>

            <div class="row wrapper">
                <div class="col-sm-12">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="input-sm form-control" v-model="query" name="query"
                                   placeholder="{{trans('dashboard::common.Find')}} ...">
          <span class="input-group-btn">
            <button class="btn btn-sm btn-default" type="submit">{{trans('dashboard::common.Find')}}</button>
          </span>
                        </div>
                    </form>
                </div>
            </div>


            <div class="panel-body">
                    <pre id="editor">function foo(items) {
                        var i;
                        for (i = 0; i &lt; items.length; i++) {
                            alert("Ace Rocks " + items[i]);
                        }
                    }</pre>
            </div>


        </div>


    </div>








@endsection

