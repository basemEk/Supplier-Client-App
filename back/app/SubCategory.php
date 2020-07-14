<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\ItemInfo;
class SubCategory extends Model
{
    protected $table = 'sub_categories';
    protected $fillable = ['title', 'image', 'category_id'];


    public function items()
    {
        return $this->belongsToMany('App\ItemInfo', 'sub_info','sub_categories_id', 'item_info_id');
    }


}
