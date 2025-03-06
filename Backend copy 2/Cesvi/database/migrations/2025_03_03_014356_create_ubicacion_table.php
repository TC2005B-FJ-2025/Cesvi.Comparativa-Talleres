<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('ubicacion', function (Blueprint $table) {
            $table->id('id_ubicacion');
            $table->string('estado', 100);
            $table->string('municipio', 100);
            $table->string('zona', 100);
            $table->string('cp', 10);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ubicacion');
    }
};