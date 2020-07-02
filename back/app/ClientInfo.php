<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\OrderHistory;

class ClientInfo extends Model
{
    protected $table= "client_info";

    protected $fillable = 
    [
        "username",
        "password",
        "phone_number",
        "confirm_password"
    ];

    public function orders()
    {
        return $this->belongsToMany(OrderHistory::class);
    }

}
