<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderedItem extends Model
{ 
    public $timestamps = FALSE;
    protected $table = 'ordered_item';
    protected $fillable = ['quantity', 'lbp_price', 'dollar_price', 'available', 'order_history_id', 'item_info_id'];
}

