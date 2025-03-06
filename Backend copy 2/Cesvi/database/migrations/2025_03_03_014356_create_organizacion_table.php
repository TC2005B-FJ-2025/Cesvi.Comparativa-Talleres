<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        if (!Schema::hasTable('ubicacion')) {
            throw new \Exception('La tabla ubicacion no existe. Debes ejecutar primero la migración que la crea.');
        }

        Schema::create('organizacion', function (Blueprint $table) {
            $table->id('id_organizacion');
            $table->string('nombre_organizacion', 200);
            $table->string('nombre_asesor', 100);
            $table->string('rfc', 100);
            $table->string('numero_fiscal', 100);
            $table->string('correo', 100);
            $table->string('telefono', 20);
            $table->unsignedBigInteger('id_ubicacion');
            $table->foreign('id_ubicacion')->references('id_ubicacion')->on('ubicacion');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('organizacion');
    }
};