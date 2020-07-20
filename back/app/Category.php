<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = FALSE;
    protected $table = 'category';
    protected $fillable = ['title', 'image', 'supplier_info_id', 'slug'];


    public function subCategories(){
        return $this->hasMany('App\SubCategory', 'category_id');
    }
}
