<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    public $timestamps = FALSE;
    protected $table = 'contact_us';
    protected $fillable = ['email', 'message'];
}
