<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistroSiniestro extends Model
{
    use HasFactory;

    protected $table = 'registro_siniestro';
    protected $primaryKey = 'id_siniestro';

    protected $fillable = [
        'id_organizacion',
        'id_taller',
        'numero_siniestro',
        'costo_total_siniestro',
        'costo_total_refacciones',
        'costo_total_mano_obra_reparacion',
        'otro_costos',
        'numero_total_refacciones',
        'numero_complementos',
        'dias_estadia',
        'mes_conclusion_siniestro',
        'anio_conclusion_siniestro',
        'vehiculo',
        'marca',
        'anio_modelo'
    ];

    public function organizacion()
    {
        return $this->belongsTo(Organizacion::class, 'id_organizacion');
    }

    public function taller()
    {
        return $this->belongsTo(Taller::class, 'id_taller');
    }
}