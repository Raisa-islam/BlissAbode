import React, { useContext } from 'react';
import Signin from '../../../components/Buttons/Signin';
import { Link, NavLink } from 'react-router-dom';
import Avatar from '../../../components/avatar/Avatar';
import { AuthContext } from '../../../providers/AuthProviders';


const Navbar = () => {
    const { user, logout, flag } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
        logout()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/abs">Home</NavLink></li>
        <li><NavLink to="/sxz">Home</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user && (user.photoURL || flag) ?
                        <>
                            <Avatar photoURL={user.photoURL} />
                            
                            <button onClick={handleSignOut} className="bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold">
                                Sign out
                            </button>
                        </>

                        :

                        <Link to='/login'> <Signin></Signin></Link>


                }


            </div>
        </div>
    );
};

export default Navbar;