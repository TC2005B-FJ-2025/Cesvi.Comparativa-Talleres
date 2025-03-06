<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('intervalo_unidad_criterio_puntaje', function (Blueprint $table) {
            $table->unsignedBigInteger('id_organizacion');
            $table->string('id_intervalo', 2);
            $table->unsignedBigInteger('id_unidad');
            $table->unsignedBigInteger('id_criterio');
            $table->unsignedBigInteger('id_puntaje');
            $table->string('valor', 8);

            $table->foreign('id_organizacion')->references('id_organizacion')->on('organizacion');
            $table->foreign('id_intervalo')->references('id_intervalo')->on('intervalo');
            $table->foreign('id_unidad')->references('id_unidad')->on('tipo_unidad');
            $table->foreign('id_criterio')->references('id_criterio')->on('criterio');
            $table->foreign('id_puntaje')->references('id_puntaje')->on('puntaje');

            $table->primary(['id_organizacion', 'id_intervalo', 'id_unidad', 'id_criterio', 'id_puntaje']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('intervalo_unidad_criterio_puntaje');
    }
};