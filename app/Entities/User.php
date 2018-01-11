<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class User extends Model implements Transformable
{
    use TransformableTrait;

    public $timestamps = false;
    protected $fillable = [];
    protected $appends = ['avatarUrl'];

    public function getAvatarUrlAttribute()
    {
        return 'http://lorempixel.com/300/300/';
    }

}
