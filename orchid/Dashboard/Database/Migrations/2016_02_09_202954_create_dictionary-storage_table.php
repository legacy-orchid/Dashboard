<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDictionaryStorageTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('dictionary-storage', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('dictionary_id');
            $table->string('value');
            $table->integer('language_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('dictionary-storage');
    }
}
