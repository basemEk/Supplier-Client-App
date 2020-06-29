<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemInfo extends Model
{
    protected $table = 'item_info';
    protected $fillable = ['title', 'image', 'description', 'price_lbp', 'price_dollar', 'minimum_quantity'];
}
