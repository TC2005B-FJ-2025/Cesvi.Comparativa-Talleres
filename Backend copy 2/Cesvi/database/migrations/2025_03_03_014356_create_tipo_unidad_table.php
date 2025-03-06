<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('tipo_unidad', function (Blueprint $table) {
            $table->id('id_unidad');
            $table->string('tipo_unidad', 16);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipo_unidad');
    }
};
