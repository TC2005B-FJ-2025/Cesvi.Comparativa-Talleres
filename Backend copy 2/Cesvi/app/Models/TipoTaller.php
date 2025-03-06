<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoTaller extends Model
{
    use HasFactory;

    protected $table = 'tipo_taller';
    protected $primaryKey = 'id_tipo_taller';

    protected $fillable = [
        'tipo_taller'
    ];

    public function talleres()
    {
        return $this->hasMany(Taller::class, 'id_tipo_taller');
    }
}
