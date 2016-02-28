<?php

namespace Orchid\Dashboard\Http\Requests;

use Illuminate\Support\Facades\Auth;

class UsersRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // Тут надо сделать большую универсальность, типо авторизация по телефону email или login
        return [
        ];
    }
}
