import React from 'react';
import Navbar from '../../shared/components/structure/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../shared/components/structure/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-120px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;