<?php

namespace App\Http\Controllers;

use App\Traits\ResponseUtils;

class APIController extends Controller
{
    use ResponseUtils;

    public function sendResponse($result = [], $code = 200)
    {
        return response()->json(ResponseUtils::makeResponse($result), $code);
    }

    public function sendError($error, $code = 404, $data = [])
    {
        return response()->json(ResponseUtils::makeError($error, $data), $code);
    }
}
