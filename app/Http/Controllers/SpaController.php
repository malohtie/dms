<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    /**
     * Invoke view
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function __invoke()
    {
        return view('spa');
    }
}
