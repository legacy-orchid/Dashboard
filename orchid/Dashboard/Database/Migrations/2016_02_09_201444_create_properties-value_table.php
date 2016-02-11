<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePropertiesValueTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('properties-value', function (Blueprint $table) {
            $table->increments('id');
            $table->text('value');
            $table->integer('language_id');
            $table->integer('properties_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('properties-value');
    }
}
