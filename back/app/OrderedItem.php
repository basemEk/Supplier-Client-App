<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderedItem extends Model
{
    protected $table = 'ordered_item';
    protected $fillable = ['quantity', 'lbp_price', 'dollar_price', 'available', 'order_history_id', 'item_info_id'];
}

