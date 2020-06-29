<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SubInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_info', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('item_info_id');
            $table->foreign('item_info_id')->references('id')->on('item_info');
            $table->unsignedInteger('sub_categories_id');
            $table->foreign('sub_categories_id')->references('id')->on('sub_categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sub_info');
    }
}
