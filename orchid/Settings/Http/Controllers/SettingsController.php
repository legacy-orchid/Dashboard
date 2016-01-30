<?php

    namespace Orchid\Settings\Http\Controllers;

    use Flash;
    use Illuminate\Http\Request;
    use Orchid\Settings\Http\Controllers\Controller;
    use Orchid\Settings\Requests;
    use Orchid\Settings\Http\Requests\SettingsRequest;
    use Orchid\Access\Models\Roles;
    use Orchid\Settings\Models\Setting;

    class SettingsController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            return view('admin.settings.index', [
                'Roles' => Roles::lists('name', 'id'),
            ]);
        }

        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create(Request $request)
        {
            return view('admin.settings.create', [
                'Settings' => Setting::search($request->search)->sortable()->select('name', 'slug',
                    'updated_at')->paginate(15),
            ]);
        }

        /**
         * Store a newly created resource in storage.
         *
         * @param  SettingsRequest $request
         *
         * @return \Illuminate\Http\Response
         */
        public function store(SettingsRequest $request)
        {
            if (isset($request->action)) {
                $action = $request->action;
                $this->$action($request);
            } else {
                Setting::create($request->all());
                Flash::success('Вы успешно создали параметры настройки.');
            }

            return redirect()->back();
        }

        /**
         * Display the specified resource.
         *
         * @param  Setting $setting
         *
         * @return \Illuminate\Http\Response
         */
        public function show(Setting $setting)
        {
            dd($setting);
        }

        /**
         * Show the form for editing the specified resource.
         *
         * @param  Setting $setting
         *
         * @return \Illuminate\Http\Response
         */
        public function edit(Setting $setting)
        {
            return view('admin.settings.edit', [
                'Setting' => $setting,
            ]);
        }

        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request $request
         * @param  Setting                  $setting
         *
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, Setting $setting)
        {
            $setting->fill($request->all())->save();
            Flash::success('Вы успешно изменили настройку.');

            return redirect()->route('admin.settings.create');
        }

        /**
         * Remove the specified resource from storage.
         *
         * @param  Setting $setting
         *
         * @return \Illuminate\Http\Response
         */
        public function destroy(Setting $setting)
        {
            $setting->delete();
            Flash::success('Вы успешно удалили настройку.');

            return redirect()->back();
        }


        /**
         * Обработчик стандартного редактирования параметров
         *
         * @param SettingsRequest $request
         */
        protected function standard(SettingsRequest $request)
        {
            $data = $request->except('_token', 'action');
            foreach ($data as $key => $value) {
                Setting::firstOrCreate([
                    'slug' => $key,
                ])
                    ->fill([
                        'name'  => $key,
                        'slug'  => $key,
                        'value' => $value,
                    ])
                    ->save();
            }
            Flash::success('Вы успешно изменили настройки.');
        }


    }