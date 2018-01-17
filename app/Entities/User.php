<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class User extends Model implements Transformable
{
    use TransformableTrait;

    public $timestamps = false;
    protected $fillable = ['name'];
    protected $appends = ['avatarUrl'];

    public function getAvatarUrlAttribute()
    {
        return 'https://dummyimage.com/'.rand(200,600).'x'.rand(200,600);
    }

}
