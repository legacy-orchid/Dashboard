<?php

    namespace Orchid\Settings\Http\Requests\Admin;

    use Orchid\Settings\Http\Requests\Request;

    class SettingsRequest extends Request
    {
        /**
         * Determine if the user is authorized to make this request.
         *
         * @return bool
         */
        public function authorize()
        {
            return true;
        }

        /**
         * Get the validation rules that apply to the request.
         *
         * @return array
         */
        public function rules()
        {
            return [
                'site_name'         => 'max:255',
                'site_descriptions' => 'max:255',
                'site_adress'       => 'max:255',
                'site_phone'        => 'max:255',
                'site_email'        => 'email|max:255',
                'site_lang'         => 'max:255',
                'site_items'        => 'integer|max:50',
                'site_register'     => 'boolean',
            ];
        }
    }