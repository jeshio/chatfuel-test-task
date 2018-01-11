<?php
namespace App;

use League\Fractal\Pagination\CursorInterface;
use League\Fractal\Pagination\PaginatorInterface;
use League\Fractal\Resource\ResourceInterface;
use League\Fractal\Serializer\SerializerAbstract;

class CustomResponseSerializer extends SerializerAbstract
{
    public function collection($resourceKey, array $data)
    {
        return ['result' => $data];
    }

    public function item($resourceKey, array $data)
    {
        return $data;
    }

    public function includedData(ResourceInterface $resource, array $data)
    {
        return $data;
    }

    public function meta(array $meta)
    {
        return $meta[0] ?? [];
    }

    public function paginator(PaginatorInterface $paginator)
    {
        $meta = [];
        $currentPage = (int) $paginator->getCurrentPage();
        $lastPage = (int) $paginator->getLastPage();

        if ($currentPage > 1) {
            $meta['previousPageUrl'] = $paginator->getUrl($currentPage - 1);
        }

        if ($currentPage < $lastPage) {
            $meta['nextPageUrl'] = $paginator->getUrl($currentPage + 1);
        }

        return [$meta];
    }

    public function cursor(CursorInterface $cursor)
    {
        return [];
    }

    public function null()
    {
        return [];
    }
}