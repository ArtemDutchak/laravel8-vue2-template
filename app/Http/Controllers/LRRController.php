<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LRRController extends Controller
{
    public function postLogin()
    {
        $out = [
          'action' => 'login',
        ];
        return response()->json($out);
    }

    public function postRegister()
    {
        $out = [
          'action' => 'register',
        ];
        return response()->json($out);
    }

    public function postRestore()
    {
        $out = [
          'action' => 'restore',
        ];
        return response()->json($out);
    }
}
