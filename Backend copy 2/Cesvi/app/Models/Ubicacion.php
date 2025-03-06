<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ubicacion extends Model
{
    use HasFactory;

    protected $table = 'ubicacion';
    protected $primaryKey = 'id_ubicacion';

    protected $fillable = [
        'estado',
        'municipio',
        'zona',
        'cp'
    ];

    public function organizaciones()
    {
        return $this->hasMany(Organizacion::class, 'id_ubicacion');
    }

    public function talleres()
    {
        return $this->hasMany(Taller::class, 'id_ubicacion');
    }
}