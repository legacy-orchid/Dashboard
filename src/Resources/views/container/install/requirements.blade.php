@extends('dashboard::layouts.install')

@section('title', trans('messages.requirements.title'))
@section('container')

    <ul class="list">
        @foreach($requirements['requirements'] as $extention => $enabled)
            <li class="list__item @if($enabled) success @else error @endif">{{ $extention }}</li>
        @endforeach
    </ul>

    @if(!isset($requirements['errors']))
        <div class="buttons">
            <a class="button" href="{{ route('Dashboard::permissions') }}">
                {{ trans('messages.next') }}
            </a>
        </div>
    @endif

@stop