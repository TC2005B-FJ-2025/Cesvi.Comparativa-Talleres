<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntervaloUnidadCriterioPuntaje extends Model
{
    use HasFactory;

    protected $table = 'intervalo_unidad_criterio_puntaje';
    protected $primaryKey = null;
    public $incrementing = false;

    protected $fillable = [
        'id_organizacion',
        'id_intervalo',
        'id_unidad',
        'id_criterio',
        'id_puntaje',
        'valor'
    ];

    /**
     * Set the keys for a save update query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function setKeysForSaveQuery($query)
    {
        $query->where('id_organizacion', $this->getAttribute('id_organizacion'))
            ->where('id_intervalo', $this->getAttribute('id_intervalo'))
            ->where('id_unidad', $this->getAttribute('id_unidad'))
            ->where('id_criterio', $this->getAttribute('id_criterio'))
            ->where('id_puntaje', $this->getAttribute('id_puntaje'));

        return $query;
    }

    public function organizacion()
    {
        return $this->belongsTo(Organizacion::class, 'id_organizacion');
    }

    public function intervalo()
    {
        return $this->belongsTo(Intervalo::class, 'id_intervalo');
    }

    public function tipoUnidad()
    {
        return $this->belongsTo(TipoUnidad::class, 'id_unidad');
    }

    public function criterio()
    {
        return $this->belongsTo(Criterio::class, 'id_criterio');
    }

    public function puntaje()
    {
        return $this->belongsTo(Puntaje::class, 'id_puntaje');
    }
}