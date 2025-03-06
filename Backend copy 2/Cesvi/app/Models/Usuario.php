<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuario';
    protected $primaryKey = 'id_usuario';

    protected $fillable = [
        'id_organizacion',
        'id_tipousuario',
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        'correo',
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function organizacion()
    {
        return $this->belongsTo(Organizacion::class, 'id_organizacion');
    }

    public function tipoUsuario()
    {
        return $this->belongsTo(TipoUsuario::class, 'id_tipousuario');
    }

    public function logOperaciones()
    {
        return $this->hasMany(LogOperacion::class, 'id_usuario');
    }
}