import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        p_url: '',
        email: '',
        password: '',
        c_password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear errors when user starts typing in the input field
        setErrors({
            ...errors,
            [e.target.name]: ''
        });

        
    };

    const handleRegister = e => {
        e.preventDefault();
        
        const { name, p_url, email, password, c_password } = formData;

        // Password verification
        const passwordError = [];
        if (!password.match(/[A-Z]/)) {
            passwordError.push('Password must have at least one uppercase letter');
        }
        if (!password.match(/[a-z]/)) {
            passwordError.push('Password must have at least one lowercase letter');
        }
        if (password.length < 6) {
            passwordError.push('Password must be at least 6 characters long');
        }
        if (password !== c_password) {
            passwordError.push('Passwords do not match');
        }
        if (passwordError.length > 0) {
            setErrors({
                ...errors,
                password: passwordError.join(', ')
            });
            return;
        }

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            // Show success toast
            toast.success('Registration successful');
        })
        .catch(error =>{
            console.error(error);
            // Show error toast
            toast.error('Registration failed');
        });

        // Clear form data
        setFormData({
            name: '',
            p_url: '',
            email: '',
            password: '',
            c_password: ''
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full lg:w-1/2 p-4">
                <form onSubmit={handleRegister}>
                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Name
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" name='name' value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Photo URL
                        </label>
                        <input type="text" placeholder="Enter your photo Url" className="input input-bordered" name='p_url' value={formData.p_url} onChange={handleChange} required />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Email
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered" name='email' value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Password
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' value={formData.password} onChange={handleChange} required />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Confirm Password
                        </label>
                        <input type="password" placeholder="Confirm password" className="input input-bordered" name='c_password' value={formData.c_password} onChange={handleChange} required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold">
                            Register
                        </button>
                    </div>
                </form>

                <div className='flex flex-row justify-center items-center mt-10'>
                    <p className=' font-semibold'>Already have an account? <Link className=' text-blue-500 underline' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
