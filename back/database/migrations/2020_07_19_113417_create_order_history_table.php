<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_history', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('invoice');
            $table->unsignedInteger('client_info_id');
            $table->foreign('client_info_id')->references('id')->on('client_info')->onDelete('cascade');
            $table->unsignedBigInteger('supplier_info_id');
            $table->foreign('supplier_info_id')->references('id')->on('supplier_info')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_history');
    }
}
