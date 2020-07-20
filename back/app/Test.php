<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $table = 'newtest';
    protected $fillable = ['quantity', 'lbp_price', 'dollar_price', 'available', 'order_history_id', 'item_info_id'];
}
