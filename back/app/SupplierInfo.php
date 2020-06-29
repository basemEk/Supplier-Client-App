<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SupplierInfo extends Model
{
    protected $table = 'supplier_info';
    protected $fillable = ['supplier_name','email','company'];
}
