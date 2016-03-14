<?php

namespace Orchid\Dashboard\Http\Controllers\Systems;

use Illuminate\Http\Request;
use Orchid\Dashboard\Http\Controllers\Controller;
use Orchid\Dashboard\Http\Requests\UsersRequests;
use Orchid\Dashboard\Models\User;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return User
     */
    public function index(Request $request)
    {
        $Users = User::search($request->search)->sortable()->paginate(15);
        return view('dashboard::container.systems.users', ['Users' => $Users]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UsersRequests $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(UsersRequests $request)
    {
        User::create($request);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     *
     * @return User
     */
    public function show(User $user)
    {
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UsersRequests $request
     * @param User          $user
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UsersRequests $request, User $user)
    {
        $user->fill($request)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
    }
}
