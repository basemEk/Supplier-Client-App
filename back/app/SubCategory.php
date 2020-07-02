<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\ItemInfo;
class SubCategory extends Model
{
    protected $table = 'sub_categories';
    protected $fillable = ['title', 'image', 'category_id'];


    public function informations()
    {
        return $this->belongsToMany(ItemInfo::class, 'sub_info','item_info_id','sub_categories_id');
    }
}
