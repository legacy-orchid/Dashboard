@extends('dashboard::layouts.install')

@section('title', trans('messages.welcome.title'))
@section('container')
    <p class="paragraph">{{ trans('messages.welcome.message') }}</p>
    <div class="buttons">
        <a href="{{ route('Dashboard::environment') }}" class="button">{{ trans('messages.next') }}</a>
    </div>
@stop
