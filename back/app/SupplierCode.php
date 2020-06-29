<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SupplierCode extends Model
{
    protected $table = 'supplier_code';
    protected $fillable = ['code','supplier_info_id'];
}
