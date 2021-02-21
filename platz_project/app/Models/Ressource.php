<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ressource extends Model
{
    use HasFactory;

    /**
     * GETTER de la catégorie à qui appartient cette ressource.
     */
    public function categorie(){
        return $this->belongsTo('App\Models\Categorie');
    }

    /**
     * GETTER du user à qui appartient cette ressource.
     */
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    /**
     * GETTER des commentaires de cette ressource.
     */
    public function commentaires() {
        return $this->hasMany('App\Models\Commentaire');
    }


}
