<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('tipo_usuario', function (Blueprint $table) {
            $table->id('id_tipousuario');
            $table->string('tipo_usuario', 20);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipo_usuario');
    }
};