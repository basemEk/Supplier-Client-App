<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('item_info', function (Blueprint $table) {
            $table->increments('id');
            $table->text('title');
            $table->text('image');
            $table->text('description');
            $table->double('price_lbp');
            $table->double('price_dollar');
            $table->integer('minimum_quantity');
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
        //
        Schema::dropIfExists('item_info');

    }
}
