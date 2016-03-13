<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTypesPropertyTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('types-property', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('properties_id');
            $table->integer('type_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('types-property');
    }
}
