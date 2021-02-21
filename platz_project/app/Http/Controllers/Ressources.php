<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ressource;

class Ressources extends Controller
{
    public function index() {
      return response()->json(Ressource::all());
    }
}
