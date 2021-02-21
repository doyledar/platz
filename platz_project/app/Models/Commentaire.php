<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commentaire extends Model
{
    use HasFactory;

    /**
     * GETTER du user à qui appartient ce commentaire.
     */
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    /**
     * GETTER de la ressource à qui appartient ce commentaire.
     */
    public function ressource(){
        return $this->belongsTo('App\Models\Ressource');
    }


}
