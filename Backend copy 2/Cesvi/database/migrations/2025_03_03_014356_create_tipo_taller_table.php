<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('tipo_taller', function (Blueprint $table) {
            $table->id('id_tipo_taller');
            $table->string('tipo_taller', 50);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipo_taller');
    }
};