<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Intervalo extends Model
{
    use HasFactory;

    protected $table = 'intervalo';
    protected $primaryKey = 'id_intervalo';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'id_intervalo',
        'costo_por_siniestro',
        'volumen_produccion_bajo',
        'volumen_produccion_alto'
    ];

    public function intervalosUnidadCriterioPuntajes()
    {
        return $this->hasMany(IntervaloUnidadCriterioPuntaje::class, 'id_intervalo');
    }
}