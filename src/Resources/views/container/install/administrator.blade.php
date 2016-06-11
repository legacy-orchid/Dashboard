@extends('dashboard::layouts.install')

@section('title', trans('install.environment.title'))
@section('container')

    <div class="install-body container w-xxl padder-lg">
        <div class="panel panel-default wrapper-sm">
            <div class="panel-body">

                @if (session('message'))
                    <p class="alert alert-danger">{{ session('message') }}</p>
                @endif


                <form class="form" method="post" action="{{ route('dashboard::administratorCreate') }}">
                    <div class="form-group">
                        <label>Name</label>
                       <input type="text" class="form-controll" placeholder="tabuna" name="name" required>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-controll" placeholder="tabuna@gmail.com" name="name" required>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-controll" placeholder="tabuna" name="name" required>
                        {!! csrf_field() !!}
                    </div>

                    <div class="form-group">
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary">
                                {{ trans('install.next') }}
                            </button>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    </div>

@stop
