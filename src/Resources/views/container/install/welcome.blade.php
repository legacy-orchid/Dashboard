@extends('dashboard::layouts.install')

@section('title', trans('install.welcome.title'))
@section('container')


    <div class="install-body container w-xxl padder-lg">
        <div class="panel panel-default wrapper-sm">
            <div class="panel-body">

                <div class="center w-xs">
                    <img src="/orchid/img/logo.svg" class="img-responsive">
                </div>
                <div class="page-header text-center">
                    <h1>Orchid</h1>
                </div>

                <p class="padder-v">{{ trans('install.welcome.message') }}</p>



                <form class="form">
                    <div class="form-group">
                    <label>Select language</label>
                        <select class="form-control">
                            <option value="en">English</option>
                        </select>
                    </div>
                </form>


                <div class="text-right">
                    <a href="{{ route('Dashboard::environment') }}" class="btn btn-primary">{{ trans('install.next') }}</a>
                </div>


            </div>
        </div>
    </div>


@stop
