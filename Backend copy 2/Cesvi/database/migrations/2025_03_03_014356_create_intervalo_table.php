<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('intervalo', function (Blueprint $table) {
            $table->string('id_intervalo', 2)->primary();
            $table->string('costo_por_siniestro', 30);
            $table->string('volumen_produccion_bajo', 4);
            $table->string('volumen_produccion_alto', 4);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('intervalo');
    }
};