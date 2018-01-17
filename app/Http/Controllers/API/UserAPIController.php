<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\APIController;
use App\Http\Requests\UserUpdateRequest;
use App\Presenters\UserPresenter;
use App\Repositories\UserRepository;
use App\Repositories\UserRepositoryEloquent;
use App\Validators\UserValidator;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class UserAPIController extends APIController
{
    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * @var UserValidator
     */
    protected $validator;

    public function __construct(UserRepositoryEloquent $repository, UserValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $currentPage = $request->get('page', 1);
        Paginator::currentPageResolver(function() use ($currentPage) {
            return $currentPage;
        });
        $users = $this->repository->paginate(10);

        return $this->sendResponse($users);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = $this->repository->skipCriteria()->find($id);

        if (!$user) {
            return $this->sendResponse([], 404);
        }

        return $this->sendResponse([
            'result' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UserUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(UserUpdateRequest $request, $id)
    {
        try {
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $user = $this->repository->update($request->all(), $id);

            if (!$user) {
                return $this->sendResponse([], 404);
            }

            $response = [
                'result'    => $user,
            ];

            return $this->sendResponse($response);
        } catch (ValidatorException $e) {

            return $this->sendResponse([
                'error'   => true,
                'messages' => $e->getMessageBag()
            ], 422);
        }
    }
}