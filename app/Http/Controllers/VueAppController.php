<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class VueAppController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        // Session::flush();
        // Auth::logout();

        $user = VueAppController::getUserInfo();

        return view('app')->with([
          'user' => $user
        ]);
    }

    public function getUserInfo()
    {
        $out = false;

        $user = Auth::user();

        if ($user) {
          $out = [
            'name' => $user->name,
            'email' => $user->email,
          ];
        }

        return $out;
    }
}
