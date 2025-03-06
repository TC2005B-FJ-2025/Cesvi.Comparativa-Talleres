<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('criterio', function (Blueprint $table) {
            $table->id('id_criterio');
            $table->string('nombre_criterio', 100);
            $table->integer('peso');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('criterio');
    }
};