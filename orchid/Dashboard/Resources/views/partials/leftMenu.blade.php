@if(isset($childs) && $childs)

    <li class="dropdown">
        <a class="dropdown-toggle" type="button" id="dropdownMenu-{{$slug}}" data-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false">
            <span class="pull-right text-muted">
           <i class="fa fa-fw fa-angle-right text"></i>
                  </span>
            <i class="{{$icon}}"></i>
            <span>{{$label}}</span>
        </a>
        <ul class="dropdown-menu dropdown-full dropdown-lvl" aria-labelledby="dropdownMenu-{{$slug}}">
            {!! Dashboard::Menu()->render($slug) !!}
        </ul>
    </li>

@else




    @if(isset($groupname))
        <li class="dropdown-header">{{$groupname}}</li>
    @endif

    <li>
        <a href="{{$url}}">
            <i class="{{$icon}}"></i>
            <span>{{$label}}</span>
        </a>
    </li>

    @if(isset($divider) && $divider == true)
        <li class="divider"></li>
    @endif


@endif
