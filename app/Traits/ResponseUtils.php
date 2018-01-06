<?php
namespace App\Traits;

trait ResponseUtils {
    /**
     * @param mixed  $data
     * @param string  $nextPageUrl (optional)
     * @param string  $previousPageUrl (optional)
     *
     * @return array
     */
    public static function makeResponse($data, $nextPageUrl = "", $previousPageUrl = "")
    {
        $response = [
            'result' => $data,
        ];

        $nextPageUrl && $response['nextPageUrl'] = $nextPageUrl;

        $previousPageUrl && $response['previousPageUrl'] = $previousPageUrl;

        return $response;
    }

    /**
     * @param string $message
     * @param array  $data
     *
     * @return array
     */
    public static function makeError($message, array $data = [])
    {
        $res = [
            'error' => $message,
        ];

        $data && $res['data'] = $data;

        return $res;
    }
}