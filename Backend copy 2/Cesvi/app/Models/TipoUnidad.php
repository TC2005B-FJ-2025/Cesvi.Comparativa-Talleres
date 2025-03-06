<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoUnidad extends Model
{
    use HasFactory;

    protected $table = 'tipo_unidad';
    protected $primaryKey = 'id_unidad';

    protected $fillable = [
        'tipo_unidad'
    ];

    public function talleres()
    {
        return $this->hasMany(Taller::class, 'id_unidad');
    }

    public function intervalosUnidadCriterioPuntajes()
    {
        return $this->hasMany(IntervaloUnidadCriterioPuntaje::class, 'id_unidad');
    }
}
