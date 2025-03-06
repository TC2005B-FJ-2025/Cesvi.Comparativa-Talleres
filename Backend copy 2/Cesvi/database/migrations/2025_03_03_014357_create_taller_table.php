<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('taller', function (Blueprint $table) {
            $table->id('id_taller');
            $table->unsignedBigInteger('id_tipo_taller');
            $table->unsignedBigInteger('id_ubicacion');
            $table->unsignedBigInteger('id_unidad');
            $table->string('nombre_comercial', 100);
            $table->boolean('taller_exclusivo');
            $table->float('calificacion_cesvi');
            $table->string('estatus_cesvi', 10);
            $table->string('numero_at', 10);
            $table->foreign('id_unidad')->references('id_unidad')->on('tipo_unidad');
            $table->foreign('id_tipo_taller')->references('id_tipo_taller')->on('tipo_taller');
            $table->foreign('id_ubicacion')->references('id_ubicacion')->on('ubicacion');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('taller');
    }
};