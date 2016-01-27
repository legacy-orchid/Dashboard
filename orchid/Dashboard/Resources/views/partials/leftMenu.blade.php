@foreach($items as $key => $value)
    <li>
        <a href="{{$value['url']}}">
            <i class="fa fa-tachometer"></i>
            <span>{{$value['name']}}</span>
        </a>
    </li>
@endforeach
