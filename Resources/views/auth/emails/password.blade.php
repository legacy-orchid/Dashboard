Click here to reset your password: <a
        href="{{ $link = route('dashboard.password.reset',$token).'?email='.urlencode($user->getEmailForPasswordReset()) }}"> {{ $link }} </a>
