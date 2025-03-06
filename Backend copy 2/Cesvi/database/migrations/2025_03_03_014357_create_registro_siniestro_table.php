<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('registro_siniestro', function (Blueprint $table) {
            $table->id('id_siniestro');
            $table->unsignedBigInteger('id_organizacion');
            $table->unsignedBigInteger('id_taller');
            $table->integer('numero_siniestro');
            $table->integer('costo_total_siniestro');
            $table->integer('costo_total_refacciones');
            $table->integer('costo_total_mano_obra_reparacion');
            $table->integer('otro_costos');
            $table->integer('numero_total_refacciones');
            $table->integer('numero_complementos');
            $table->integer('dias_estadia');
            $table->integer('mes_conclusion_siniestro');
            $table->integer('anio_conclusion_siniestro');
            $table->string('vehiculo', 50);
            $table->string('marca', 20);
            $table->integer('anio_modelo');
            $table->foreign('id_taller')->references('id_taller')->on('taller');
            $table->foreign('id_organizacion')->references('id_organizacion')->on('organizacion');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('registro_siniestro');
    }
};