<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Repository\UserRepositoryInterface;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserController extends Authenticatable implements JWTSubject
{
    use Notifiable;
    /**
     * The user repository implementation.
     *
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * Create a new controller instance.
     *
     * @param  UserRepository  $userRepository
     * @return void
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index()
    {
        $users = $this->userRepository->all();
        return view('users.index', [
            'users' => $users
        ]);
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $user = $this->userRepository->find($id);

        return view('user.profile', ['user' => $user]);
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function register(Request $request)
    {
        $user = User::where('email', '=', $request->input('email') )->first();

        if( !is_null($user) )
        {
            return response()->json(['error' => 'User exist']);
        }

        $user = new User();
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response()->json(['ok' => 'User created']);
    }


    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
    
}