import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Result } from 'postcss';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = async e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
       
        signIn(email, password)
            .then(result =>{
                toast.success('Login successful');
                console.log(result.user)
            })
            .catch(error =>{
               
                toast.error('Credential does not match');
                console.error();
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full lg:w-1/2">
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Email
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered" name='email' required />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Password
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        <label>
                            <a href="#" className="label-text-alt link link-hover text-sm font-medium">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold">
                            Sign In</button>
                    </div>
                </form>

                <div className='mt-8 mb-8 flex flex-row justify-center items-center gap-2'>
                    <div className='w-1/2'><hr /></div>
                    <div> OR </div>
                    <div className='w-1/2'><hr /></div>
                </div>
                <div className='flex flex-col mt-5 gap-5'>
                    <button className="bg-gradient-to-r from-teal-400 to-indigo-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-teal-500 hover:to-indigo-600 transition duration-300 font-bold">
                        Continue with Google
                    </button>
                    <button className="bg-gradient-to-r from-purple-400 to-pink-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition duration-300 font-bold">
                        Continue with Facebook
                    </button>
                </div>

                <div className='flex flex-row justify-center items-center mt-10'>
                    <p className=' font-semibold'>Don't have an account? <Link className=' text-blue-500 underline' to='/register'>Create an Account</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;
