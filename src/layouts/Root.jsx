import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/footer/Footer';

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                
            </div>
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default Root;