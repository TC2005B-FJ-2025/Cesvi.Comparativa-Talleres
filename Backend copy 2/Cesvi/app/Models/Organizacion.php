<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organizacion extends Model
{
    use HasFactory;

    protected $table = 'organizacion';
    protected $primaryKey = 'id_organizacion';

    protected $fillable = [
        'nombre_organizacion',
        'nombre_asesor',
        'rfc',
        'numero_fiscal',
        'correo',
        'telefono',
        'id_ubicacion'
    ];

    public function ubicacion()
    {
        return $this->belongsTo(Ubicacion::class, 'id_ubicacion');
    }

    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'id_organizacion');
    }

    public function registrosSiniestro()
    {
        return $this->hasMany(RegistroSiniestro::class, 'id_organizacion');
    }

    public function intervalosUnidadCriterioPuntajes()
    {
        return $this->hasMany(IntervaloUnidadCriterioPuntaje::class, 'id_organizacion');
    }
}