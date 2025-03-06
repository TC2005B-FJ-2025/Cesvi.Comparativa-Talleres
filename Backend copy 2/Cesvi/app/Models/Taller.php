<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taller extends Model
{
    use HasFactory;

    protected $table = 'taller';
    protected $primaryKey = 'id_taller';

    protected $fillable = [
        'id_tipo_taller',
        'id_ubicacion',
        'id_unidad',
        'nombre_comercial',
        'taller_exclusivo',
        'calificacion_cesvi',
        'estatus_cesvi',
        'numero_at'
    ];

    public function tipoTaller()
    {
        return $this->belongsTo(TipoTaller::class, 'id_tipo_taller');
    }

    public function ubicacion()
    {
        return $this->belongsTo(Ubicacion::class, 'id_ubicacion');
    }

    public function tipoUnidad()
    {
        return $this->belongsTo(TipoUnidad::class, 'id_unidad');
    }

    public function registrosSiniestro()
    {
        return $this->hasMany(RegistroSiniestro::class, 'id_taller');
    }
}