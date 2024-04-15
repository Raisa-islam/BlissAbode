import React, { useContext, useState } from 'react';
import { HiLink } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AuthContext } from '../../providers/AuthProviders';

const UpdateProfile = () => {
    const { user, ProfileUpdate } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: user.displayName,
        email: user.email,
        url: user.photoURL
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdateProfile = () => {
        console.log(formData);
        // Call the ProfileUpdate function with formData
        ProfileUpdate(formData.name, formData.url);
    };

    return (
        <div className='flex flex-col justify-center items-center p-4 lg:w-1/2 mx-auto mt-6 bg-white'>
            <div className="rounded-full border border-gray-200 border-opacity-50 p-2 bg-slate-100 mb-6">
                <img
                    alt="User Avatar"
                    src="https://i.ibb.co/qyFrChk/grill.jpg"
                    className="rounded-full w-28 lg:w-44 h-28 lg:h-44 object-cover"
                />
            </div>
            <hr className=' bg-black w-full' />
            <div className='mt-6 flex flex-col gap-6 lg:w-2/3 md:w-4/5 w-10/12'>
                <label className="input input-bordered flex items-center gap-2  border-black border-opacity-50">
                    <FaUser />
                    <input
                        type="text"
                        className="grow"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2 border-black border-opacity-50">
                    <SiGmail />
                    <input
                        type="text"
                        className="grow"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        readOnly
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2 border-black border-opacity-50">
                    <HiLink />
                    <input
                        type="text"
                        className="grow"
                        name='url'
                        value={formData.url}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>

            </div>

            <div className='mt-8 flex flex-row gap-'>


                <button onClick={handleUpdateProfile} className="bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold">
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default UpdateProfile;
