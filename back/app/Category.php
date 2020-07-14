<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';
    protected $fillable = ['title', 'image', 'supplier_info_id'];


    public function subCategories(){
        return $this->hasMany('App\SubCategory', 'category_id');
    }
}
