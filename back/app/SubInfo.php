<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubInfo extends Model
{
    protected $table = 'sub_info';
    protected $fillable = ['item_info_id', 'sub_categories_id'];
}
