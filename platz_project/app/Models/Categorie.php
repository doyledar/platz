<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    /**
     * GETTER des ressources de la catégorie.
     */
    public function ressources() {
        return $this->hasMany('App\Models\Ressource');
    }
}
