<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderHistory extends Model
{
    public $timestamps = FALSE;
    protected $table = 'order_history';
    protected $fillable = ['invoice', 'client_info_id', 'supplier_info_id'];

    public function supplier() {
        return $this->belongsTo('App\SupplierInfo', 'supplier_info_id'); 
    }

    public function items() {
        return $this->hasMany('App\OrderedItem');
    }

}
