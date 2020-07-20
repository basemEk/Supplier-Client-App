<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderedItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordered_item', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('quantity');
            $table->integer('lbp_price');
            $table->integer('dollar_price');
            $table->boolean('available');
            $table->unsignedInteger('order_history_id');
            $table->foreign('order_history_id')->references('id')->on('order_history')->onDelete('cascade');
            $table->unsignedInteger('item_info_id');
            $table->foreign('item_info_id')->references('id')->on('item_info')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ordered_item');
    }
}
