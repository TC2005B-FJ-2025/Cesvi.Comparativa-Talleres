<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('log_operaciones', function (Blueprint $table) {
            $table->id('id_log');
            $table->dateTime('fecha_hora');
            $table->string('IP', 45);
            $table->unsignedBigInteger('id_usuario');
            $table->string('accion', 50);
            $table->string('modulo', 50);
            $table->foreign('id_usuario')->references('id_usuario')->on('usuario');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('log_operaciones');
    }
};