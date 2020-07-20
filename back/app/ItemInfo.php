<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SubCategory;

class ItemInfo extends Model
{
    protected $table = 'item_info';
    protected $fillable = ['title', 'image', 'description', 'price_lbp','price_dollar','minimum_quality'];
    
        public function sub_categories()
        {
            return $this->belongsToMany('App\SubCategory', 'sub_info', 'item_info_id', 'sub_categories_id');
        }
    }






