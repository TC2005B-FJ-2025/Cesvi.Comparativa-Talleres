<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogOperacion extends Model
{
    use HasFactory;

    protected $table = 'log_operaciones';
    protected $primaryKey = 'id_log';

    protected $fillable = [
        'fecha_hora',
        'IP',
        'id_usuario',
        'accion',
        'modulo'
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario');
    }
}
