<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SubCategory;

class ItemInfo extends Model
{
    protected $table = 'item_info';
    protected $fillable = ['title', 'image', 'description', 'price_lbp', 'minimum_quality'];
    
        public function sub_categories()
        {
            return $this->belongsToMany(SubCategory::class, 'sub_info','sub_categories_id','item_info_id');
        }
    }






