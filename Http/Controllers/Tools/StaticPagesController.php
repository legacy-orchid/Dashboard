<?php

namespace Orchid\Dashboard\Http\Controllers\Tools;

use Config;
use Illuminate\Http\Request;
use Orchid;
use Orchid\Dashboard\Http\Controllers\Controller;
use SEO;

class StaticPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('dashboard::container.tools.static', [
            'routes' => SEO::staticGetRoute(),
            'baseUrl' => Config::get('app.url'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param string $url
     *
     * @return \Illuminate\Http\Response
     */
    public function show($url)
    {
        $url = base64_decode($url);
        $meta = SEO::where('route', $url)->first();
        return $meta->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $url
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $url)
    {
        $url = base64_decode($url);
        $meta = SEO::where('route', $url)->first();

        if (is_null($meta)) {
            $attr = $request->all();
            $attr['route'] = $url;
            $attr['url'] = $url;
            SEO::create($attr);
        } else {
            $attr = $request->all();
            $meta->fill($attr)->save();
        }
    }
}
