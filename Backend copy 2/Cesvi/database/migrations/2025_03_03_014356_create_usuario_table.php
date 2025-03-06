<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->id('id_usuario');
            $table->unsignedBigInteger('id_organizacion');
            $table->unsignedBigInteger('id_tipousuario');
            $table->string('nombre', 30);
            $table->string('apellido_paterno', 30);
            $table->string('apellido_materno', 30);
            $table->string('correo', 100);
            $table->string('password')->nullable(); // Añadido para autenticación
            $table->foreign('id_tipousuario')->references('id_tipousuario')->on('tipo_usuario');
            $table->foreign('id_organizacion')->references('id_organizacion')->on('organizacion');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuario');
    }
};