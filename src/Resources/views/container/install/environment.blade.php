@extends('dashboard::layouts.install')

@section('title', trans('messages.environment.title'))
@section('container')
    @if (session('message'))
        <p class="alert">{{ session('message') }}</p>
    @endif
    <form method="post" action="{{ route('Dashboard::environmentSave') }}">
        <textarea class="textarea" name="envConfig">{{ $envConfig }}</textarea>
        {!! csrf_field() !!}
        <div class="buttons buttons--right">
            <button class="button button--light" type="submit">{{ trans('messages.environment.save') }}</button>
        </div>
    </form>
    @if(!isset($environment['errors']))
        <div class="buttons">
            <a class="button" href="{{ route('Dashboard::requirements') }}">
                {{ trans('messages.next') }}
            </a>
        </div>
    @endif
@stop