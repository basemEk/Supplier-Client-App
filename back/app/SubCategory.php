<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    protected $table = 'sub_catergories';
    protected $fillable = ['title', 'image', 'category_id'];
}
