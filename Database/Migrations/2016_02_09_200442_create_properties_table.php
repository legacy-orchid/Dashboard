<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('dictionary_id');
            $table->string('type');
            $table->string('default');
            $table->text('options');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('properties');
    }
}
