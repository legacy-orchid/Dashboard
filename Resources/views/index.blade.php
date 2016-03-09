@extends('dashboard::layouts.dashboard')

@section('content')


    <div>
        <a href="#/">
            Ссылка 1
        </a>
    </div>
    <div>
        <a href="#/link2">
            Ссылка 2
        </a>
    </div>
    <div class="view-animate"  ng-view></div>


@stop
